import express from 'express';
import userRoutes from './routes/userRoutes.js';
import elementRoutes from './routes/elementRoutes.js';
// import dotenv from 'dotenv';

// dotenv.config();

const app = express()
app.use(express.json());
const port = 3000

app.use('/api/v1/auth', userRoutes);
app.use('/api/v1/elements', elementRoutes);


app.get('/', (req, res) => {
    res.send('Hello from furnishcraft server')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})