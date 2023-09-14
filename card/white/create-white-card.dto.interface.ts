import DeckIdsPayload from "../../deck/deck-ids.payload";

export default interface ICreateWhiteCardDto extends DeckIdsPayload {
    content: string;
}