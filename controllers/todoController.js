// บันทึกความจำชั่วคราว (เดี๋ยวบทเรียนหน้าเราจะเปลี่ยนไปใช้ Database จริงกัน)
let todoListMock = [
    { id: 1, task: "ซื้อกาแฟมาดิฟตอนเช้า", completed: false },
    { id: 2, task: "อัดคลิปบ่นเรื่องเทคโนโลยีลงช่อง 9arm", completed: true }
];

// 1. ฟังก์ชันสำหรับ ดึงข้อมูล To-Do ทั้งหมด (GET)
exports.getTodos = (req, res) => {
    res.json(todoListMock);
};

// 2. ฟังก์ชันสำหรับ เพิ่ม To-Do ใหม่ (POST)
exports.createTodo = (req, res) => {
    // ดึงข้อมูลที่หน้าบ้านส่งมา (ถ้าลืมใส่บรรทัด express.json() ตรงนี้จะเป็น undefined ทันที!)
    const { task } = req.body; 
    
    if (!task) {
        return res.status(400).json({ error: "เฮ้ยวัยรุ่น! ส่งข้อความงานมาด้วยดิ มันว่างเปล่านะ!" });
    }

    const newTodo = {
        id: todoListMock.length + 1,
        task: task,
        completed: false
    };

    todoListMock.push(newTodo);
    res.status(201).json({ message: "เพิ่มงานสำเร็จแล้วครับ!", data: newTodo });
};