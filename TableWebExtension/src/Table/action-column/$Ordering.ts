import { serviceName } from 'docsvision.web/core/services';
import { Store } from 'effector';


export interface IOrderingService {
    order(id: string): void;
}

export type $Ordering = { ordering: IOrderingService };
export const $Ordering = serviceName((x: $Ordering) => x.ordering);