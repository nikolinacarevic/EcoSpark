import express from 'express'
import mongoose from 'mongoose';
const app = express();
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/EcoSpark", {
    family: 4
});

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});