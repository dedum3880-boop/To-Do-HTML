// 1. Import ตัวจัดการเว็บหลังบ้าน (Express Framework)
const express = require('express');

// 2. โหลดคำสั่งพิเศษให้ระบบสามารถอ่านไฟล์ .env (ที่เก็บความลับ) ได้
require('dotenv').config();

// 3. สร้าง Instance ของแอปพลิเคชันขึ้นมา
const app = express();

// 4. Middleware (ด่านตรวจ): บอกให้หลังบ้านอ่านข้อมูลที่เป็น JSON ได้
app.use(express.json());

// ====================================================
// 5. [เพิ่มเข้ามาใหม่] เชื่อมต่อระบบจัดเส้นทาง (Router)
// คอนเซปต์: บอก Server ว่าถ้ามีคนเรียก URL ที่ขึ้นต้นด้วย '/api/todos' 
// ให้โยนงานไปให้ไฟล์ todoRoutes จัดการต่อทันที!
const todoRoutes = require('./routes/todoRoutes');
app.use('/api/todos', todoRoutes); 
// ====================================================

// 6. API เส้นทางหลัก (หน้าแรกสุด) เอาไว้เช็คว่าระบบยังไม่ตาย
app.get('/', (req, res) => {
    res.json({ message: "ระบบหลักทำงานปกติ! และเชื่อมต่อระบบ Router เรียบร้อยแล้วครับ! 🚀" });
});

// 7. กำหนด Port (ช่องทางเข้าออกของข้อมูล)
const PORT = process.env.PORT || 5000;

// 8. สั่งให้ Server เริ่มต้นทำงานอย่างเป็นทางการ (Listening)
app.listen(PORT, () => {
    console.log(`🚀 นายอาร์มรายงานตัว! Server ตัวจริงวิ่งอยู่ที่ Port: ${PORT}`);
});