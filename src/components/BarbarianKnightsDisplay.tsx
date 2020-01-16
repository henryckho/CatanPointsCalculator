import React, { CSSProperties } from "react";

const styles = {
    vs: {
        fontWeight: 'bold',
        lineHeight: '100px',
    } as CSSProperties,
    totalValue: {
        fontWeight: 'bold',
        fontSize: '20px',
    } as CSSProperties,
};

type Props = {
    totalCities: number;
    totalKnights: number;
};

const BarbarianKnightsDisplay = ({ totalCities, totalKnights }: Props) => {
    return (
        <div className="row">
            <div className="col-5">
                <p>Barbarians</p>
                <p style={styles.totalValue}>{totalCities}</p>
            </div>
            <div className="col-2">
                <p style={styles.vs}>vs</p>
            </div>
            <div className="col-5">
                <p>Knights</p>
                <p style={styles.totalValue}>{totalKnights}</p>
            </div>
        </div>
    );
};

export default BarbarianKnightsDisplay;