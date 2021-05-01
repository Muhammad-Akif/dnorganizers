import React, { useState } from 'react'
import firebase from '../../../config/firebase'
import Table from "./Table"

export default function Formtemp(props) {
    console.log("data ==> ", props)
    const [name, setName] = useState('')
    const [theme, setTheme] = useState('')
    const [venu, setVenu] = useState('')
    const [menu,setMenu] = useState([])
    const [price, setPrice] = useState(0)
    const menuSelection = (list) => {
        setMenu(list);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const item = {
            name,
            theme,
            venu,
            price,
            menu
        }
        firebase.database().ref('/events/wedding/packages').push(item);
        console.log(menu)
        // setName('');
        // setTheme('')
        // setVenu('');
        // setPrice(0);
        // setMenu('');
    }
    return (
        <>
            <form className="row" novalidate>

                <div className="col-md-12 position-relative" style={{ padding: '10px' }}>
                    <input type="text" className="form-control" value={name} onChange={(e) => { setName(e.target.value) }} id="exampleFormControlInput1" placeholder="Enter Name" required/>
                </div>
                <div className="col-md-12 position-relative" style={{ padding: '10px' }}>
                    <input type="text" className="form-control" value={theme} onChange={(e) => { setTheme(e.target.value) }} placeholder="Add Theme" id="validationTooltip01" required />
                </div>
                <div className="col-md-12 position-relative" style={{ padding: '10px' }}>
                    <input type="text" className="form-control" value={venu} onChange={(e) => { setVenu(e.target.value) }} placeholder="Add Venu" id="validationTooltip01" required />
                </div>
                <br />

                <div className="col-md-12 position-relative" style={{ padding: '10px' }}>
                    <input type="number" className="form-control" value={price} onChange={(e) => { setPrice(e.target.value) }} placeholder="price" id="validationTooltip01" required />
                </div>
                <br />

                {/* <div className="col-md-12 position-relative" style={{ padding: '10px' }}>
                    <label for="validationTooltip04" className="form-label">State</label>
                    <select className="form-select" multiple id="validationTooltip04" required>
                        {props?.data.map((v, i) => { return (<option key={i}> {v} <input type="checkbox"/></option>) })}
                        <Table/>
                    </select>
                </div> */}
                <Table data={props.data} onSelectMenu={menuSelection}/>

                <br />
                <div className="col-12 text-right">
                    <button className="btn btn-primary" type="submit" onClick={handleSubmit}>Add</button>
                </div>
            </form>
        </>
    )
}