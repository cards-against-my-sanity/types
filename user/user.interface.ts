import IUserPermission from "./user-permission.interface";

export default interface IUser {
    id: string,
    nickname: string,
    email?: string,
    permissions: IUserPermission
}