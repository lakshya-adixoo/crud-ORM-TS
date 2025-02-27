import { DataSource} from 'typeorm';
import { User } from '../entities/User.entity';

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
        User
       ]
})


export default dataSource; 