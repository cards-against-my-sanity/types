/**
 * Lobby->Dealing->Playing->Judging->{Dealing, Win}
 * 
 * Win->Reset->Lobby
 * 
 * Any state can transition to Reset if game requirements
 * become unmet (e.g., too many players leave the game.)
 * 
 * Abandoned is a special state indicating the game
 * host has left the game.
 */
export enum GameState {
    Lobby = "Lobby",
    Dealing = "Dealing",
    Playing = "Playing",
    Judging = "Judging",
    Win = "Win",
    Reset = "Reset",
    Abandoned = "Abandoned"
}