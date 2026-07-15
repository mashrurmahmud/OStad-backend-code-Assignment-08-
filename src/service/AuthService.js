
import authrepo from "../repository/AuthRepository.js"

class AuthService{
   async createUser(obj) {
        const user = await authrepo.createUser(obj);
        
        return user;
    }
    async findUserByEmail(email) {
        const user = await authrepo.findUser({email})
        return user;
    }
    async login(user) {
        const userExist = await authrepo.login(user);
        return userExist;
    }
}


const authService = new AuthService();

export default authService;