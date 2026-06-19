const express = require('express');
const router = express.Router();
// เปลี่ยนมาใช้แบบระบุพิกัดตรงๆ จากโฟลเดอร์หลัก (พิมพ์ตามนี้เลย)
const todoController = require('../controllers/todoController');

// จับคู่เส้นทาง (URL) กับสมอง (Controller)
router.get('/', todoController.getTodos);     // ถ้าเรียก GET มาที่ /api/todos ให้ไปดึงข้อมูล
router.post('/', todoController.createTodo);   // ถ้าเรียก POST มาที่ /api/todos ให้ไปสร้างข้อมูล

module.exports = router;