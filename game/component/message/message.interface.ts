import PartialPlayerPayload from "../../player/partial-player.payload";
import TimestampPayload from "../timestamp.payload";

export default interface IMessage<T> extends TimestampPayload {
    type: "chat" | "system",
    content: string;
    sender?: PartialPlayerPayload;
}