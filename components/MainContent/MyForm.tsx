import React from 'react';
import Switch from "react-switch";
import styles from '../../styles/MainContent/MainContent.module.css';
const MyForm = () => {
    const [checked, setChecked] = React.useState(true);
    return (
        <div>
            <h2>Toggle Switch</h2>

            <label>
                <Switch 
                    onChange={() => setChecked(!checked)} 
                    checked={checked}
                    onColor="#2693e6"
                    // onHandleColor="blue"
                    handleDiameter={10}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                    height={20}
                    width={45}
                />
            </label>
        </div>
    );
};

export default MyForm;