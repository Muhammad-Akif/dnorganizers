import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { FormatLineSpacingTwoTone } from '@material-ui/icons';

const columns = [
    // { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Menu', width: 400 },
];

export default function DataTable(props) {
    const {onSelectMenu} = props
    const [item, setItem] = useState([])
    let v = 1;
    console.log("table ===. ", props.data);

    const rows = props.data.map((item) => {
        console.log('aaaaa', item)
        return { id: v++, name: item };
    });

    const onSelection = (e) => {
        console.log('event', e)
        if (e.isSelected) {
            console.log(e.isSelected)
            setItem([...item, e.data.name]);
            onSelectMenu([...item, e.data.name])
        } else {
            const list = item.filter((dat) => {
                if (dat == e.data.name) {
                    return false
                }
                return true;
            })
            setItem(list);
            onSelectMenu(list)
        }
        console.log(23232323, item)
    }
    return (

        <div style={{ height: 300, width: '100%' }}>
            {console.log('aaaaaaaaaaaaaaa', item)}
            <DataGrid
                onColumnHeaderClick={(e) => {
                    if (e.field === '__check__'){
                        if (item.length >=1 ){
                            setItem([])
                            onSelectMenu([])
                        } else {
                            const list = rows.map((obj) => {
                                return obj.name
                            });
                            setItem(list);
                            onSelectMenu(list)
                        }
                    }
                }}
                rows={rows}
                columns={columns}
                checkboxSelection
                onRowSelected={onSelection}
            />
        </div>
    );
}
