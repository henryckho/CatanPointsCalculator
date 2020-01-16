import { PlayerModel } from "./PlayerModel";

export interface GameModel {
    Players: PlayerModel[];
    BarbarianPosition: number;
};

export const InitialGameModel = (players: PlayerModel[]): GameModel => {
    return {
        Players: players,
        BarbarianPosition: 0,
    };
};

export const gameSettings = {
    minBarbarianPosition: 0,
    maxBarbarianPosition: 7,
    minSettlements: 0,
    maxSettlements: 5,
    minCities: 0,
    maxCities: 4,
    minKnights: 0,
    maxKnights: 12,
};