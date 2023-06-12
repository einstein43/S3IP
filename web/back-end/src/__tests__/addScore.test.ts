import { PrismaClient } from "@prisma/client";
import RoundRepository from "../repositories/round.repository"; // Replace 'yourFile' with the actual file name or path
import { describe, expect, it, jest, beforeAll, afterAll } from "@jest/globals";

const prisma = new PrismaClient();

describe("RoundRepository tests", () => {
  let prisma: PrismaClient;
  let roundRepository: RoundRepository;

  beforeAll(() => {
    prisma = new PrismaClient();
    roundRepository = new RoundRepository(); // Instantiate the RoundRepository class
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it("should update the round", async () => {
    // Create a mock round object for testing
    const round = {
      id: 1,
      course_id: 2,
      golfer_id: 3,
      score: 72,
    };

    // Call the updateRound method on the roundRepository instance
    await expect(roundRepository.updateRound(round)).resolves.toBeUndefined();

    // Verify that the round was updated
    const updatedRound = await prisma.rounds.findUnique({
      where: { id: round.id },
    });

    expect(updatedRound).toEqual(expect.objectContaining(round));
  });

  it("should throw an error if the round update fails", async () => {
    // Create a mock round object for testing
    const round = {
      id: 1,
      course_id: 2,
      golfer_id: 3,
      score: 72,
    };

    // Mock the Prisma update method to throw an error
    jest
      .spyOn(prisma.rounds, "update")
      .mockRejectedValue(new Error("Mock update error"));

    // Call the updateRound method on the roundRepository instance and expect it to throw an error
    await expect(roundRepository.updateRound(round)).rejects.toThrowError(
      "Failed to update round"
    );
  });

  describe("RoundRepository", () => {
    let prisma: PrismaClient;
    let roundRepository: RoundRepository;

    beforeAll(() => {
      prisma = new PrismaClient();
      roundRepository = new RoundRepository(); // Instantiate the RoundRepository class
    });

    afterAll(async () => {
      await prisma.$disconnect();
    });

    it("should create a round", async () => {
      // Create a mock round object for testing
      const round = {
        id: 1,
        course_id: 2,
        golfer_id: 3,
        score: 72,
      };

      // Call the postRound method on the roundRepository instance
      await expect(roundRepository.postRound(round)).resolves.toBeUndefined();

      // Verify that the round was created
      const createdRound = await prisma.rounds.findUnique({
        where: { id: round.id },
      });

      expect(createdRound).toEqual(expect.objectContaining(round));
    });

    it("should throw an error if the round creation fails", async () => {
      // Create a mock round object for testing
      const round = {
        id: 1,
        course_id: 2,
        golfer_id: 3,
        score: 72,
      };

      // Mock the Prisma create method to throw an error
      jest
        .spyOn(prisma.rounds, "create")
        .mockRejectedValue(new Error("Mock create error"));

      // Call the postRound method on the roundRepository instance and expect it to throw an error
      await expect(roundRepository.postRound(round)).rejects.toThrowError(
        "Failed to create round"
      );
    });
  });

  beforeAll(() => {
    prisma = new PrismaClient();
    roundRepository = new RoundRepository(); // Instantiate the RoundRepository class
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it('should delete a round', async () => {
    // Create a mock round object for testing
    const round = {
      id: 1,
      course_id: 2,
      golfer_id: 3,
      score: 72,
    };

    // Create the round in the database to delete it
    await prisma.rounds.create({
      data: round,
    });

    // Call the deleteRound method on the roundRepository instance
    await expect(roundRepository.deleteRound(round.id)).resolves.toBeUndefined();

    // Verify that the round was deleted
    const deletedRound = await prisma.rounds.findUnique({
      where: { id: round.id },
    });

    expect(deletedRound).toBeNull();
  });

  it('should throw an error if the round deletion fails', async () => {
    // Create a mock round ID for testing
    const roundId = 1;

    // Mock the Prisma delete method to throw an error
    jest.spyOn(prisma.rounds, 'delete').mockRejectedValue(new Error('Mock delete error'));

    // Call the deleteRound method on the roundRepository instance and expect it to throw an error
    await expect(roundRepository.deleteRound(roundId)).rejects.toThrowError('Failed to delete round');
  });
});




 
