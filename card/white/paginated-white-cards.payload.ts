import PaginationPayload from "../../misc/pagination.payload";
import WhiteCardsPayload from "./white-cards.payload";

export default interface PaginatedWhiteCardsPayload extends PaginationPayload, WhiteCardsPayload {}