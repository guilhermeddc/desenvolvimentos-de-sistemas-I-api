import {Router} from 'express';

import userRouter from '../../modules/User/routes/users.routes';
import sessionRoutes from '../../modules/User/routes/session.routes';
import stateRoutes from '../../modules/State/routes/state.routes';

const routes = Router();

routes.use('/users', userRouter);
routes.use('/sessions', sessionRoutes);
routes.use('/states', stateRoutes);

export default routes;
