import React from "react";

import "./SeasonDisplay.css";

const seasonConfig = {
    winter: {
        text: "Sneg pada, ladno je",
        iconName: "snowflake",
    },
    spring: {
        text: "Cvatu jabuke, pevaju ptice",
        iconName: "twitter",
    },
    summer: {
        text: "Na kupanje, vrućina brate",
        iconName: "sun",
    },
    autumn: {
        text: "Lisće pada, ljigavo vreme",
        iconName: "leaf",
    },
};

const SeasonDisplay = ({ lat }) => {
    const getDay = () => {
        const now = new Date();
        const start = new Date(now.getFullYear(), 0, 0);
        const diff = now - start;
        const oneDay = 1000 * 60 * 60 * 24;
        return Math.floor(diff / oneDay);
    };

    const getSeason = (day, lat) => {
        if (day < 82) {
            return lat > 0 ? "winter" : "summer";
        } else if (day < 175) {
            return lat > 0 ? "spring" : "autumn";
        } else if (day < 268) {
            return lat > 0 ? "summer" : "winter";
        } else {
            return lat > 0 ? "autumn" : "spring";
        }
    };

    const season = getSeason(getDay(), lat);
    const { text, iconName } = seasonConfig[season];
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive icon ${iconName}`} />
            <h1>{text}</h1>
            <i className={`icon-right massive icon ${iconName}`} />
        </div>
    );
};

export default SeasonDisplay;
