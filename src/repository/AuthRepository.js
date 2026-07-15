import User from "../model/AuthUser.js";




class AuthRepository{
    async createUser(obj){
        const user = await User.create(obj);
        return user

    }

    async login(){
        const user = await User.findOne(user);
        return user
    }
    async findUser(user){
        const userExist = await User.findOne(user);
        return userExist
    }
}


const authRepo = new AuthRepository();
export default authRepo