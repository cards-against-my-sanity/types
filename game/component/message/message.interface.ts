import { MessageType } from "./message-type";

export default interface IMessage<T> {
    type: MessageType;
    content: string;
    context?: T;
}