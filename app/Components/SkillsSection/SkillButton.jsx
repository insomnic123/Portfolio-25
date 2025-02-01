"use client";

import "./SkillButton.css";

const SkillButton = ({ txt, src, alt, h, w }) => {
    return (
        <div className="Parents">
            <div className="background">
                {src && <img src={src} alt={alt} className="logo"/>}
                <h1>{txt}</h1>
            </div>
        </div>
    );
};

export default SkillButton;
