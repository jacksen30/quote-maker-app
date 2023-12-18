import React, { useState } from 'react';

const ToggleSwitch = ({children}) => {
    const [isToggled, setIsToggled] = useState(false);

    const toggleSwitch = () => {
        setIsToggled(!isToggled);
    };

    return (
        <>
            <label className="toggle-switch">
                <input type="checkbox" checked={isToggled} onChange={toggleSwitch} />
                <span className="slider round"></span>
            </label>

            {isToggled && <div className="content">{children}</div>}
        </>
    );
};

export default ToggleSwitch;


