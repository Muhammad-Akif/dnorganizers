import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { FormatLineSpacingTwoTone } from '@material-ui/icons';
// import { useDemoData } from "@material-ui/x-grid-data-generator";

const columns = [
    // { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Menu', width: 100 },
];
// onSelectMenu

// const rows = [
//   { id: 1, lastName: 'Snow'},
//   { id: 2, lastName: 'Lannister' },
//   { id: 3, lastName: 'Lannister' },
//   { id: 4, lastName: 'Stark' },
//   { id: 5, lastName: 'Targaryen' },
//   { id: 6, lastName: 'Melisandre' },
//   { id: 7, lastName: 'Clifford' },
//   { id: 8, lastName: 'Frances' },
//   { id: 9, lastName: 'Roxie' },
// ];

export default function DataTable(props) {
    const {onSelectMenu} = props
    const [item, setItem] = useState([])
    let v = 1;
    console.log("table ===. ", props.data);
    // const { data } = useDemoData({
    //     dataSet: "Commodity",
    //     rowLength: 10,
    //     maxColumns: 6
    //   });

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

        <div style={{ height: 400, width: '100%' }}>
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
            // onSelectionModelChange={(e) => {
            //   const selectedIDs = new Set(e.selectionModel);
            //   const selectedRowData = data.rows.filter((row) =>
            //     selectedIDs.has(row.id)
            //   );
            //   console.log("selected rowData:", selectedRowData);
            // }}
            // {...data}
            />
        </div>
    );
}
