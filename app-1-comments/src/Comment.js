import React from "react";

const Comment = ({ author, avatar, time, text }) => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img src={avatar} alt="avatar" />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {author}
                </a>
                <div className="metadata">
                    <span className="date">{time}</span>
                </div>
                <div className="text">{text}</div>
            </div>
        </div>
    );
};

export default Comment;
