import { IComponentPlugin, PluginPlacement, IDecoratorPlugin, decorate } from "@docsvision/web/core/composition";
import React from "react";
import { SampleIcon } from "./SampleIcon";

export type DemoComposition = "Demo";
export const DemoComposition = "Demo";

export const ContainerPlugin: IComponentPlugin<DemoComposition> = {
    name: "ContainerPlugin",
    description: "Главный тег композиции",
    feature: "Demo",
    composition: DemoComposition,
    passCompositionProp: false,
    placement: PluginPlacement.Container,
    component: (props) => {
        return <button {...props}>{props.children}</button>;
    }
};

export const ContentPlugin: IComponentPlugin<DemoComposition, string> = {
    name: "ContentPlugin",
    description: "Содержимое композиции",
    feature: "Demo",
    composition: DemoComposition,
    placement: PluginPlacement.Content,
    component: (props) => {
        return <>{props.composition.data}</>;
    }
};

export const WrapperPlugin: IComponentPlugin<DemoComposition, string> = {
    name: "WrapperPlugin",
    description: "Обертка композиции",
    feature: "Demo",
    composition: DemoComposition,
    placement: PluginPlacement.Wrapper,
    component: (props) => {
        return <div className="demo__wrapper">{props.children}</div>;
    }
};

export const ContainerDecoratorPlugin: IDecoratorPlugin<DemoComposition, string> = {
    name: "ContainerDecoratorPlugin",
    description: "Декоратор контейнера",
    feature: "Demo",
    composition: DemoComposition,
    jsxDecorator: (node, composition) => {
        return decorate(node, { className: "demo__decorator-style" });
    }
};

export const BeforeContentPlugin: IComponentPlugin<DemoComposition, string> = {
    name: "ContentPlugin",
    description: "Компонент перед содержимым",
    feature: "Demo",
    composition: DemoComposition,
    placement: PluginPlacement.BeforeContent,
    component: (props) => {
        return <SampleIcon />;
    }
};

export const ContentWrapperPlugin: IComponentPlugin<DemoComposition, string> = {
    name: "ContentWrapperPlugin",
    description: "Обертка содержимого",
    feature: "Demo",
    composition: DemoComposition,
    placement: PluginPlacement.BeforeContent,
    component: (props) => {
        return <span className="demo__content-wrapper">{props.children}</span>;
    }
};

export const ClickHandlerPlugin: IDecoratorPlugin<DemoComposition, string> = {
    name: "ClickHandlerPlugin",
    description: "Декоратор контейнера с обработкой клика.",
    feature: "Demo",
    composition: DemoComposition,
    jsxDecorator: (node, composition) => {
        return decorate(node, { onClick: () => alert('Click!') });
    }
};