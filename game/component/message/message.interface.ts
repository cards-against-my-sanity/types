import { MessageType } from "./message-type.enum";

export default interface IMessage<T> {
    type: MessageType;
    content: string;
    context?: T;
}