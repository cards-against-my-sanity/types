import { GameState } from "src/games/game-state.enum";

export default interface StateTransitionPayload {
    to: GameState,
    from: GameState
}