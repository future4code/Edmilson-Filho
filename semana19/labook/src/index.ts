import express from 'express'
import cors from 'cors'
import { signup, login } from './controller/userController'
import { createPost,getPostById } from './controller/postController'
import { userRouter } from './controller/routes/userRouter'
import { postRouter } from './controller/routes/postRouter'
import { friendRouter } from './controller/routes/friendRouter'
import { feedRouter } from './controller/routes/feedRouter'

const app = express()
app.use(express.json())
app.use(cors())

app.use('/user', userRouter);
app.use('/post', postRouter);
app.use('/friend', friendRouter);
app.use('/feed', feedRouter);

app.listen(3003, () => {
   console.log('Servidor rodando na porta 3003')
})