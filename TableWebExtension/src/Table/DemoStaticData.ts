import { ColumnType, ITableData } from "@docsvision/web/components/table/interfaces";
import { getRowLoaded, getTotalRowsCount } from "@docsvision/web/components/table/plugins/lazy-loading";
import { getColumnSize } from "@docsvision/web/components/table/plugins/resize-column";
import faker from "faker";


export function getStaticData(manyRows = false): ITableData {
    let data = {
        id: "test",
        columns: [
            { id: "number", name: "№", type: ColumnType.Integer },
            { id: "name", name: "Название", type: ColumnType.String },
            { id: "description", name: "Описание", type: ColumnType.String },
            { id: "count", name: "Колличество", type: ColumnType.Integer },
            { id: "price", name: "Цена", type: ColumnType.Integer }
        ],
        rows: [
            { 
                id: "1", 
                entityId: '1', 
                cells: [ 
                    { columnId: "number", value: 1 },
                    { columnId: "name", value: "Досветовой двигатель" },
                    { columnId: "description", value: "Досветовой двигатель — двигатели, позволявшие звёздным кораблям передвигаться через космическое пространство на скоростях ниже скорости света." },
                    { columnId: "count", value: 2 },
                    { columnId: "price", value: 2510000 }
                ] 
            },
            { 
                id: "2",
                entityId: '2',
                cells: [
                    { columnId: "number", value: 2 },
                    { columnId: "name", value: "Разветвитель энергии" },
                    { columnId: "description", value: "Разветвитель энергии — термин, обозначавший устройство, передающее электроэнергию от источника к объекту, использовавшему эту энергию. " },
                    { columnId: "count", value: 14 },
                    { columnId: "price", value: 102400 }
                ],  
            },
            { 
                id: "3",
                entityId: '3',
                cells: [ 
                    { columnId: "number", value: 3 },
                    { columnId: "name", value: "Притягивающий луч" },
                    { columnId: "description", value: "Притягивающий луч — устройство, создававшее энергетическое поле, позволявшее захватывать и перемещать другие транспортные средства и объекты." },
                    { columnId: "count", value: 5 },
                    { columnId: "price", value: 523600 }
                ]
            }
        ]
    };
    if (manyRows) {
        for (let i  = 4; i < 1000; i++) {
            data.rows.push({
                id: faker.datatype.uuid(),
                entityId: faker.datatype.uuid(),
                cells: [
                    { columnId: "number", value: i },
                    { columnId: "name", value: faker.lorem.sentence() },
                    { columnId: "description", value: faker.lorem.text() },
                    { columnId: "count", value: faker.datatype.number() },
                    { columnId: "price", value: faker.datatype.number() }
                ]
            });
        }
    }

    for (let row of data.rows) {
        getRowLoaded(row).loaded = true;
    }
    getColumnSize(data.columns[0]).system = 60;
    getTotalRowsCount(data).value = data.rows.length;
    return data;
}