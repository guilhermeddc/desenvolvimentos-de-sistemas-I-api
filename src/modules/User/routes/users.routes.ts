import {Router} from 'express';

import UserController from '../controllers/UserController';
import auth from '../../../shared/middlewares/ensureAuthenticated';

const userRouter = Router();

userRouter.get('/:user_type', UserController.indexOfRole);
userRouter.post('/', UserController.create);

userRouter.use(auth);

export default userRouter;
