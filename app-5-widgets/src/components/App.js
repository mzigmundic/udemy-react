import React, { useState } from "react";
import Accordion from "./Accordion";
import Search from "./Search";
import Dropdown from "./Dropdown";
import Translate from "./Translate";

const items = [
    {
        title: "Title One",
        content:
            "Lorem 1 ipsum dolor sit amet consectetur adipisicing elit. Nam porro cumque repellat autem officiis soluta reiciendis eum ipsam debitis blanditiis!",
    },
    {
        title: "Title Two",
        content:
            "Lorem 2 ipsum dolor sit amet consectetur adipisicing elit. Nam porro cumque repellat autem officiis soluta reiciendis eum ipsam debitis blanditiis!",
    },
    {
        title: "Title Three",
        content:
            "Lorem 3 ipsum dolor sit amet consectetur adipisicing elit. Nam porro cumque repellat autem officiis soluta reiciendis eum ipsam debitis blanditiis!",
    },
];

const options = [
    {
        label: "Red Color",
        value: "red",
    },
    {
        label: "Green Color",
        value: "green",
    },
    {
        label: "Blue Color",
        value: "blue",
    },
];

const App = () => {
    return (
        <div>
            {/*<Accordion items={items} />*/}
            {/*<Search />*/}
            {/*<Dropdown
                    selected={selected}
                    onSelectedChange={setSelected}
                    options={options}
                />
            */}
            <Translate />
        </div>
    );
};

export default App;
