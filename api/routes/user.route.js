import express from 'express';
import {
  test,
  updateUser,
  deleteUser,
  getAllUser,
  getRecentBirthdays,
} from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';
import { chatroom } from '../controllers/chat.controllers.js';
import { sadhanafill } from '../controllers/sadhana.controllers.js';
const router = express.Router();

router.get('/', test);
router.post('/update/:id', verifyToken, updateUser);
router.delete('/delete/:id', verifyToken, deleteUser);
router.post('/api/chatroom/:id',verifyToken,chatroom);
router.post('/api/sadhana/:id',verifyToken,sadhanafill);
router.get("/api/getuser", verifyToken, getAllUser);
router.get("/api/getbirthday", getRecentBirthdays);

export default router;
