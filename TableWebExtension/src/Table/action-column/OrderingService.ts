import { IOrderingService } from "./$Ordering";

export class OrderingService implements IOrderingService {
    order(id: string) {
        alert("Ordering " + id);
    }
}