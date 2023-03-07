import { IGolferRepository } from "../interfaces/golfer.interface";
import { Golfer } from "../models/golfer.model";

export default class GolferRepository implements IGolferRepository {
  constructor() {}

  public async getAllGolfers(): Promise<void> {
    
  }
}
