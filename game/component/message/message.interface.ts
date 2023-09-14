export default interface IMessage<T> {
    content: string;
    context?: T;
}