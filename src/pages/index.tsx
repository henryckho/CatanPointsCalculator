import React, { useState } from 'react';
import Game from '../components/Game';
import PlayersInput from '../components/Players';
import { PlayerInitialState, PlayerModel, PlayersListInitialState } from '../models/PlayerModel';
import { Helmet } from "react-helmet";
import "../styles/global.css";

const alignCenter: React.CSSProperties = {
    textAlign: 'center',
};

const Index = () => {
    const [playersList, setPlayersList] = useState<PlayerModel[]>(PlayersListInitialState);
    const [startGame, setStartGame] = useState(false);

    const handleStartGame = () => {
        if (playersList.filter(x => x.name === '').length === 0) {
            setStartGame(true);
        } else {
            //Output error
        }
    };

    const addPlayer = () => {
        const newPlayers = [...playersList];
        newPlayers.push({ ...PlayerInitialState });
        setPlayersList(newPlayers);
    };

    return (
        <div>
            <Helmet>
                <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
                <link rel="stylesheet" type="text/css" href="static/main.css" />
            </Helmet>
            <div className="container-fluid" style={alignCenter}>
                {
                    !startGame ?
                        <React.Fragment>
                            <div className="row">
                                <div className="offset-sm-2 col-sm-8 offset-md-3 col-md-6">
                                    <PlayersInput playersList={playersList} setPlayersList={setPlayersList} />
                                    <div className="row">
                                        <div className="col">
                                            <button className="btn btn-primary" onClick={addPlayer} disabled={playersList.length >= 6}>Add Player</button>
                                        </div>
                                        <div className="col">
                                            <button className="btn btn-secondary" onClick={handleStartGame}>Start Game</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                        :
                        <React.Fragment>
                            <Game playersList={playersList} />
                        </React.Fragment>
                }
            </div>
        </div>
    );
};

export default Index;