import { GameState } from "../game-state.enum";

export default interface StateTransitionPayload {
    to: GameState,
    from: GameState
}