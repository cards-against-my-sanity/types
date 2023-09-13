import PartialPlayerPayload from "../../player/partial-player.payload";
import IMessage from "./message.interface";

export default interface ChatMessagePayload {
    message: IMessage<PartialPlayerPayload>
}