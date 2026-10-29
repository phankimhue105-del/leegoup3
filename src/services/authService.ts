import { LoginCredentials, AuthResult } from '../types/auth';

/**
 * Authentication Service
 * 
 * Separates authentication logic and API communication from UI components.
 * Architecture prepared for connecting to Google Apps Script / Google Sheets in the next phase.
 */
class AuthService {
  /**
   * Google Apps Script Web App API URL
   */
  private apiEndpoint: string =
    'https://script.google.com/macros/s/AKfycbymR5CS1KgzuBwRp2bHXMPWv56N3CmWKL44fV5zWkyF7XkLH_38H0x9o_ldqPcXjklS/exec';

  /**
   * Configure API Endpoint URL
   */
  public setApiEndpoint(url: string): void {
    this.apiEndpoint = url.trim();
  }

  /**
   * Get current API Endpoint URL
   */
  public getApiEndpoint(): string {
    return this.apiEndpoint;
  }

  /**
   * Process student login request
   * 
   * Strict guidelines:
   * - Real Google Apps Script verification against 'up3login' sheet
   * - Never stores password in localStorage / sessionStorage
   * - Preserves user credentials on server, maps to safe UserProfile
   */
  public async login(credentials: LoginCredentials): Promise<AuthResult> {
    const trimmedUsername = credentials.username.trim();
    const trimmedPassword = credentials.password.trim();

    // 1. Client-side validation
    if (!trimmedUsername && !trimmedPassword) {
      return {
        success: false,
        message: 'Vui lòng nhập Tên đăng nhập và Mật khẩu. (Please enter username and password.)',
      };
    }

    if (!trimmedUsername) {
      return {
        success: false,
        message: 'Vui lòng nhập Tên đăng nhập. (Please enter your username.)',
      };
    }

    if (!trimmedPassword) {
      return {
        success: false,
        message: 'Vui lòng nhập Mật khẩu. (Please enter your password.)',
      };
    }

    // 2. Real Google Apps Script Web App authentication request
    try {
      let rawText = '';

      // Strategy 1: Attempt GET request with query params (recommended for Google Apps Script 302 redirects)
      try {
        const getUrl = new URL(this.apiEndpoint);
        getUrl.searchParams.set('action', 'login');
        getUrl.searchParams.set('username', trimmedUsername);
        getUrl.searchParams.set('password', trimmedPassword);

        const getResponse = await fetch(getUrl.toString(), {
          method: 'GET',
          redirect: 'follow',
        });

        if (getResponse.ok) {
          rawText = await getResponse.text();
        }
      } catch (getErr) {
        // Fallback to Strategy 2 if GET is blocked or fails
        rawText = '';
      }

      // Strategy 2: If GET produced no text or failed, try POST with text/plain (CORS preflight-free)
      if (!rawText) {
        try {
          const postResponse = await fetch(this.apiEndpoint, {
            method: 'POST',
            redirect: 'follow',
            headers: {
              'Content-Type': 'text/plain;charset=utf-8',
            },
            body: JSON.stringify({
              action: 'login',
              username: trimmedUsername,
              password: trimmedPassword,
            }),
          });

          if (postResponse.ok) {
            rawText = await postResponse.text();
          }
        } catch (postErr) {
          rawText = '';
        }
      }

      // If both network requests failed to get a response
      if (!rawText) {
        if (typeof navigator !== 'undefined' && !navigator.onLine) {
          return {
            success: false,
            message:
              'Thiết bị của bạn đang mất kết nối Internet. Vui lòng kiểm tra lại đường truyền mạng!',
          };
        }

        return {
          success: false,
          message:
            'Không thể kết nối đến máy chủ Google Apps Script (Máy chủ bị chặn hoặc gặp lỗi cú pháp tại tệp Mã). Vui lòng cập nhật script trên Google Sheets theo hướng dẫn!',
        };
      }

      // Check if response is HTML error page from Google Apps Script
      let data: any;
      try {
        data = JSON.parse(rawText);
      } catch {
        if (
          rawText.includes('TypeError:') ||
          rawText.includes('Google Apps Script') ||
          rawText.includes('<html') ||
          rawText.includes('<!DOCTYPE')
        ) {
          return {
            success: false,
            message:
              'Máy chủ Google Apps Script đang gặp lỗi mã nguồn nội bộ (TypeError tại dòng 1 tệp Mã). Bản triển khai Web App chưa được cập nhật phiên bản mới trên Google Sheets!',
          };
        }

        return {
          success: false,
          message: 'Phản hồi từ máy chủ Google Apps Script không đúng định dạng JSON.',
        };
      }

      // Check validation result from Google Sheets
      if (data && data.success) {
        const userProfile = {
          id: String(data.user?.id || trimmedUsername),
          name: String(data.user?.name || data.user?.studentName || trimmedUsername),
          avatarUrl:
            data.user?.avatarUrl ||
            'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
          grade: String(data.user?.grade || data.user?.class || 'Lớp 3 / Grade 3'),
          schoolName: data.user?.schoolName,
          joinedDate: String(
            data.user?.joinedDate || new Date().toISOString().split('T')[0]
          ),
        };

        return {
          success: true,
          user: userProfile,
          message: data.message || 'Đăng nhập thành công!',
        };
      }

      return {
        success: false,
        message:
          data?.message ||
          'Tên đăng nhập hoặc mật khẩu không chính xác. Vui lòng kiểm tra lại!',
      };
    } catch (error: any) {
      if (typeof navigator !== 'undefined' && !navigator.onLine) {
        return {
          success: false,
          message:
            'Thiết bị của bạn đang mất kết nối Internet. Vui lòng kiểm tra lại đường truyền mạng!',
        };
      }

      return {
        success: false,
        message:
          'Không thể kết nối đến máy chủ xác thực Google Sheets. Vui lòng kiểm tra lại cấu hình Web App!',
      };
    }
  }
}

export const authService = new AuthService();
