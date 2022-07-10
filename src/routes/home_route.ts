import express from 'express';
import controller from '../controllers/HomeController';

const route = express.Router();

route.get("/", controller.getIndex);
route.post("/test", controller.createIndex);

export default route;
