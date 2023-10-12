import { AccessService } from './access.service';
export declare class AccessController {
    private readonly accessService;
    constructor(accessService: AccessService);
    getHello(): string;
    getHelloById(): string;
    postSomething(): string;
    updateProduct(prodId: string, prodTitle: string, prodDesc: string, prodPrice: number): any;
    delSomething(): string;
}
