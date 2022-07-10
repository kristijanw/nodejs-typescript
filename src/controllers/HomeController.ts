import { Request, Response, NextFunction } from 'express';

const getIndex = (req: Request, res: Response, next: NextFunction) => {
    return res.send('Hello');
};

const createIndex = (req: Request, res: Response, next: NextFunction) => {
    const { name, lastname } = req.body;

    const dataModel = {
        name,
        lastname
    };

    return res.send( dataModel );
};

export default { getIndex, createIndex };