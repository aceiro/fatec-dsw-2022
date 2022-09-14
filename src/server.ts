import { StarwarsController } from './controllers/starwars';
import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser';
import './util/module-alias';
import { Application } from 'express';

export class SetupServer extends Server {

    constructor(private port = 3000){
        super();
    }
    
    public init(): void {
        this.setupExpress()
        this.setupController()
    }

    private setupExpress(): void {
        this.app.use(bodyParser.json())
    }

    private setupController(): void {
        const starwarsController = new StarwarsController();
        this.addControllers([starwarsController]);
    }

    public getApp(): Application{
        return this.app;
    }
}