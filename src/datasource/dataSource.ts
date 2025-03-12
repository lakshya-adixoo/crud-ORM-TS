import { DataSource, Migration} from 'typeorm';
import { User } from '../entities/User.entity';

const dataSource = new DataSource({
       type: "postgres",
       host : process.env.DB_HOST ||"localhost",
       port : Number(process.env.DB_PORT)|| 5432,
       username : process.env.DB_USER ||"postgres",
       password : process.env.DB_PASSWORD ||"root",
       database : process.env.DB_NAME || "crud-api",
       logging : true,
       entities : [User],
       migrationsTableName:"migration_table",
       migrations : ["src/migrations/*.ts"],
      
})


export default dataSource; 