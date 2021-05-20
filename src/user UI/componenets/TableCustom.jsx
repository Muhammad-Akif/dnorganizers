import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
    // { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Menu', width: 200 },
];

export default function DataTable(props) {
    const {onSelectMenu, item} = props
    let v = 1;

    const rows = props.data.map((item) => {
        return { id: v++, name: item };
    });

    const onSelection = (e) => {
        if (e.isSelected) {
            console.log(e.isSelected)
            onSelectMenu([...item, e.data.name])
        } else {
            const list = item.filter((dat) => {
                if (dat == e.data.name) {
                    return false
                }
                return true;
            })
            onSelectMenu(list)
        }
    }
    return (

        <div style={{ height: 250, width: '100%' }}>
            <DataGrid
                onColumnHeaderClick={(e) => {
                    if (e.field === '__check__'){
                        if (item.length >=1 ){
                            onSelectMenu([])
                        } else {
                            const list = rows.map((obj) => {
                                return obj.name
                            });
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
