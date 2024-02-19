import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5005;

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 모든 도메인의 요청을 허용
app.use(
  cors({
    origin: true,
  }),
);

mongoose
  .connect(process.env.MONGO_URL as string)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.use('/api/mint', require('./controllers/mint'));
app.use('/api/login', require('./controllers/login'));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
