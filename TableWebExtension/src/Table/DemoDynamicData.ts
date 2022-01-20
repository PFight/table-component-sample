import { ColumnType, ITableData } from "@docsvision/web/components/table/interfaces";
import { getRowLoaded, getTotalRowsCount } from "@docsvision/web/components/table/plugins/lazy-loading";
import { getColumnSize } from "@docsvision/web/components/table/plugins/resize-column";
import { waitTimeout } from "@docsvision/web/utils/common";
import { RowSelectionPlugins } from "@docsvision/webclient/BackOffice/DirectoryRowSelection";
import faker from "faker";

export class DynamicData {
    totalRows: number;
    knownModelSize: boolean;

    constructor(totalRows: number, knownModelSize: boolean) {
        this.totalRows = totalRows;
        this.knownModelSize = knownModelSize;
    }

    async getDynamicData(data: ITableData, pageNumber: number, pageSize: number): Promise<ITableData> {
        await waitTimeout(2000);
    
        if (data.columns.length == 0) {
            data.columns = [
                { id: "number", name: "№", type: ColumnType.Integer },
                { id: "name", name: "Название", type: ColumnType.String },
                { id: "description", name: "Описание", type: ColumnType.String },
                { id: "count", name: "Колличество", type: ColumnType.Integer },
                { id: "price", name: "Цена", type: ColumnType.Integer }
            ];
            getColumnSize(data.columns[0]).system = 60;
        }
     
        for (let i  = 0; i < pageSize; i++) {
            let rowIndex = (pageNumber - 1) * pageSize + i;
            const row = {
                id: rowIndex.toString(),
                entityId: faker.datatype.uuid(),
                cells: [
                    { columnId: "number", value: rowIndex },
                    { columnId: "name", value: faker.lorem.sentence() },
                    { columnId: "description", value: faker.lorem.text() },
                    { columnId: "count", value: faker.datatype.number() },
                    { columnId: "price", value: faker.datatype.number() }
                ]
            };
            getRowLoaded(row).loaded = true;
            data.rows[rowIndex] = row;
        }
        
        // Известно ли сколько всего записей на сервере
        if (this.knownModelSize) {
            if (data.rows.length < this.totalRows) {
                for (let i = 0; i < this.totalRows; i++) {
                    if (!data.rows[i]) {
                        const rowStub = {
                            id: i.toString(),
                            entityId: null,
                            cells: data.columns.map(x => ({
                                columnId: x.id,
                                value: undefined
                            }))
                        };
                        getRowLoaded(rowStub).loaded = false;
                        data.rows[i] = rowStub;
                    }
                }
            }        
            getTotalRowsCount(data).value = this.totalRows;
        } else {
            if (data.rows.length == this.totalRows) {
                getTotalRowsCount(data).value = this.totalRows;
            }
        }
        return data;
    }
}

