import { PrismaClient } from "@prisma/client";
import RoundRepository from "../repositories/round.repository"; // Replace 'yourFile' with the actual file name or path
import { describe, expect, it, jest, beforeAll, afterAll } from "@jest/globals";

const prisma = new PrismaClient();

describe("RoundRepository tests", () => {
  let prisma: PrismaClient;
  let roundRepository: RoundRepository;

  beforeAll(() => {
    prisma = new PrismaClient();
    roundRepository = new RoundRepository(); //  Instantiate the RoundRepository class
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it("should update the round", async () => {
    //  mak een mock object voor testing
    const round = {
      id: 1,
      course_id: 2,
      golfer_id: 3,
      score: 72,
    };

    //  roep de updateRound methode aan op de roundRepository instance
    await expect(roundRepository.updateRound(round)).resolves.toBeUndefined();

    // verifieer dat de ronde is geupdatet
    const updatedRound = await prisma.rounds.findUnique({
      where: { id: round.id },
    });

    expect(updatedRound).toEqual(expect.objectContaining(round));
  });

  it("should throw an error if the round update fails", async () => {
    // maak mock object aan voor testing
    const round = {
      id: 1,
      course_id: 2,
      golfer_id: 3,
      score: 72,
    };

    // mock prisma object aanmaken om een error te kunnen throwen
    jest
      .spyOn(prisma.rounds, "update")
      .mockRejectedValue(new Error("Mock update error"));

    //  roep de updateRound methode aan op de roundRepository instance en verwacht een error
    await expect(roundRepository.updateRound(round)).rejects.toThrowError(
      "Failed to update round"
    );
  });

  describe("RoundRepository", () => {
    let prisma: PrismaClient;
    let roundRepository: RoundRepository;

    beforeAll(() => {
      prisma = new PrismaClient();
      roundRepository = new RoundRepository(); //  Instantiate the RoundRepository class
    });

    afterAll(async () => {
      await prisma.$disconnect();
    });

    it("should create a round", async () => {
      // maak mock object aan voor testing
      const round = {
        id: 1,
        course_id: 2,
        golfer_id: 3,
        score: 72,
      };

      //  roep de postRound methode aan op de roundRepository instance
      await expect(roundRepository.postRound(round)).resolves.toBeUndefined();

      //  verifieer dat de ronde is aangemaakt
      const createdRound = await prisma.rounds.findUnique({
        where: { id: round.id },
      });

      expect(createdRound).toEqual(expect.objectContaining(round));
    });

    it("should throw an error if the round creation fails", async () => {
      //  maak mock object aan voor testing
      const round = {
        id: 1,
        course_id: 2,
        golfer_id: 3,
        score: 72,
      };

      //  mock prisma object aanmaken om een error te kunnen throwen
      jest
        .spyOn(prisma.rounds, "create")
        .mockRejectedValue(new Error("Mock create error"));

      // roep de postRound methode aan op de roundRepository instance en verwacht een error
      await expect(roundRepository.postRound(round)).rejects.toThrowError(
        "Failed to create round"
      );
    });
  });

  beforeAll(() => {
    prisma = new PrismaClient();
    roundRepository = new RoundRepository(); //  Instantiate the RoundRepository class
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it('should delete a round', async () => {
    //  maak mock object aan voor testing
    const round = {
      id: 1,
      course_id: 2,
      golfer_id: 3,
      score: 72,
    };

    // voeg de ronde toe aan de database
    await prisma.rounds.create({
      data: round,
    });

    //  roep de deleteRound methode aan op de roundRepository instance
    await expect(roundRepository.deleteRound(round.id)).resolves.toBeUndefined();

    // verifieer dat de ronde is verwijderd
    const deletedRound = await prisma.rounds.findUnique({
      where: { id: round.id },
    });

    expect(deletedRound).toBeNull();
  });

  it('should throw an error if the round deletion fails', async () => {
    //  maak mock object aan voor testing
    const roundId = 1;

    //  mock prisma object aanmaken om een error te kunnen throwen
    jest.spyOn(prisma.rounds, 'delete').mockRejectedValue(new Error('Mock delete error'));

    //  roep de deleteRound methode aan op de roundRepository instance en verwacht een error
    await expect(roundRepository.deleteRound(roundId)).rejects.toThrowError('Failed to delete round');
  });
});




 
