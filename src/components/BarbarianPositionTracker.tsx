import React, { CSSProperties } from "react";
import { gameSettings } from "../models/GameModel";

const styles = {
    barbarianPosition: {
        lineHeight: '30px',
    },
    sidePositions: {
        fontSize: '16px',
        verticalAlign: 'middle',
        opacity: '50%',
    },
    activePosition: {
        fontSize: '30px',
        fontWeight: 'bold',
        verticalAlign: 'middle',
    } as CSSProperties,
};

type Props = {
    barbarianPosition: number;
    onChange: (barbarianPosition: number, reset: boolean) => void;
};

const BarbarianPositionTracker = ({ barbarianPosition, onChange }: Props) => {
    return (
        <div className="row">
            <div className="col-12">
                <ul className="list-inline" style={styles.barbarianPosition}>
                    {barbarianPosition > gameSettings.minBarbarianPosition && <li className="list-inline-item" style={styles.sidePositions}>{barbarianPosition - 1}</li>}
                    <li className="list-inline-item" style={styles.activePosition}>{barbarianPosition}</li>
                    {barbarianPosition < gameSettings.maxBarbarianPosition && <li className="list-inline-item" style={styles.sidePositions}>{barbarianPosition + 1}</li>}
                </ul>
            </div>
            <div className="col">
                <button className="btn btn-success mx-1 px-3" onClick={() => onChange(barbarianPosition - 1, false)}>-</button>
                <button className="btn btn-danger" onClick={() => onChange(0, true)}>Reset</button>
                <button className="btn btn-success mx-1 px-3" onClick={() => onChange(barbarianPosition + 1, false)}>+</button>
            </div>
        </div>
    );
};

export default BarbarianPositionTracker;