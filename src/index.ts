import  dataSource  from "./datasource/dataSource";
import { User } from "./entities/User.entity";
import { getuser, adduser, updateuser, deleteUser} from "./controller/userController";

export { dataSource, User, getuser, adduser, updateuser, deleteUser};
