import PaginationPayload from "../../misc/pagination.payload";
import BlackCardsPayload from "./black-cards.payload";

export default interface PaginatedBlackCardsPayload extends PaginationPayload, BlackCardsPayload {}