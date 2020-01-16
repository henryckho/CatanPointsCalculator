export interface PlayerModel {
    name: string;
    settlements: number;
    cities: number;
    knights: number;
};

export const PlayerInitialState: PlayerModel = {
    name: '',
    settlements: 1,
    cities: 1,
    knights: 0,
};

export const PlayersListInitialState: PlayerModel[] = [
    { ...PlayerInitialState },
    { ...PlayerInitialState },
    { ...PlayerInitialState },
];