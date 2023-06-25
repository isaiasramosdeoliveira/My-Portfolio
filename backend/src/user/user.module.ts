import { Module } from "@nestjs/common";
import UserService from "./services/user.service";
import UserController from "./user.controller";
import { UniqueEmailValidator } from "./validators/UniqueEmail";

@Module({
    controllers: [UserController],
    exports: [],
    imports: [],
    providers: [UserService, UniqueEmailValidator]
})

export default class UserModule {};