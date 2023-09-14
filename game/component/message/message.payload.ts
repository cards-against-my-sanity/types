import IMessage from "./message.interface";

export default interface MessagePayload<T> {
    message: IMessage<T>
}