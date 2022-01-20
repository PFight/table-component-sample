
import React from "react";
import { Composition, decorate, IComponentPlugin, ICompositionPlugins, IDecoratorPlugin, PluginPlacement } from "..";
import "./CompositionDemo.stories.css";

export interface ICompositionDemoProps {
    plugins: ICompositionPlugins<DemoComposition, any, any>;
}

export const CompositionDemo = (props: ICompositionDemoProps) => {
    
    return (
        <Composition name="Demo" data={"Composition"} plugins={props.plugins} />
    );
};