import { ITablePlugins, TableCompositionNames, TablePlugins } from "@docsvision/web/components/table/interfaces";
import { StandardRoles, CompositionPluginOrder } from "@docsvision/web/core/composition";
import React from "react";


export const DemoCellContentPlugin: TablePlugins.Cell.Component = {
    name: "DemoCellContentPlugin",
    description: "Демонстрирует подмену содержимого ячейки",
    feature: "Demo",
    composition: TableCompositionNames.TableCell,
    role: StandardRoles.Primary,
    order: CompositionPluginOrder.Priority,
    shouldRender: (composition) => composition.data.column.id == "price",
    component: (props) => {
        return <span className="demo-cell-content__price">{props.composition.data.cell.value + "₽"}</span>;
    }
};

export const DemoCellContentPlugins: ITablePlugins = {
    cell: {
        content: [DemoCellContentPlugin]
    }
};