import { PlayerState } from "src/games/player-state.enum";

export default interface PlayerPayload {
    id: string;
    nickname: string;
    state: PlayerState;
    score: number;
}