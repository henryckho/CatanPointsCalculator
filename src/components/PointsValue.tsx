import React from "react";

const styles = {
    valueGroup: {
        justifyContent: 'center',
    },
    valueButtons: {
        width: '35px',
    },
    value: {
        maxWidth: '40px',
    },
};

type Props = {
    children: number;
    onChange: (increase: boolean) => void;
};

const PointsValue = ({ children, onChange }: Props) => {
    return (
        <div className="input-group" style={styles.valueGroup}>
            <div className="input-group-prepend">
                <button className="btn btn-sm btn-outline-secondary" style={styles.valueButtons} onClick={() => onChange(false)}>-</button>
            </div>
            <div className="form-control" style={styles.value}>
                {children}
            </div>
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" style={styles.valueButtons} onClick={() => onChange(true)}>+</button>
            </div>
        </div>
    );
};

export default PointsValue;