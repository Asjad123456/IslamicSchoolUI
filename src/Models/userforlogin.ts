export interface UserForLogin {
  isAuthSuccessful: boolean;
  errorMessage: string;
  token: string;
  roles: string[];
  appUser: {
    userName: string;
    fatherName: string;
    branchId: number;
    branch: string;
    userRoles: string;
    id: string;
    normalizedUserName: string;
    email: string;
    normalizedEmail: string;
    emailConfirmed: boolean;
    passwordHash: string;
    securityStamp: string;
    concurrencyStamp: string;
    phoneNumber: string;
    phoneNumberConfirmed: boolean;
    twoFactorEnabled: boolean;
    lockoutEnd: string;
    lockoutEnabled: boolean;
    accessFailedCount: number;
  };
}
