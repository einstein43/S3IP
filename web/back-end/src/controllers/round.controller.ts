import express, { Request, Response } from "express";
import { container, inject, injectable } from "tsyringe";
// import { IRoundController } from "../interfaces/round.interface";
import { Golfer } from "../models/golfer.model";
import { Round } from "../models/round.model";
import { GolferService } from "../services/golfer.service";
import { RoundService } from "../services/round.service";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.options("*", cors());
app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your frontend domain
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify the allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Specify the allowed request headers
  })
);
 
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
    const round = req.body.id;
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
}
