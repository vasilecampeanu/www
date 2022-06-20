import React from "react";

// OBS: Props are a regullar javascript object and are read only.

// This is a narrow functin
// We don't need a return
const Square = ({ value, onClick }) => (
    <button className="square" onClick = { onClick }>
        { value }
    </button>
);

export default Square;