import { Router } from 'express';

import { makeUserController, makeAuthController } from '@/main/factories/controllers';
import { authMiddleware } from '../middlewares';

const router = Router();

const userController = makeUserController();

router.post('/users', (req, res) => userController.create(req, res));
router.get('/users', authMiddleware, (req, res) => userController.list(req, res));
router.patch('/users/:id', authMiddleware, (req, res) => userController.update(req, res));
router.delete('/users/:id', authMiddleware, (req, res) => userController.delete(req, res));

const authController = makeAuthController();

router.post('/login', (req, res) => authController.login(req, res))

export { router };
