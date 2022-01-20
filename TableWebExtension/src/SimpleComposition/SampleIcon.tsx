import { HtmlProps } from "@docsvision/web/core/component";
import React from "react";

export interface IGroupingIconProps extends HtmlProps.svg {
}

export const SampleIcon = (props: IGroupingIconProps) => (
    <svg width="22" height="22" viewBox="0 0 32 32" fill="none" {...props} >
        <path d="M4.563 4.567v8.4h8.522v-8.4H4.563zM4.2 3h9.246c.664 0 1.202.535 1.202 1.195v9.144c0 .659-.538 1.194-1.2 1.194H4.2c-.662 0-1.2-.534-1.2-1.194V4.195C3 3.535 3.538 3 4.2 3zm11.87 2.99H28v1.995H16.07V5.99zm.282 3.56h7.955v1.993h-7.955V9.55zm-5.148-3.275l1.17 1.148L8.319 11.4 5.415 8.555l1.17-1.149 1.733 1.698 2.886-2.83zM4.202 17.466h9.244c.664 0 1.202.536 1.202 1.196v9.143c0 .66-.538 1.195-1.2 1.195H4.2c-.662 0-1.2-.535-1.2-1.195v-9.143c0-.66.538-1.196 1.2-1.196h.002zm.36 1.567v8.4h8.523v-8.4H4.563zm11.507 1.424H28v1.993H16.07v-1.993zm.283 3.559h7.955v1.994h-7.955v-1.994zm-5.148-3.274l1.17 1.148-4.056 3.978-2.903-2.847 1.17-1.147 1.733 1.698 2.886-2.83z" fill="#000" />
    </svg>
);