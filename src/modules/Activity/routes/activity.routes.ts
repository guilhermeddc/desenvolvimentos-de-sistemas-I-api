import {Router} from 'express';

import auth from '../../../shared/middlewares/ensureAuthenticated';
import ActivityController from '../controllers/ActivityController';

const routes = Router();

routes.get('/', ActivityController.index);

routes.use(auth);
routes.post('/', ActivityController.create);
routes.put('/:activityId', ActivityController.update);
routes.delete('/:activityId', ActivityController.delete);

export default routes;
