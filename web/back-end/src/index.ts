import "reflect-metadata"
import express, { Request, Response } from "express";
import { container } from "tsyringe";
import { GolferController } from "./controllers/golfer.controller";

const app = express();

const golferController = container.resolve(GolferController)


  
app.get("/golfer/all", (req: Request, res: Response ) => {
  golferController.getAllGolfers();
});

app.get("/golfer/new", (req: Request, res: Response) => {
  golferController.createGolfer(req, res);
});

app.get("/golfer/one", (req: Request, res: Response) => {
  golferController.getGolferById(req, res);
});

app.get("/golfer/update", (req: Request, res: Response) => {
  golferController.updateGolferById(req, res);
});





app.listen(3001, () => console.log("app listening on port 3001"));

