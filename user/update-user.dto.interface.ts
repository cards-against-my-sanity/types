import ICreateUserDto from "./create-user.dto.interface";

export default interface IUpdateUserDto extends Partial<ICreateUserDto> {}