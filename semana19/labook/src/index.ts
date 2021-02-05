import express from 'express'
import cors from 'cors'
import { signup, login } from './controller/userController'
import { createPost,getPostById } from './controller/postController'
import { userRouter } from './controller/routes/userRouter'
import { postRouter } from './controller/routes/postRouter'

const app = express()
app.use(express.json())
app.use(cors())

app.use('/user', userRouter);
app.use('/post', postRouter);

app.put('/post', createPost)
app.get('/post/:id', getPostById)

app.listen(3003, () => {
   console.log('Servidor rodando na porta 3003')
})