import React from 'react';
import styles from '../../styles/MainContent/MainContent.module.css';
import MyForm from './MyForm';
const side_tab_items = [{id: 0, active: true, value: "General Settings"}, {id: 1, active: false, value: "Plan and Billing"}];
const MainContent = () => {
    const [side_items, setSideItems] = React.useState(side_tab_items);
    return (
        <main className={styles.main_container}>
            <div className={styles.side_container}>
                <div className={styles.side_header}>
                    <h4>Account Setting</h4>
                </div>
            </div>
            <div className={styles.form_container}>
                <div className={styles.my_form}>
                    <div className={styles.form_side_bar}>
                        {
                            side_items?.map(item => <div key={item?.id} className={item?.active ? styles.active : styles.side_tab}
                                onClick={() => {
                                    const id = item?.id;
                                    const active_items = side_items?.map(item => {
                                        if (item?.id === id) {
                                            item.active = true;
                                        } else {
                                            item.active = false;
                                        }
                                        return item;
                                    });
                                    setSideItems(active_items);
                                }}
                            >
                                <p>{item?.value}</p>
                            </div>)
                        }
                    </div>
                    <div className={styles.form_fields}>
                        <MyForm/>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default MainContent;