import express, { Application } from 'express';
import homeRoute from './routes/home_route';

const app: Application = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/home", homeRoute);

app.listen(4000, () => console.log('Server running'));