import { $Ordering } from "./$Ordering";
import { OrderingService } from "./OrderingService";
import { Button } from "@docsvision/web/components/form/button";
import React from "react";
import { TablePlugins, TableCompositionNames, ITablePlugins } from "@docsvision/web/components/table/interfaces";
import { getRowLoaded } from "@docsvision/web/components/table/plugins/lazy-loading";

export const OrderingServiceProvider: TablePlugins.ServiceProvider<$Ordering> = {
    name: "OrderingServiceProvider",
    description: "Добавляет сервис $Ordering",
    feature: "Demo",
    composition: TableCompositionNames.Root,
    addServices: (composition) => {
        if (!composition.services.ordering) {
            composition.services.ordering = new OrderingService();
        }
    }
};

const OrderColumnId = "order";

export const OrderingColumnProvider: TablePlugins.ServiceProvider<$Ordering> = {
    name: "OrderingColumnProvider",
    description: "Добавляет столбец с кнопкой заказа.",
    feature: "Demo",
    composition: TableCompositionNames.Root,
    addServices: (composition) => {
        if (composition.data.columns.length > 0 && !composition.data.columns.find(x => x.id == OrderColumnId)) {
            composition.data.columns.push({
                id: OrderColumnId,
                name: "Заказ"
            });
        }
    }
};

export const OrderingCellButtonPlugin: TablePlugins.Cell.Component<$Ordering> = {
    name: "OrderingCellButtonPlugin",
    description: "Отображает кнопку заказа.",
    feature: "Demo",
    composition: TableCompositionNames.TableCell,
    shouldRender: (composition) => composition.data.column.id == OrderColumnId,
    component: (props) => {        
        return getRowLoaded(props.composition.data.row).loaded && (
            <Button className="padding-5" 
                onClick={() => props.composition.services.ordering.order(props.composition.data.row.entityId)}>
                Заказать
            </Button>
        );
    }
};


export const OrderingPlugins: ITablePlugins = {
    serviceProviders: [ OrderingServiceProvider, OrderingColumnProvider ],
    cell: {
        content: [ OrderingCellButtonPlugin ]
    }
};