import IGame from "./game.interface";

export default interface PartialGamePayload {
    game: Partial<IGame>;
}