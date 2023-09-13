import DecksPayload from "../deck/decks.payload";
import GameSettingsPayload from "./game-settings.payload";
import PlayersPayload from "./player/players.payload";
import SpectatorsPayload from "./spectator/spectators.payload";
import { GameState } from "./game-state.enum";
import IPlayer from "./player/player.interface";

export default interface IGame extends DecksPayload, GameSettingsPayload, PlayersPayload, SpectatorsPayload {
    id: string;
    host: Partial<IPlayer>;
    state: GameState;
    roundNumber: number;
}