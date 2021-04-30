import React, {useState, useEffect} from 'react';
import UserNav from "./UserNav"
// import {useLocation} from 'react-router-dom';
export default function Invoices() {
    // const location = useLocation();
    const [s, sd] = useState(false);
    useEffect(() => {
        // window.scrollTo(0, 0)
        console.log(232323)
        sd(true);
    }, [])
    console.log(s);
    return (
        <UserNav>
            Pakistan Zindabad !!!
        </UserNav>
    )
}
