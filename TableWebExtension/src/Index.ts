import { SampleTable } from "./Table/SampleTable";
import { extensionManager } from "@docsvision/webclient/System/ExtensionManager";
import { SimpleComposition } from "./SimpleComposition/SimpleComposition";
import { TableScrollBlock } from "./TableScrollBlock/TableScrollBlock";
import { app } from "@docsvision/webclient/App";
import { $FolderPluginProvider } from "@docsvision/webclient/Platform/$FolderPluginProvider";
import { SampleGridPluginFactory } from "./GridExtension/SampleGridPluginFactory";


// Главная входная точка всего расширения
// Данный файл должен импортировать прямо или косвенно все остальные файлы, 
// чтобы rollup смог собрать их все в один бандл.

// Регистрация расширения позволяет корректно установить все
// обработчики событий, сервисы и прочие сущности web-приложения.
extensionManager.registerExtension({
    name: "SampleTable web extension",
    version: "5.5.16",
    initialize() {
        app.with<$FolderPluginProvider>().folderPluginProvider.addFactory(new SampleGridPluginFactory(app));
    },
    controls: [ 
        { controlTypeName: "SimpleComposition", constructor: SimpleComposition },
        { controlTypeName: "SampleTable", constructor: SampleTable },
        { controlTypeName: "TableScrollContainer", constructor: TableScrollBlock }
    ]
})