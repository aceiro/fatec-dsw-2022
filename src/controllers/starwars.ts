import {Controller, Get} from '@overnightjs/core'
import { Request, Response } from 'express';

@Controller('planets')
export class StarwarsController{

    @Get('')
    public getStarwarsPlanets(_:Request, res: Response): void {
        res.send({})
    }
}