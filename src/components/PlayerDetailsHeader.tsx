import React from "react";
import { faChessKnight, faCity, faHome, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PlayerDetailsHeader = () => {
    return (
        <div className="row">
            <div className="offset-1 col">
                <p>Name</p>
            </div>
            <div className="col">
                <FontAwesomeIcon icon={faHome} />
            </div>
            <div className="col">
                <FontAwesomeIcon icon={faCity} />
            </div>
            <div className="col">
                <FontAwesomeIcon icon={faChessKnight} />
            </div>
            <div className="col">
                <FontAwesomeIcon icon={faTrophy} />
            </div>
        </div>
    );
};

export default PlayerDetailsHeader;