import {Router} from 'express';

import auth from '../../../shared/middlewares/ensureAuthenticated';
import ClientController from '../controllers/ClientController';

const routes = Router();

routes.get('/', ClientController.index);

routes.use(auth);
routes.post('/', ClientController.create);
routes.put('/:clientId', ClientController.update);
routes.delete('/:clientId', ClientController.delete);

export default routes;
