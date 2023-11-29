import express, { Router } from 'express';
import * as authController from '../controllers/authController';
import { body } from 'express-validator';

const router: Router = express.Router();

// const storage = multer.diskStorage({
//    destination: function (req, file, cb) {
//       // Xác định nơi lưu trữ tệp tin tải lên
//       cb(null, './public/users/');
//    },
//    filename: function (req, file, cb) {
//       // Tạo tên tệp tin mới cho tệp tin tải lên
//       const ext = path.extname(file.originalname);
//       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + ext;
//       cb(null, file.fieldname + '-' + uniqueSuffix);
//    }
// });

// const upload = multer({ storage: storage });
// upload.single('image'), body('email').isEmail(), body('password').isLength({ min: 6 }),

router.post('/register', body('email').isEmail(), body('password').isLength({ min: 6 }), authController.register);
router.post('/verify-otp', authController.verifyOTP);
router.post('/login', authController.login);
router.get('/getMe', authController.getMe);

export default router;