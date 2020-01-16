import React from "react";
import { PlayerModel } from "../models/PlayerModel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faTimes, faCalculator } from '@fortawesome/free-solid-svg-icons'
import PointsValue from "./PointsValue";

const styles = {
    star: {
        color: 'gold'
    },
    cross: {
        color: 'black'
    },
    victoryPoints: {
        lineHeight: '40px',
        marginBottom: '0',
    },
};

type Props = {
    player: PlayerModel;
    playersWithMostKnights: PlayerModel[];
    onChangeSettlement: (player: PlayerModel) => (increaseSettlement: boolean) => void;
    onChangeCities: (player: PlayerModel) => (increaseCities: boolean) => void;
    onChangeKnights: (player: PlayerModel) => (increaseKnights: boolean) => void;
};

const calculatePoints = (player: PlayerModel): number => {
    return (player.settlements) + (player.cities * 2);
};

const PlayerDetails = ({ player, playersWithMostKnights, onChangeSettlement, onChangeCities, onChangeKnights }: Props) => {
    const hasMostKnights = playersWithMostKnights.indexOf(player) > -1;

    return (
        <div className="row">
            <div className="col-1 px-0">
                {hasMostKnights && <FontAwesomeIcon icon={faStar} style={styles.star} />}
                {!hasMostKnights && playersWithMostKnights[0].knights > 0 && <FontAwesomeIcon icon={faTimes} style={styles.cross} />}
            </div>
            <div className="col px-0">
                <p>{player.name}</p>
            </div>
            <div className="col px-0">
                <PointsValue onChange={onChangeSettlement(player)}>{player.settlements}</PointsValue>
            </div>
            <div className="col px-0">
                <PointsValue onChange={onChangeCities(player)}>{player.cities}</PointsValue>
            </div>
            <div className="col px-0">
                <PointsValue onChange={onChangeKnights(player)}>{player.knights}</PointsValue>
            </div>
            <div className="col px-0">
                <p style={styles.victoryPoints}>{calculatePoints(player)}</p>
            </div>
        </div>
    );
};

export default PlayerDetails;