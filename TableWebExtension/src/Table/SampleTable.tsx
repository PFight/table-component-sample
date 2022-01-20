import React from "react";
import { BaseControlParams, BaseControlState, BaseControl } from "@docsvision/webclient/System/BaseControl";
import { r } from "@docsvision/webclient/System/Readonly";
import { ControlImpl } from "@docsvision/webclient/System/ControlImpl";
import { Composition, ICompositionPlugins } from "@docsvision/web/core/composition";
import { TableComposition } from "@docsvision/web/components/table/main";
import { OrderingPlugins } from "./action-column/OrderingPlugins";
import { DemoCellWrapperPlugins } from "./cell-wrapper/DemoCellWrapperPlugin";
import { DemoCellContentPlugins } from "./custom-cell-content/DemoCellContentPlugin";
import { DemoRowDecoratorPlugins } from "./row-decorator/DemoRowDecoratorPlugin";
import { ITableData, ITableDataLoadRequest } from "@docsvision/web/components/table/interfaces";
import { rw } from "@docsvision/webclient/System/Readwrite";
import { getStaticData } from "./DemoStaticData";
import { createTableData } from "@docsvision/web/components/table/plugins/table-data";
import { DynamicData } from "./DemoDynamicData";
import { TableScrollContainerComponent } from "../TableScrollContainerComponent/TableScrollContainerComponent";

export class SampleTableParams extends BaseControlParams {
    @r standardCssClass?: string = "sample-table";
    @rw data: ITableData;
    @rw useOwnScroll: boolean = true;
    @rw useStaticData: boolean = true;
    @rw knownModelSize: boolean = true;
}

export interface SampleTableState extends SampleTableParams, BaseControlState {
    dynamicDataLoader: DynamicData;
}

const PAGE_SIZE = 50;

export class SampleTable extends BaseControl<SampleTableParams, SampleTableState> {
    prepare() {
        this.state.data = this.state.useStaticData ? getStaticData() : createTableData();

        this.state.dynamicDataLoader = new DynamicData(1000, this.state.knownModelSize);
    }

    protected createParams() {
        return new SampleTableParams();
    }

    protected createImpl() {
        return new ControlImpl(this.props, this.state, this.renderControl.bind(this));
    }

    onLoadData = async (data: ITableData, options: ITableDataLoadRequest) => {
        await this.state.dynamicDataLoader.getDynamicData(data, options.pageNumber, options.pageSize);
        this.setState({ data: { ...data} });
    }

    renderWithScrollContainer(children: JSX.Element) {
        if (this.state.useOwnScroll) {
            return (
                <TableScrollContainerComponent>
                    {children}
                </TableScrollContainerComponent>
            )
        } else {
            return children;
        }
    }

    private renderDynamicTable(plugins): JSX.Element {
        return (
            <TableComposition data={this.state.data} fixateOnMount={false}
                loadData={{
                    pageSize: PAGE_SIZE,
                    loadData: this.onLoadData
                }}
                plugins={plugins} />
        );
    }

    private renderStaticTable(plugins): JSX.Element {
        return (
            <TableComposition data={this.state.data} fixateOnMount={false} plugins={plugins} />
        );
    }

    renderControl() {
        const plugins= [ 
            DemoCellContentPlugins, 
            DemoRowDecoratorPlugins, 
            OrderingPlugins, 
            DemoCellWrapperPlugins
        ];
        return this.renderWithScrollContainer(
            this.state.useStaticData 
                ? this.renderStaticTable(plugins)
                : this.renderDynamicTable(plugins)
        )
    }

    
}


