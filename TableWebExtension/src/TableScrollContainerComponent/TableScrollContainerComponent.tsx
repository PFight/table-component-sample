import { HtmlProps } from "@docsvision/web/core/component";
import { classIfDefined } from "@docsvision/webclient/System/CssUtils";
import React from "react";

export interface ITableScrollContainerComponentProps extends HtmlProps.div {

}

export function TableScrollContainerComponent(props: ITableScrollContainerComponentProps) {
    return (
        <div {...props} className={"table-relative-container" + classIfDefined(props.className)}>
            <div className="table-scroll-container">
                {props.children}
            </div>
        </div>
    )
}