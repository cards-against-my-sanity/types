import { Deck } from "src/decks/entities/deck.entity";
import { GameState } from "src/games/game-state.enum";
import PlayerPayload from "./player.payload";
import SpectatorPayload from "./spectator.payload";
import GameSettingsPayload from "./game-settings.payload";

export default interface GamePayload {
    id: string;
    host: { id: string, nickname: string };
    decks: Deck[];
    state: GameState;
    settings: GameSettingsPayload;
    players: PlayerPayload[];
    spectators: SpectatorPayload[];
    roundNumber: number;
}