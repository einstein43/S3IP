import { IGolferRepository } from "../interfaces/golfer.interface";
import { Golfer } from "../models/golfer.model";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default class GolferRepository{
  constructor() {}

  public async getAllGolfers(): Promise<void> {
    try {
      await prisma.golfer.findMany();
    } catch (error) {
      console.error("could not find golfers in repository");
      throw new Error("Failed to retrieve golfers");
    }
  }

  public async createGolfer(golfer: Golfer): Promise<void> {}

  public async getGolferById(id: number): Promise<void> {
    try {
      const golfer = await prisma.golfer.findUnique({
        where: {
          id: id,
        },
      });
      console.log(golfer);
    } catch (error) {
      console.error("could not find golfer in repository");
      throw new Error("Failed to retrieve golfer");
    }
  }

  public async updateGolferById(id: number, golfer: Golfer): Promise<void> {
    try {
      const updatedGolfer = await prisma.golfer.update({
        where: {
          id: id,
        },
        data: {
          fName: golfer.fName,
          lName: golfer.lName,
          email: golfer.email,
          handicap: golfer.handicap,
        },
      });
      console.log(updatedGolfer);
    } catch (error) {
      console.error("could not update golfer in repository");
      throw new Error("Failed to update golfer");
    }
  }

  public async deleteGolferById(id: number): Promise<void> {
    try {
      const deletedGolfer = await prisma.golfer.delete({
        where: {
          id: id,
        },
      });
      console.log(deletedGolfer);
    } catch (error) {
      console.error("could not delete golfer in repository");
      throw new Error("Failed to delete golfer");
    }
  }
}
