import { PlayerState } from "./player-state.enum";

export default interface IPlayer {
    id: string;
    nickname: string;
    state: PlayerState;
    score: number;
}