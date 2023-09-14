import IMessage from "./message.interface";
import TimestampPayload from "../timestamp.payload";

export default interface ISystemMessage extends IMessage<TimestampPayload> {}