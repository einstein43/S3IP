import "reflect-metadata"
import express, { Request, Response } from "express";
import { container } from "tsyringe";
import { GolferController } from "./controllers/golfer.controller";

const app = express();
const golferController = container.resolve(GolferController)


  
app.get("/golfer/all", async (req: Request, res: Response ) =>  {
  return await golferController.getAllGolfers(req, res);
});

app.get("/golfer/new", async  (req: Request, res: Response) => {
 return await golferController.createGolfer(req, res);
});

app.get("/golfer/one", async (req: Request, res: Response) => {
 return await golferController.getGolferById(req, res);
});

app.get("/golfer/update", async (req: Request, res: Response) => {
 return await golferController.updateGolferById(req, res);
});





app.listen(3001, () => console.log("app listening on port 3001"));

