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
   * Will be assigned in the next phase when the Apps Script endpoint is deployed.
   */
  private apiEndpoint: string | null = null;

  /**
   * Configure API Endpoint URL
   */
  public setApiEndpoint(url: string): void {
    this.apiEndpoint = url.trim();
  }

  /**
   * Get current API Endpoint URL
   */
  public getApiEndpoint(): string | null {
    return this.apiEndpoint;
  }

  /**
   * Process student login request
   * 
   * Strict guidelines:
   * - No mock accounts
   * - No auto-granting access without real verification
   * - Never stores password in localStorage / sessionStorage
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

    // 2. Simulate processing delay (800ms) to display loading state & prevent double submission
    await new Promise((resolve) => setTimeout(resolve, 800));

    // 3. Phase 1 Check: Google Apps Script API endpoint is not yet configured
    if (!this.apiEndpoint) {
      return {
        success: false,
        isPendingSetup: true,
        message:
          'Dịch vụ xác thực Google Apps Script đang được chuẩn bị để kết nối ở bước tiếp theo. Tài khoản sẽ được kích hoạt khi liên kết API hoàn tất!',
      };
    }

    // 4. Future implementation: Live Google Apps Script Web App request
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

      const data = await response.json();
      return {
        success: !!data.success,
        user: data.user,
        message: data.message || (data.success ? 'Đăng nhập thành công!' : 'Tên đăng nhập hoặc mật khẩu không đúng.'),
      };
    } catch (error) {
      return {
        success: false,
        message: 'Không thể kết nối đến máy chủ xác thực Google Sheets. Vui lòng thử lại sau.',
      };
    }
  }
}

export const authService = new AuthService();
