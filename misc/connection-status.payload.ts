export default interface ConnectionStatusPayload {
    status: "open" | "closed",
    type?: "guest" | "user",
    message?: string
}