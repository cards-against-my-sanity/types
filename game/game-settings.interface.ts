export default interface IGameSettings {
    maxPlayers: number;
    maxSpectators: number;
    maxScore: number;   
    roundIntermissionTimer: number;
    gameWinIntermissionTimer: number;
    playingTimer: number;
    judgingTimer: number;
    allowPlayersToJoinMidGame: boolean;
}