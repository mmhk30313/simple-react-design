import React, { useEffect } from 'react';
import Switch from "react-switch";
import styles from '../../styles/MainContent/MainContent.module.css';
const MyForm = () => {
    const [checked, setChecked] = React.useState(true);
    useEffect(() => {
        setChecked(true);
    }, []);
    return (
        <React.Fragment>
            <form>
                <div className={styles.input_field_container}>
                    <label>Registered Email</label><br/>
                    <input className={styles.input_field} style={{borderLeft: '5px solid #64b9fa'}} type="text" placeholder="example@gmail.com" defaultValue={"sreekanth850@gmail.com"}/>
                </div>
                
                <div className={styles.input_field_container}>
                    <label>Account Type</label><br/>
                    <input className={styles.input_field} style={{borderLeft: '5px solid #c3ec86'}} type="text" placeholder="Account type" defaultValue={"Host Account"}/>
                    <button type='button' className={styles.btn}>Convert to Guest</button>
                </div>
                
                <div className={styles.input_field_container}>
                    <label>Address</label><br/>
                    <input className={styles.input_field} style={{borderLeft: '5px solid #ffbe74'}} type="text" placeholder="Address" defaultValue={"Address"}/>
                    <button type='button' className={styles.btn}>Edit</button>
                </div>
                
                <div className={styles.input_field_container}>
                    <label>Subscribe to updates</label><br/>
                    <input className={styles.input_field} style={{borderLeft: '5px solid #ffbe74'}} type="text" placeholder="Products update" defaultValue={"Product news and updates"}/>
                    <div className={styles.switch}>
                        <Switch 
                            onChange={() => setChecked(!checked)} 
                            checked={checked}
                            onColor="#2693e6"

                            // onHandleColor="blue"
                            handleDiameter={12}
                            uncheckedIcon={false}
                            checkedIcon={false}
                            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                            height={20}
                            width={45}
                        />
                    </div>
                </div>

                <button type='button' className={styles.delete_account}>Delete my Account</button>
            </form>

        </React.Fragment>
    );
};

export default MyForm;