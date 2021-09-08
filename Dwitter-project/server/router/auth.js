import express from 'express';
import {} from 'express-async-errors';
import {body} from 'express-validator';
import * as authController from '../controller/auth.js';
import {validate} from '../middleware/validator.js';

const router = express.Router();

const validateCredential = [
  body('username').trim().notEmpty().withMessage('이름을 입력해주세요.'),
  body('password').trim().isLength({min: 5}).withMessage('비밀번호는 5글자 이상 입력해주세요.'),
  validate,
];
const validateSignup = [
  ...validateCredential,
  body('name').notEmpty().withMessage('name is missing.'),
  body('email').isEmail().normalizeEmail().withMessage('invalid email.'),
  validate,
];

router.post('/signup', validateSignup, authController.signup);
router.post('/login', validateCredential, authController.login);

export default router;
