import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
// import { FormatLineSpacingTwoTone } from '@material-ui/icons';

const columns = [
    // { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Menu', width: 200 },
];

export default function DataTable(props) {
    const {onSelectMenu, item} = props
    let v = 1;
    // console.log("table ===. ", props.data);

    const rows = props.data.map((item) => {
        // console.log('aaaaa', item)
        return { id: v++, name: item };
    });

    const onSelection = (e) => {
        // console.log('event', e)
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
        // console.log(23232323, item)
    }
    return (

        <div style={{ height: 250, width: '100%' }}>
            {/* {console.log('aaaaaaaaaaaaaaa', item)} */}
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
                // onCellClick={(e) => {console.log('bbbbbbbbbbbbbbbbb',e)}}
                rows={rows}
                columns={columns}
                checkboxSelection
                onRowSelected={onSelection}
            />
        </div>
    );
}
