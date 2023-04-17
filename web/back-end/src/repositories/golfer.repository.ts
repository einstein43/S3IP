import { IGolferRepository } from "../interfaces/golfer.interface";
import { Golfer } from "../models/golfer.model";

export default class GolferRepository implements IGolferRepository {
  constructor() {}

  public async getAllGolfers(): Promise<Golfer[]> {
    const golfer1: Golfer = {
        id: 1,
        fName: "Loes",
        lName: "Smeets",
        handicap: 15
       }
    const golfer2: Golfer = {
        id: 2,
        fName: "Zino",
        lName: "van Heteren",
        handicap: 1
       }

    const golfer3: Golfer = {
      id: 3,
      fName: "Zino2",
      lName: "van Heteren",
      handicap: 4
    }


    
       const golfers: Golfer[] = [golfer1, golfer2, golfer3]
       return golfers;
  }

  public async createGolfer(golfer: Golfer): Promise<void> {
      
  }

  public async getGolferById(id: number): Promise<Golfer> {
       const golfer: Golfer = {
        id: 1,
        fName: "Alexander",
        lName: "van Heteren",
        handicap: 15
       }

       return golfer;
       
  }

  public async updateGolferById(id: number, golfer: Golfer): Promise<void> {
      
  }

  public async deleteGolferById(id: number): Promise<void> {
      
  }

  


}
