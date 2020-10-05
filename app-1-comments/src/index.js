import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import Comment from "./Comment";
import ApprovalCard from "./ApprovalCard";

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <Comment
                    author="Slavko"
                    avatar={faker.image.avatar()}
                    time="Today at 4:00"
                    text="Kako kul"
                />
            </ApprovalCard>

            <ApprovalCard>
                <Comment
                    author="Marko"
                    avatar={faker.image.avatar()}
                    time="Today at 4:04"
                    text="Uopce nije kul"
                />
            </ApprovalCard>
            <ApprovalCard>
                <Comment
                    author="Žarko"
                    avatar={faker.image.avatar()}
                    time="Today at 4:33"
                    text="Je je"
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
