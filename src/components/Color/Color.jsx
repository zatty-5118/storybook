import React from 'react';

const Color = ({ colors }) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", width: "100%" }}>
            <div style={{
                display: "flex",
                width: "100%",
                height: "100px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                overflow: "hidden"
            }}>
            {colors.map((color, index) => (
                <div
                    key={index}
                    style={{
                    flex: 1,
                    backgroundColor: color.hex,
                    height: "100%",
                    }}
                    title={color.hex}
                />
            ))}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
            {colors.map((color, index) => (
                <div key={index} style={{ flex: 1, textAlign: "center", fontSize: "0.85rem", color: "#333" }}>
                    {color.hex}
                </div>
            ))}
        </div>
    </div>
    );
};

export { Color };