export interface User {
  id: string;
  email: string;
  companyName: string;
  socialAccounts: SocialAccount[];

}

export interface SocialAccount {
  platform: string;
  accountId: string;
  accessToken: string;
  refreshToken: string;
  tokenExpiry: number;
}
