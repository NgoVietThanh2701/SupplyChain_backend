import express from 'express';
import * as categoryController from '../controllers/categoryController';
import isThirdParty from '../authentication/isThirdParty';

const router = express.Router();
router.post('/create', isThirdParty, categoryController.createCategory);
router.get('/get', isThirdParty, categoryController.getCategories);
router.patch('/update/:code', isThirdParty, categoryController.updateCategory);
router.delete('/delete/:code', isThirdParty, categoryController.deleteCategory);

export default router;