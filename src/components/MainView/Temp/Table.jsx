// import React, { useState } from 'react';
// import { DataGrid } from '@material-ui/data-grid';

// const columns = [
//     // { field: 'id', headerName: 'ID', width: 70 },
//     { field: 'name', headerName: 'Menu', width: 200 },
// ];

// export default function DataTable(props) {
//     const {onSelectMenu, item} = props
//     let v = 1;
    
//     const rows = props.data.map((item) => {
//         return { id: v++, name: item };
//     });

//     const onSelection = (e) => {
//         if (e.isSelected) {
//             console.log(e.isSelected)
//             onSelectMenu([...item, e.data.name])
//         } else {
//             const list = item.filter((dat) => {
//                 if (dat == e.data.name) {
//                     return false
//                 }
//                 return true;
//             })
//             onSelectMenu(list)
//         }
//     }
//     return (

//         <div style={{ height: 250, width: '100%' }}>
//             <DataGrid
//                 onColumnHeaderClick={(e) => {
//                     if (e.field === '__check__'){
//                         if (item.length >=1 ){
//                             onSelectMenu([])
//                         } else {
//                             const list = rows.map((obj) => {
//                                 return obj.name
//                             });
//                             onSelectMenu(list)
//                         }
//                     }
//                 }}
//                 rows={rows}
//                 columns={columns}
//                 checkboxSelection
//                 onRowSelected={onSelection}
//             />
//         </div>
//     );
// }

import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
    // { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Menu', width: 200 },
    { field: 'price', headerName: 'Price', width: 200 },
];

export default function DataTable(props) {
    // console.log('-------------------------------', props.data[0].price)
    const {onSelectMenu, item} = props
    // props.data is list of object of class Item.
    // props.item is lisst of objects  (selected items)

    const rows = props.data.map((item) => {
        return { id: item.id, name: item.name, price: item.price };
    });

    const onSelection = (e) => {
        if (e.isSelected) {
            console.log(e.isSelected)
            onSelectMenu([...item, {name: e.data.name, price: e.data.price, id: e.data.id}])
            // console.log(e.data)
        } else {
            const list = item.filter((dat) => {
                if (dat.name == e.data.name) {
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
                                return {name: obj.name, price: obj.price, id: obj.id}
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

