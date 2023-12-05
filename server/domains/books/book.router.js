// Importando el Router de Express
import { Router } from 'express';

// Importando el controlador
import userController from './book.controller';

// Creando una instancia del enrutador
const router = new Router();

// Enrutamos
// GET '/book/book
router.get('/', userController.dashboard);

// GET '/book/dashboard
router.get('/dashboard', userController.dashboard);

// GET '/project/add-form
router.get('book/addbook', userController.addform);

// GET '/project/add
router.get('/add', userController.add);

// Exporto este tramo de ruta
export default router;
