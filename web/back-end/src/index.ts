import express, { Request, Response } from "express";
import { container } from "tsyringe";
import { GolferController } from "./controllers/golfer.controller";

const app = express();

const golferController = container.resolve(GolferController)


  
app.get("/golfers", (req: Request, res: Response ) => {
  golferController.getAllGolfers();
});





app.listen(3001, () => console.log("app listening on port 3001"));

