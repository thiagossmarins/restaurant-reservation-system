import { Router } from 'express';
import { getUsers, postUser, getUser } from '../controllers/user.controllers';
import { userValidationSchema } from '../validations/user.validation';
import { validateRequest } from '../middlewares/validateRequest';

const router = Router();

router.get('/', getUsers);
router.post('/users', validateRequest(userValidationSchema), postUser);
router.get('/users/:id', getUser);

export default router;