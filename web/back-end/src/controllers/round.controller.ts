import express, { Request, Response } from "express";
import { container, inject, injectable } from "tsyringe";
// import { IRoundController } from "../interfaces/round.interface";
import { Golfer } from "../models/golfer.model";
import { Round } from "../models/round.model";
import { GolferService } from "../services/golfer.service";
import { RoundService } from "../services/round.service";

 
container.register("IRoundService", {
  useClass: RoundService,
});

@injectable()
export class RoundController implements RoundController {
  constructor(@inject("IRoundService") private roundService: RoundService) {
    this.getRoundById = this.getRoundById.bind(this);
    this.postRound = this.postRound.bind(this);
    this.updateRound = this.updateRound.bind(this);
    this.deleteRound = this.deleteRound.bind(this);
    this.getAllCourses = this.getAllCourses.bind(this);
  }
  public async getRoundById(req: Request, res: Response): Promise<void> {
    const round: Round = await this.roundService.getRoundById();
    res.header("Access-Control-Allow-Origin", "*");

    res.status(200).send(round);
  }
  public async postRound(req: Request, res: Response): Promise<void> {
    const round = req.body;
    await this.roundService.postRound(round);

    res.header("Access-Control-Allow-Origin", "*");
    res.status(200).send();
  }





  public async updateRound(req: Request, res: Response): Promise<void> {
     const round:Round = req.body;
     round.id = Number(req.body.id);
    round.course_id = Number(req.body.course_id);
    round.score = Number(req.body.score);
    console.log(round); 
    await this.roundService.updateRound(round);

    res.header("Access-Control-Allow-Origin", "*");
    res.status(200).send();
  }



  public async deleteRound(req: Request, res: Response): Promise<void> {
    
    const id = Number(req.params.id);
    console.log(id);
    await this.roundService.deleteRoundById(id);

    res.header("Access-Control-Allow-Origin", "*");
    res.status(200).send();
  }

public async getAllCourses(req: Request, res: Response): Promise<void> {
    const courses = await this.roundService.getAllCourses();
    res.header("Access-Control-Allow-Origin", "*");
    res.status(200).send(courses);
  }






}
