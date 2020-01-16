import React, { ChangeEvent } from "react";

type Props = {
    name: string;
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const PlayerInput = ({ name, handleChange }: Props) => {
    return (
        <input type="text" className="form-control" value={name} onChange={handleChange} />
    );
};

export default PlayerInput;