import PartialPlayerPayload from "../../player/partial-player.payload";
import IPlayer from "../../player/player.interface";
import TimestampPayload from "../timestamp.payload";

export default interface IMessage extends TimestampPayload {
    type: "chat" | "system",
    content: string;
    sender?: Partial<IPlayer>;
}