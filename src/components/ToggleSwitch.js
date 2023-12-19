// import React, { useState } from 'react';

// const ToggleSwitch = ({children}) => {
//     const [isToggled, setIsToggled] = useState(false);

//     const toggleSwitch = () => {
//         setIsToggled(!isToggled);
//     };

//     return (
//         <>
//             <label className="toggle-switch">
//                 <input type="checkbox" checked={isToggled} onChange={toggleSwitch} />
//                 <span className="slider round"></span>
//             </label>

//             {isToggled && <div className="content">{children}</div>}
//         </>
//     );
// };

// export default ToggleSwitch;

import React, { useState } from 'react';

const ToggleSwitch = ({label, children}) => {
    const [isToggled, setIsToggled] = useState(false);

    const toggleSwitch = () => {
        setIsToggled(!isToggled);
    };

    return (
        <div className="toggle-switch-container">
            <div className="toggle-switch-and-text">
                <span className="toggle-switch--info-text">{label}</span>
                <label className="toggle-switch">
                    <input type="checkbox" checked={isToggled} onChange={toggleSwitch} />
                    <span className="slider round"></span>
                </label>
            </div>

            {isToggled && <div className="content">{children}</div>}
        </div>
    );
};

export default ToggleSwitch;