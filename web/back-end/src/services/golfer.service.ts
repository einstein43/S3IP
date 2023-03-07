import { IGolferService } from "../interfaces/golfer.interface";
import { IGolferRepository } from "../interfaces/golfer.interface";
import { container, inject, injectable } from "tsyringe";
import { Golfer } from "../models/golfer.model";
import GolferRepository from "../repositories/golfer.repository";

container.register("IUserRepository", {
  useClass: GolferRepository,
});

@injectable()
export class GolferService implements IGolferService {
  constructor(
    @inject("IGolferRepository") private golferRepository: IGolferRepository
  ) {
    this.getAllGolfers = this.getAllGolfers.bind(this);
  }

    public async getAllGolfers(): Promise<void> {
        const golfers = this.golferRepository.getAllGolfers();
    }
    
    public async getGolferById(id: number): Promise<Golfer> {
        const golfer = await this.golferRepository.getGolferById(id);
        return golfer;
    }
}
