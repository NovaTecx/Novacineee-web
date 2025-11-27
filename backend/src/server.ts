import express from 'express';
import morgan from 'morgan';    
import MovieRouter from './routes/MovieRouter';

const cors = require('cors');
const app = express();


const corsOptions = {
    origin: 'http://localhost:3001', 
    optionsSuccessStatus: 200 
};


app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.json());  

app.use('/api/movies', MovieRouter);



export default app;
