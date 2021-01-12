import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

const port = 3333 || process.env.PORT;
app.listen(port, () => console.log('Started!'));