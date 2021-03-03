import express, { Express } from 'express';
import cors from 'cors';
import { userRouter } from './controller/routes/userRouter';
import { bandRouter } from './controller/routes/bandRouter';
import { concertRouter } from './controller/routes/concertRouter';
import { ticketRouter } from './controller/routes/ticketRouter';

const app: Express = express();

app.use(express.json());
app.use(cors());

app.use('/user', userRouter);
app.use('/band', bandRouter);
app.use('/concert', concertRouter);
app.use('/ticket', ticketRouter);

app.listen(process.env.DB_PORT || 3003, () => {
    console.log("Servidor rodando na porta 3003");
})