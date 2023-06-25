import { Injectable } from "@nestjs/common";
import UserEntity from "../user.entity";

@Injectable()
class UserService{
    users: UserEntity[] = [
        {
            id: '1',
            name: "isaias",
            email: "isaias@gamil.com",
            password: "1234"
        },
        {
            id: '2',
            name: "ana",
            email: "ana@gamil.com",
            password: "1234"
        }
    ]

    async getAll(){
        return this.users;
    }

    async getOne(id: string){
        return this.users.find(user => user.id  === id);
    }
    async listUserPerEmail(email: string) {
        const possibleUser = this.users.find(user => email == user.email);
        return possibleUser !== undefined;
    }
    async create(dice: UserEntity){
        return this.users.push(dice);
    }

    
    async update(id: string, dice: Partial<UserEntity>){
        return
    }

    async delete(id: string){
        const index = this.users.findIndex(user => user.id == id);
        this.users.splice(index, 1);
        return
    }
}
export default UserService;