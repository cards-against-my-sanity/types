import IMessage from "./message.interface";
import PartialPlayerPayload from "../../player/partial-player.payload";

export default interface ChatMessagePayload {
    message: IMessage<PartialPlayerPayload>
}