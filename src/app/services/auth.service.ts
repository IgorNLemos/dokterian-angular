import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authenticated = false;

  // Mock login credentials
  private readonly mockUsername = 'admin';
  private readonly mockPassword = 'password123';

  // Method to validate login credentials
  validateCredentials(username: string, password: string): boolean {
    if (username === this.mockUsername && password === this.mockPassword) {
      this.authenticated = true;
      return true;
    }
    return false;
  }

  logout() {
    this.authenticated = false;
  }

  isLoggedIn(): boolean {
    return this.authenticated;
  }
}
