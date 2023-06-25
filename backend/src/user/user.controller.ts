import { Body, Controller, Get, Param, Post, Put, Delete } from "@nestjs/common"
import UserServices from "./services/user.service"
import CreateUserDTO from "./dto/CreateUser.dto";
import UserEntity from "./user.entity";
import { v4 as uuid } from 'uuid'

@Controller('/users')
class UserController {
    constructor(
        private userServices: UserServices
    ){}
    @Get()
    async getUsers() {
        const response = await this.userServices.getAll();
        return {
            message: "Usuários encontrados",
            response
        }
    }

    @Get(":id")
    async getUser(@Param('id') id: string) {
        const response = await this.userServices.getOne(id);
        return {
            message: "Usuário encontrado.",
            response
        }
    }

    @Post()
    async createUser(@Body() user: CreateUserDTO) {
        const userEntity = new UserEntity();
        userEntity.id = uuid();
        userEntity.name = user.name
        userEntity.email = user.email
        userEntity.password = user.password
        this.userServices.create(userEntity);
        return { message: "Usuário criado!", response: user }
    }

    @Put(":id")
    async updateUser(@Param('id') id: string, @Body() newUser) {
        await this.userServices.update(id, newUser);
        return {
            message: "Usuário atualizado.",
            response: newUser
        }
    }

    @Delete(":id")
    async deleteUser(@Param('id') id:string) {
        await this.userServices.delete(id);
        return {
            message: `Usuário do id ${id} deletado com sucesso.`
        }
    }
}
export default UserController;