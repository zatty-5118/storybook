import React from "react";
import { Color } from "../components/Color/Color";

const meta = {
  title: "Components/Color",
  component: Color,
  tags: ["autodocs"],
};
export default meta;

const array_colorsGray = [
    { hex: "#ffffff" },
    { hex: "#f7f7f7" },
    { hex: "#f5f5f5" },
    { hex: "#f2f2f2" },
    { hex: "#cccccc" },
    { hex: "#7f7f7f" },
    { hex: "#333333" },
];

const array_colorsPortfolio = [
    { hex: "#dde9f8" },
    { hex: "#699cc7" },
    { hex: "#3d85cc" },
];

const array_colorsBlog = [
    { hex: "#e0eae4" },
    { hex: "#c2d5cb" },
    { hex: "#8ab19e" },
];

const array_colorsSb = [
    { hex: "#eae0e0" },
    { hex: "#d5c2c2" },
    { hex: "#B18A8B" },
];

const array_colorsYellow = [
    { hex: "#ffa500" },
];

const array_colorsOverlay = [
    { hex: "#000000a1" },
];

const array_colorsShadow = [
    { hex: "#0000004d" },
];


export const Primary = () => (
    <>
        <div style={{ marginBottom: "2rem" }}>
            <p style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>BaseColor</p>
            <Color colors={array_colorsGray} />
        </div>
        <div style={{ marginBottom: "2rem" }}>
            <p style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>PortfolioColor</p>
            <Color colors={array_colorsPortfolio} />
        </div>
        <div style={{ marginBottom: "2rem" }}>
            <p style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>BlogColor</p>
            <Color colors={array_colorsBlog} />
        </div>
        <div style={{ marginBottom: "2rem" }}>
            <p style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>StorybookColor</p>
            <Color colors={array_colorsSb} />
        </div>
        <div style={{ marginBottom: "2rem" }}>
            <p style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>YellowColor</p>
            <Color colors={array_colorsYellow} />
        </div>
        <div style={{ marginBottom: "2rem" }}>
            <p style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>OverlayColor</p>
            <Color colors={array_colorsOverlay} />
        </div>
        <div style={{ marginBottom: "2rem" }}>
            <p style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>ShadowColor</p>
            <Color colors={array_colorsShadow} />
        </div>

    </>
);
