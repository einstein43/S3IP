import { IGolferService } from "../interfaces/golfer.interface";
import { IGolferRepository } from "../interfaces/golfer.interface";
import { container, inject, injectable } from "tsyringe";
import { Golfer } from "../models/golfer.model";
import GolferRepository from "../repositories/golfer.repository";

container.register("IGolferRepository", {
  useClass: GolferRepository,
});

@injectable()
export class GolferService implements IGolferService {
  constructor(
    @inject("IGolferRepository") private golferRepository: IGolferRepository
  ) {
    this.getAllGolfers = this.getAllGolfers.bind(this);
    this.createGolfer = this.createGolfer.bind(this);
    this.getGolferById = this.getGolferById.bind(this);
    this.deleteGolferById = this.deleteGolferById.bind(this);
    this.updateGolferById = this.updateGolferById.bind(this);
  }

    public async getAllGolfers(): Promise<void> {
        const golfers = this.golferRepository.getAllGolfers();
    }

    public async createGolfer(golfer: Golfer):Promise<void>{
        await this.golferRepository.createGolfer(golfer);
    }
    
    public async getGolferById(id: number): Promise<void> {
        const golfer = await this.golferRepository.getGolferById(id);
        return golfer;
    }

    public async updateGolferById(id:number, golfer: Golfer): Promise<void> {
        await this.golferRepository.updateGolferById(id, golfer);
    }

    public async deleteGolferById(id: number):Promise<void> {
        await this.golferRepository.deleteGolferById(id)
    }
}
