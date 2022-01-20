import { ITablePlugins, TableCompositionNames, TablePlugins } from "@docsvision/web/components/table/interfaces";
import { decorate } from "@docsvision/web/core/composition";
import React from "react";

export const DemoRowDecoratorPlugin: TablePlugins.Row.Decorator = {
    name: "DemoRowDecoratorPlugin",
    description: "Демонстрирует подмену содержимого ячейки",
    feature: "Demo",
    composition: TableCompositionNames.TableRow,
    jsxDecorator: (node, composition) => {
        if (composition.data.row.cells.find(x => x.columnId == "price")?.value > 1000000) {
            return decorate(node, { className: "demo-row-decorator_hight-cost" });
        } else {
            return node;
        }
    }
};

export const DemoRowDecoratorPlugins: ITablePlugins = {
    row: {
        containerDecorators: [DemoRowDecoratorPlugin]
    }
};