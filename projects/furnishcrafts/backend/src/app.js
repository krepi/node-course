import express from 'express';
import userRoutes from './routes/userRoutes.js';
import elementRoutes from './routes/elementRoutes.js';

const app = express()
app.use(express.json());

app.use('/api/v1/auth', userRoutes);
app.use('/api/v1/elements', elementRoutes);

app.get('/', (req, res) => {
    res.send('Hello from furnishcraft server')
})

export default app;