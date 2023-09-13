import PartialPlayerPayload from "../../player/partial-player.payload";
import TimestampPayload from "../timestamp.payload";
import IMessage from "./message.interface";

export interface IChatMessage extends IMessage<PartialPlayerPayload & TimestampPayload> {}