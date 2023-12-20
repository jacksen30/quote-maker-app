import React, { useState } from 'react';

const ToggleSwitch = ({label, initialToggled = false, onChange, children}) => {
    const [isToggled, setIsToggled] = useState(initialToggled);

    const handleToggle = () => {
        const newToggledState = !isToggled;
        setIsToggled(newToggledState);
        if (onChange) {
            onChange(newToggledState);
        }
    };

    return (
        <div className="toggle-switch-container">
            <div className="toggle-switch-and-text">
                <span className="toggle-switch--info-text">{label}</span>
                <label className="toggle-switch">
                    <input type="checkbox" checked={isToggled} onChange={handleToggle} />
                    <span className="slider round"></span>
                </label>
            </div>

            {isToggled && <div className="content">{children}</div>}
        </div>
    );
};

export default ToggleSwitch;