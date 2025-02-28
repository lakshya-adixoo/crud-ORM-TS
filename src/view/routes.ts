import express from 'express'
import { getuser  ,adduser , updateuser , deleteUser ,testing} from '../controller/userController';

const router = express.Router();


router.get('/user' , getuser);
router.post('/add' , adduser);
router.put('/update/:id' , updateuser);
router.delete('/delete/:id' , deleteUser);
router.get('/testing' , testing);

export default router;