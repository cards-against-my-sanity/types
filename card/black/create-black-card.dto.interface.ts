import DeckIdsPayload from "../../deck/deck-ids.payload";

export default interface ICreateBlackCardDto extends DeckIdsPayload {
    content: string;
    pick: number;
}