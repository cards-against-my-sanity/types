import ICreateDeckDto from "./create-deck.dto.interface";

export default interface IUpdateDeckDto extends Partial<ICreateDeckDto> {}