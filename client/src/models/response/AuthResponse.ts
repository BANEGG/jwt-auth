import { IUser } from "../IUser";

export interface AuthResponse {
    accessToken: string;
    refreshTolen: string;
    user: IUser
}