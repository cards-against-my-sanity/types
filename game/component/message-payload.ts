export default interface MessagePayload {
    type: "chat" | "system";
    message: string;
}