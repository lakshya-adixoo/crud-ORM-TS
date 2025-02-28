import { DataSource} from 'typeorm';
import { User } from '../entities/User.entity';
import { Profile } from '../entities/profile.entity';
import { Todo } from '../entities/Todo.entity';

const dataSource = new DataSource({
       type: "postgres",
       host : "localhost",
       port : 5432,
       username : "postgres",
       password : "root",
       database : "crud-api",
       logging : true,
       synchronize : true,
       entities : [
        User,
        Profile,
        Todo
       ]
})


export default dataSource; 