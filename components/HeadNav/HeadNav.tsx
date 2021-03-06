import React, { useEffect, useState } from 'react';
import styles from "../../styles/Home.module.css";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineSettings, MdOutlineNotifications } from "react-icons/md";
const HeadNav = () => {
    const [nav_items, setNav_items]: any = useState([]);
    useEffect(() => {
        setNav_items([
            {
                id: 0,
                value: <MdOutlineSettings style={{height: 25, width: 45}} />
            },
            {
                id: 1,
                value: <div style={{position: 'relative'}}>
                <span style={{position: 'absolute', backgroundColor: 'red', padding: 4, borderRadius: 50, right: 6, top: 1}}></span>
                <MdOutlineNotifications style={{height: 25, width: 45}} />
            </div>
            },
            {
                id: 2,
                value: <FaRegUserCircle style={{height: 20, width: 45}} />
            },
        ]);
    }, []);
    return (
        <React.Fragment>
            <input className={styles.workspace_input} type="text" placeholder="Workspace Name "/>
            {
                nav_items?.map((item: any) => <div key={item?.id} style={{ margin: '20px', cursor: 'pointer'}}>
                    {item?.value}
                </div>)
            }
        </React.Fragment>
    );
};

export default HeadNav;