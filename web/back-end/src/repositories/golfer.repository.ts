import { IGolferRepository } from "../interfaces/golfer.interface";
import { Golfer } from "../models/golfer.model";

export default class GolferRepository implements IGolferRepository {
  constructor() {}

  public async getAllGolfers(): Promise<void> {
    
  }

  public async createGolfer(golfer: Golfer): Promise<void> {
      
  }

  public async getGolferById(id: number): Promise<void> {
       
       
  }

  public async updateGolferById(id: number, golfer: Golfer): Promise<void> {
      
  }

  public async deleteGolferById(id: number): Promise<void> {
      
  }

  


}
