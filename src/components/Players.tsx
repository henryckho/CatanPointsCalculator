import React, { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from "react";
import { PlayerModel } from "../models/PlayerModel";
import PlayerInput from "./PlayerInput";

type Props = {
    playersList: PlayerModel[];
    setPlayersList: Dispatch<SetStateAction<PlayerModel[]>>;
};

const PlayersInput = ({ playersList, setPlayersList }: Props) => {
    const handleChange = (playerIndex: number) => (event: ChangeEvent<HTMLInputElement>) => {
        const newPlayers = [...playersList];
        newPlayers[playerIndex].name = event.target.value;
        setPlayersList(newPlayers);
    };

    const removePlayer = (playerIndex: number) => (_: MouseEvent) => {
        const newPlayers = [...playersList];
        newPlayers.splice(playerIndex, 1)
        setPlayersList(newPlayers);
    };

    return (
        <React.Fragment>
            {
                (playersList || []).map((player, index) =>
                    <div key={index} className="row">
                        <div className="col">
                            <PlayerInput name={player.name} handleChange={handleChange(index)} />
                        </div>
                        <div className="col-xs-3">
                            <button className="btn btn-secondary" onClick={removePlayer(index)} disabled={playersList.length <= 3}>x</button>
                        </div>
                    </div>
                )
            }
        </React.Fragment >
    );
};

export default PlayersInput;