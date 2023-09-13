import IPlayer from "./player.interface";

export default interface PartialPlayerPayload {
    player: Partial<IPlayer>;
}