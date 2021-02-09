import express from 'express';
import cors from 'cors';
import router from './routes/router';
import { errorHandlerApi } from './middlewares/error-handler-api';

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
app.use(errorHandlerApi)

const port = 3333 || process.env.PORT;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));