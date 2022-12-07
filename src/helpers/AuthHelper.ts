import jwt from "jsonwebtoken";

export class AuthHelper {
  static isAccessTokenExpired(): boolean | undefined {
    if (typeof window === "undefined") {
      return undefined;
    }
    const token = this.decodeToken();

    if (token === undefined) return true;

    return this.isExpired(token?.exp);
  }

  static decodeToken(): jwt.JwtPayload | undefined {
    const token: string = localStorage.getItem("access-token");
    if (token === null) return undefined;
    return jwt.decode(token) as jwt.JwtPayload;
  }

  static isExpired(exp: number): boolean {
    return Date.now() > exp * 1000;
  }
}
