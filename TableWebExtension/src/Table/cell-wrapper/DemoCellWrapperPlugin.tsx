import { ITablePlugins, TableCompositionNames, TablePlugins } from "@docsvision/web/components/table/interfaces";
import React from "react";

export const DemoCellWrapperPlugin: TablePlugins.Cell.Component = {
    name: "DemoCellWrapperPlugin",
    description: "Демонстрирует добавление обертки",
    feature: "Demo",
    composition: TableCompositionNames.TableCell,
    shouldRender: (composition) => composition.data.column.id == "count",
    component: (props) => {
        return <div className="demo-cell-wrapper__price-wrapper">{props.children}</div>;
    }
};

export const DemoCellWrapperPlugins: ITablePlugins = {
    cell: {
        contentWrappers: [DemoCellWrapperPlugin]
    }
};