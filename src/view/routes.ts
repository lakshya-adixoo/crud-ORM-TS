import express from 'express'
import { getuser  ,adduser} from '../controller/userController';

const router = express.Router();


router.get('/user' , getuser);
router.post('/add' , adduser);

export default router;