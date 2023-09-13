import { GameState } from "../game-state.enum";

export default interface StateTransitionPayload<T> {
    to: GameState,
    from: GameState,
    context?: T
}