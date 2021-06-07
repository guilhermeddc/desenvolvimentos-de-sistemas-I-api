import {Router} from 'express';

import auth from '../../../shared/middlewares/ensureAuthenticated';
import StateController from '../controllers/StateController';

const routes = Router();

routes.get('/', StateController.index);

routes.use(auth);
routes.post('/', StateController.create);
routes.put('/:stateId', StateController.update);
routes.delete('/:stateId', StateController.delete);

export default routes;
