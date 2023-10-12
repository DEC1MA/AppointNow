export declare class RoomService {
    getHello(): string;
    create(userId: String, name: String, businessId: String): void;
    update(userId: String, roomId: String, meta: Object): void;
    delete(userId: String, roomId: String): void;
}
