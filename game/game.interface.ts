import DecksPayload from "../deck/decks-payload";
import GameSettingsPayload from "./game-settings.interface";
import PartialPlayerPayload from "./player/partial-player.payload";
import PlayersPayload from "./player/players.payload";
import SpectatorsPayload from "./spectator/spectators.payload";
import { GameState } from "./game-state.enum";

export default interface IGame extends DecksPayload, GameSettingsPayload, PlayersPayload, SpectatorsPayload {
    id: string;
    host: PartialPlayerPayload;
    state: GameState;
    roundNumber: number;
}