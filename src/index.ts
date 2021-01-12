import express from 'express';
import cors from 'cors';
import router from './routes/router';

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

const port = 3333 || process.env.PORT;
app.listen(port, () => console.log('Started!'));