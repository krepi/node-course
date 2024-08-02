import express from 'express';
import userRoutes from './routes/userRoutes.js';
import elementRoutes from './routes/elementRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import authRoutes from './routes/authRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import projectRoutes from './routes/projectRoutes.js'; // Import project routes

const app = express();
app.use(express.json());

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/elements', elementRoutes); // Add element routes
app.use('/api/v1/categories', categoryRoutes);
app.use('/api/v1/admin', adminRoutes); // Add admin routes
app.use('/api/v1/projects', projectRoutes); // Add project routes

app.get('/', (req, res) => {
    res.send('Hello from furnishcraft server built with Docker with postgres without frontend for now ;D');
});

export default app;
