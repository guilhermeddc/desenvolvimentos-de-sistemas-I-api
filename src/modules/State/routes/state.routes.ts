import {Router} from 'express';

import auth from '../../../shared/middlewares/ensureAuthenticated';
import StateController from '../controllers/StateController';

const routes = Router();

routes.get('/', StateController.index);

routes.use(auth);
routes.post('/', StateController.create);
routes.put('/:state_id', StateController.update);
routes.delete('/:state_id', StateController.delete);

export default routes;
