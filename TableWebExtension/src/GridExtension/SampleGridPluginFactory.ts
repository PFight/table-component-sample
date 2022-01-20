import { ITablePlugins } from "@docsvision/web/components/table/interfaces";
import { $Domain } from "@docsvision/web/core/state-management";
import { $FolderDataLoading } from "@docsvision/webclient/Platform/$FolderDataLoading";
import { $FolderGrid } from "@docsvision/webclient/Platform/$FolderGrid";
import { ICommonFolderInfo } from "@docsvision/webclient/Platform/ICommonFolderInfo";
import { IFolderPluginFactory } from "@docsvision/webclient/Platform/IFolderPluginFactory";
import { $ApplicationSettings, $DeviceType } from "@docsvision/webclient/StandardServices";
import { $CurrentLocation } from "@docsvision/webclient/System/LayoutServices";
import { OrderingPlugins } from "../Table/action-column/OrderingPlugins";

export class SampleGridPluginFactory implements IFolderPluginFactory {
    id: string = "SampleGridPluginFactory";
    folders = [ "5bf0fb94-23fa-4212-80c3-c598e9859901" ];
        
    constructor(private services: $ApplicationSettings & $Domain) {
    }

    getTablePlugins(
        folderInfo: ICommonFolderInfo, 
        services: $CurrentLocation & $DeviceType & $ApplicationSettings & $FolderDataLoading & $FolderGrid & $Domain): ITablePlugins[] {
        if (this.folders.includes(folderInfo.folderId)) {
            return [
                OrderingPlugins
            ];
        } else {
            return [];
        }
    }
}