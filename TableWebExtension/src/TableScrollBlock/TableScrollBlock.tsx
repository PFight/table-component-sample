import React from "react";
import { r } from "@docsvision/webclient/System/Readonly";
import { Block, BlockParams } from "@docsvision/webclient/Platform/Block";
import { BlockImpl, BlockState } from "@docsvision/webclient/Platform/BlockImpl";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { TableScrollContainerComponent } from "../TableScrollContainerComponent/TableScrollContainerComponent";

export class TableScrollBlockParams extends BlockParams {
    @r standardCssClass?: string = "table-scroll-block";
}

export interface TableScrollBlockState extends TableScrollBlockParams, BlockState {
}

export class TableScrollBlock extends Block {
    protected createParams() {
        return new TableScrollBlockParams();
    }

    protected createImpl() {
        return new TableScrollBlockImpl(this.props, this.state);
    }
}


class TableScrollBlockImpl extends BlockImpl {
    renderChildren(children?: GenModels.ControlModel[]) {
        return [
            <TableScrollContainerComponent>
                {super.renderChildren(children)}
            </TableScrollContainerComponent>
        ];
    }
}
