import IUserPermission from "./user-permission.interface";

export interface IUser {
    id: string,
    nickname: string,
    email?: string,
    permissions: IUserPermission
}