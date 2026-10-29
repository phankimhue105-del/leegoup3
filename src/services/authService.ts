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

    // 2. Real Google Apps Script Web App authentication request (POST only)
    try {
      const response = await fetch(this.apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify({
          action: 'login',
          username: trimmedUsername,
          password: trimmedPassword,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP Error ${response.status}`);
      }

      const rawText = await response.text();
      if (!rawText || !rawText.trim()) {
        return {
          success: false,
          message: 'Máy chủ phản hồi rỗng. Vui lòng thử lại sau.',
        };
      }

      let data: any;
      try {
        data = JSON.parse(rawText);
      } catch {
        return {
          success: false,
          message: 'Phản hồi từ máy chủ Google Apps Script không hợp lệ.',
        };
      }

      // Check validation result from Google Sheets
      // Requires explicit data.success === true AND valid student object matching the sent username
      const studentData = data?.student || data?.user;
      const returnedUsername = String(
        studentData?.username || studentData?.id || ''
      )
        .trim()
        .toLowerCase();

      if (
        data &&
        data.success === true &&
        studentData &&
        typeof studentData === 'object' &&
        returnedUsername === trimmedUsername.toLowerCase()
      ) {
        const userProfile = {
          id: String(
            studentData.username || studentData.id || trimmedUsername
          ).trim(),
          name: String(
            studentData.studentName ||
              studentData.name ||
              studentData.username ||
              trimmedUsername
          ).trim(),
          avatarUrl:
            studentData.avatarUrl ||
            'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
          grade: String(
            studentData.className || studentData.grade || 'Lớp 3 / Grade 3'
          ),
          schoolName: studentData.schoolName,
          joinedDate: String(
            studentData.joinedDate || new Date().toISOString().split('T')[0]
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
          'Không thể kết nối đến máy chủ xác thực Google Sheets. Vui lòng kiểm tra lại kết nối mạng!',
      };
    }
  }
}

export const authService = new AuthService();
