import { GameModel, gameSettings } from "./GameModel";
import { PlayerModel } from "./PlayerModel";

const GameFunctions = (game: GameModel, setGame: React.Dispatch<React.SetStateAction<GameModel>>) => {
    const setBarbarianPosition = (barbarianPosition: number, reset: boolean) => {
        if (barbarianPosition < gameSettings.minBarbarianPosition) barbarianPosition = gameSettings.minBarbarianPosition;
        if (barbarianPosition > gameSettings.maxBarbarianPosition) barbarianPosition = gameSettings.maxBarbarianPosition;
        let updatedGame = { ...game, BarbarianPosition: barbarianPosition };
        if (reset) {
            updatedGame.Players = updatedGame.Players.map(x => { x.knights = 0; return x });
        }
        setGame(updatedGame);
    };

    const setSettlement = (player: PlayerModel) => (increaseSettlement: boolean) => {
        let updatedPlayer = { ...player };
        if (increaseSettlement && updatedPlayer.settlements < gameSettings.maxSettlements) updatedPlayer.settlements++;
        if (!increaseSettlement && updatedPlayer.settlements > gameSettings.minSettlements) updatedPlayer.settlements--;
        let updatedGame = { ...game };
        updatedGame.Players[updatedGame.Players.indexOf(player)] = updatedPlayer;
        setGame(updatedGame);
    };

    const setCities = (player: PlayerModel) => (increaseCities: boolean) => {
        if ((increaseCities && player.settlements > 0) || !increaseCities) {
            let updatedPlayer = { ...player };
            if (increaseCities) {
                if (player.cities < gameSettings.maxCities) {
                    updatedPlayer.cities++;
                    updatedPlayer.settlements--;
                }
            } else {
                if (player.cities > gameSettings.minCities) {
                    updatedPlayer.cities--;
                    updatedPlayer.settlements++;
                }
            }

            let updatedGame = { ...game };
            updatedGame.Players[updatedGame.Players.indexOf(player)] = updatedPlayer;
            setGame(updatedGame);
        }
    };

    const setKnights = (player: PlayerModel) => (increaseKnights: boolean) => {
        let updatedPlayer = { ...player };
        if (increaseKnights && updatedPlayer.knights < gameSettings.maxKnights) updatedPlayer.knights++;
        if (!increaseKnights && updatedPlayer.knights > gameSettings.minKnights) updatedPlayer.knights--;
        let updatedGame = { ...game };
        updatedGame.Players[updatedGame.Players.indexOf(player)] = updatedPlayer;
        setGame(updatedGame);
    };

    return {
        setBarbarianPosition, setSettlement, setCities, setKnights
    }
};

export default GameFunctions;