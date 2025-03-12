import { Repository } from "typeorm";
import { User } from "../entities/User.entity";
import dataSource from "../datasource/dataSource";

dataSource.getRepository(User)
export class UserRepository extends Repository<User> {
    
  
async findByFullName(firstName: string, lastName: string): Promise <User | null> {
    return this.findOneBy({ firstName, lastName });
}

async activateUser(userId: number): Promise<boolean> {
    const result = await this.update(userId, { isActive: true });
    return result.affected === 1;
}

async updatePassword(userId: number, newPassword: string): Promise<boolean> {
    const result = await this.update(userId, { password: newPassword });
    return result.affected === 1;
}

}
