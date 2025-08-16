const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Kết nối MongoDB
// Đảm bảo rằng tên cơ sở dữ liệu không có khoảng trắng
mongoose.connect('mongodb://localhost:27017/quanlythoi_gian', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Kết nối MongoDB thành công'))
  .catch(err => {
    console.error('Kết nối MongoDB thất bại:', err);
    process.exit(1); // Kết thúc tiến trình nếu kết nối thất bại
  });

// Middleware xử lý lỗi
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Đã xảy ra lỗi, vui lòng thử lại sau.');
});

app.get('/', (req, res) => {
  res.send('API đang hoạt động');
});

app.listen(PORT, () => {
  console.log(`Máy chủ đang chạy trên cổng ${PORT}`);
});