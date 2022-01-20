import React from "react";
import { BaseControlParams, BaseControlState, BaseControl } from "@docsvision/webclient/System/BaseControl";
import { r } from "@docsvision/webclient/System/Readonly";
import { ControlImpl } from "@docsvision/webclient/System/ControlImpl";
import { Composition, ICompositionPlugins } from "@docsvision/web/core/composition";
import { ContainerPlugin, ContainerDecoratorPlugin, ClickHandlerPlugin, BeforeContentPlugin, ContentPlugin, ContentWrapperPlugin, WrapperPlugin, DemoComposition } from "./CompositionDemoPlugins";

export class SimpleCompositionParams extends BaseControlParams {
    @r standardCssClass?: string = "simple-composition";
}

export interface SimpleCompositionState extends SimpleCompositionParams, BaseControlState {
}

export class SimpleComposition extends BaseControl<SimpleCompositionParams, SimpleCompositionState> {
    protected createParams() {
        return new SimpleCompositionParams();
    }

    protected createImpl() {
        return new ControlImpl(this.props, this.state, this.renderControl.bind(this));
    }

    renderSimpleDemoComposition() {
        /*
        let plugins: ICompositionPlugins<DemoComposition, any, any> = {
            container: [ContainerPlugin],
            containerDecorators: [ContainerDecoratorPlugin, ClickHandlerPlugin],
            beforeContent: [BeforeContentPlugin],
            content: [ContentPlugin],
            contentWrappers: [ContentWrapperPlugin],
            wrappers: [WrapperPlugin]
        };
        */
        let plugins: ICompositionPlugins<DemoComposition, any, any> = {
            container: [ContainerPlugin],
            containerDecorators: [ContainerDecoratorPlugin, ClickHandlerPlugin],
            beforeContent: [BeforeContentPlugin],
            content: [ContentPlugin],
            contentWrappers: [ContentWrapperPlugin],
            wrappers: [WrapperPlugin]
        };
        return <Composition name="Demo" data={"Composition"} plugins={plugins} />
    }

    renderControl() {
        return this.renderSimpleDemoComposition();
    }
}


