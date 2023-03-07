import express, { Request, Response } from "express";
import { container, inject, injectable } from "tsyringe";
import { IGolferController } from "../interfaces/golfer.interface";
import { Golfer } from "../models/golfer.model";
import { GolferService } from "../services/golfer.service";

container.register("IGolferService", {
    useClass: GolferService,
});

@injectable()
export class GolferController implements IGolferController {
    constructor(@inject("IGolferService") private golferService: GolferService) {
        //this.getAllGolfers = this.getAllGolfers.bind(this)
    }

    public async getAllGolfers(): Promise<void> {
        return await this.golferService.getAllGolfers();
    }

    public async createGolfer(req: Request, res: Response): Promise<void> {
        
    }

    public async getGolferById(req: Request, res: Response): Promise<Golfer> {
        const id = req.body.id;

        return await this.golferService.getGolferById(id);
    }







}