import React, { useState } from "react";
import GameFunctions from "../models/GameFunctions";
import { InitialGameModel } from "../models/GameModel";
import { PlayerModel } from "../models/PlayerModel";
import BarbarianKnightsDisplay from "./BarbarianKnightsDisplay";
import BarbarianPositionTracker from "./BarbarianPositionTracker";
import PlayerDetails from "./PlayerDetails";
import PlayerDetailsHeader from "./PlayerDetailsHeader";

type Props = {
    playersList: PlayerModel[];
};

const Game = ({ playersList }: Props) => {
    const [game, setGame] = useState(InitialGameModel(playersList));
    const sortedPlayers = [...game.Players].sort((a, b) => {
        if (a.knights > b.knights) {
            return -1;
        }
        if (b.knights > a.knights) {
            return 1;
        }
        return 0;
    });
    const maxNumberOfKnights = sortedPlayers[0].knights;
    const playersWithMostKnights = sortedPlayers.map(x => x.knights > 0 && x.knights === maxNumberOfKnights && x);
    const totalCities = game.Players.reduce((a, b) => a + b.cities, 0);
    const totalKnights = game.Players.reduce((a, b) => a + b.knights, 0);

    const gameFunctions = GameFunctions(game, setGame);

    return (
        <React.Fragment>
            <div className="row">
                <div className="col-6">
                    <div className="row">
                        <div className="col">
                            <span>Barbarian Tracker</span>
                        </div>
                    </div>
                    <BarbarianPositionTracker barbarianPosition={game.BarbarianPosition} onChange={gameFunctions.setBarbarianPosition} />
                </div>
                <div className="col-6">
                    <BarbarianKnightsDisplay totalCities={totalCities} totalKnights={totalKnights} />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <hr />
                </div>
            </div>
            <PlayerDetailsHeader />
            {
                game.Players.map((player, index) =>
                    <PlayerDetails key={`player-${index}`}
                        player={player}
                        playersWithMostKnights={playersWithMostKnights}
                        onChangeSettlement={gameFunctions.setSettlement}
                        onChangeCities={gameFunctions.setCities}
                        onChangeKnights={gameFunctions.setKnights}
                    />
                )
            }
        </React.Fragment>
    );
};

export default Game;