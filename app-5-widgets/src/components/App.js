import React, { useState } from "react";
import Accordion from "./Accordion";
import Search from "./Search";
import Dropdown from "./Dropdown";
import Translate from "./Translate";
import Route from "./Route";
import Header from "./Header";

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
    const [selected, setSelected] = useState(options[0]);
    return (
        <div>
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown
                    label="Select a color"
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    );
};

export default App;
