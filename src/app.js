import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import routes from './routes/index.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// API Routes
app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('Backend running 🚀');
});

export default app;
