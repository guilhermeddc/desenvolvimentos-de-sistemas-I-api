import {Router} from 'express';

import userRouter from '../../modules/User/routes/users.routes';
import sessionRoutes from '../../modules/User/routes/session.routes';
import stateRoutes from '../../modules/State/routes/state.routes';
import cityRoutes from '../../modules/City/routes/city.routes';
import activityRoutes from '../../modules/Activity/routes/activity.routes';
import clientRoutes from '../../modules/Client/routes/client.routes';

const routes = Router();

routes.use('/users', userRouter);
routes.use('/sessions', sessionRoutes);
routes.use('/states', stateRoutes);
routes.use('/cities', cityRoutes);
routes.use('/activities', activityRoutes);
routes.use('/clients', clientRoutes);

export default routes;
