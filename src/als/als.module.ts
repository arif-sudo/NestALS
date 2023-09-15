import { Module } from "@nestjs/common";
import { AsyncLocalStorage } from "async_hooks";

@Module({
    imports: [],
    providers: [
        {
            provide: AsyncLocalStorage,
            useValue: new AsyncLocalStorage()
        }
    ],
    exports: [AsyncLocalStorage]
})
export class AlsModule {}