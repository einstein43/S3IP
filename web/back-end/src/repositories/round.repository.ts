// import { IRoundRepository } from "../interfaces/round.interface";
import { Golfer } from "../models/golfer.model";
import { Round } from "../models/round.model";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default class RoundRepository {
  constructor() {}

  public async getRoundById(): Promise<any> {
    try {
      const round = await prisma.rounds.findMany({
        
      });
      console.log("round retrieved");

      return round;
    } catch (error) {
      console.error("could not find round in repository");
      throw new Error("could not find round in repository");
    }
  }

  public async postRound(round: Round): Promise<void> {
    try {
      const newRound = await prisma.rounds.create({
        data: {
          id: round.id,
          course_id: round.course_id,
          golfer_id: round.golfer_id,
          score: round.score
        },
      });
      console.log(newRound);
    } catch (error) {
      console.error("could not create round in database");
      throw new Error("Failed to create round");
    }
    console.log("round created");
  }

  public async updateRound(round: Round): Promise<void> {
    try {
      const updatedRound = await prisma.rounds.update({
        where: {
          id: round.id,
        },
        data: {
          id: round.id,
          course_id: round.course_id,
          golfer_id: round.golfer_id,
          score: round.score,
        },
      });
      console.log(updatedRound);
    } catch (error) {
      console.error("could not update round in repository");
      throw new Error("Failed to update round");
    }
    console.log("golfer updated");
  }
  public async deleteRound(id: number): Promise<void> {
    try {
      const deletedRound = await prisma.rounds.delete({
        where: {
          id: id,
        },
      });
      console.log(deletedRound);
    } catch (error) {
      console.error("could not delete round in repository");
      throw new Error("Failed to delete round");
    }
    console.log("round deleted");
  }
}
