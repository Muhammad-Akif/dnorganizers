import { isObject } from '@material-ui/data-grid';
import React, { useState } from 'react'
import firebase from '../../../config/firebase'
import Table from "./Table"

export default function Formtemp(props) {
    const { name, theme, menu, venu, price, setName, setTheme, setVenu, setMenu, setPrice } = props;
    // console.log("data ==> ", props)
    
    
    const menuSelection = (list) => {
        setMenu(list);
    }
    const submitHandler = (e) => {

        e.preventDefault();

    //     const item = {
    //         name,
    //         theme,
    //         venu,
    //         price,
    //         menu
    //     }
    //     doSubmit(item);
    //     // firebase.database().ref('/events/wedding/packages').push(item);
    //     // console.log(menu)
    //     // setName('');
    //     // setTheme('')
    //     // setVenu('');
    //     // setPrice(0);
    //     // setMenu([]);
    }
    return (
        <>
            <form onSubmit={submitHandler}>
                <div className="col-md-12 col-12 col-sm-12  position-relative" style={{ margin: '5px 0px' }}>
                    <input type="text" className="form-control" value={name} onChange={(e) => { setName(e.target.value) }} id="exampleFormControlInput1" placeholder="Enter Name" required/>
                </div>
                <div className="col-md-12 col-12 col-sm-12 position-relative" style={{ margin: '5px 0px' }}>
                    <input type="text" className="form-control" value={theme} onChange={(e) => { setTheme(e.target.value) }} placeholder="Add Theme" id="validationTooltip01" required />
                </div>
                <div className="col-md-12 col-12 col-sm-12 position-relative" style={{ margin: '5px 0px' }}>
                    <input type="text" className="form-control" value={venu} onChange={(e) => { setVenu(e.target.value) }} placeholder="Add Venu" id="validationTooltip01" required />
                </div>
                <div className="col-md-12 col-12 col-sm-12 position-relative" style={{ margin: '5px 0px' }}>
                    <input type="number" className="form-control" value={price} onChange={(e) => { setPrice(e.target.value) }} placeholder="price" id="validationTooltip01" required />
                </div>
                <div className="col-md-12 col-12 col-sm-12 position-relative" style={{ margin: '5px 0px' }}>
                    <Table data={props.data} item={menu} onSelectMenu={menuSelection}/>
                </div>
            </form>
        </>
    )
}
