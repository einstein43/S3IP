import { PrismaClient } from "@prisma/client";
import GolferRepository from "../repositories/golfer.repository"; // Replace 'yourFile' with the actual file name or path
import { describe, expect, it, jest, beforeAll, afterAll } from "@jest/globals";

const prisma = new PrismaClient();

describe("GolferRepository tests", () => {
    let prisma: PrismaClient;
    let golferRepository: GolferRepository;
    
    beforeAll(() => {
        prisma = new PrismaClient();
        golferRepository = new GolferRepository(); // Instantiate the GolferRepository class
    });
    
    afterAll(async () => {
        await prisma.$disconnect();
    });
    
    it("should update the golfer", async () => {
        // Create a mock golfer object for testing
        const golfer = {
        id: 1,
        fName: "John",
        lName: "Doe",
        email: "email@email.com",
        handicap: 10,
        };
    });

    describe('GolferRepository', () => {
        let prisma: PrismaClient;
        let golferRepository: GolferRepository;
      
        beforeAll(() => {
          prisma = new PrismaClient();
          golferRepository = new GolferRepository(); // Instantiate the GolferRepository class
        });
      
        afterAll(async () => {
          await prisma.$disconnect();
        });
      
        it('should retrieve a golfer by ID', async () => {
          // Create a mock golfer object for testing
          const golfer = {
            id: 1,
            name: 'John Doe',
            age: 30,
            handicap: 10,
          };
      
          // Create the golfer in the database to retrieve it
          await prisma.golfers.create({
            data: golfer,
          });
      
          // Call the getGolferById method on the golferRepository instance
          await expect(golferRepository.getGolferById(golfer.id)).resolves.toBeUndefined();
      
          // Verify that the golfer was retrieved
          const retrievedGolfer = await prisma.golfers.findUnique({
            where: { id: golfer.id },
          });
      
          expect(retrievedGolfer).toEqual(expect.objectContaining(golfer));
        });
      
        it('should throw an error if the golfer retrieval fails', async () => {
          // Create a mock golfer ID for testing
          const golferId = 1;
      
          // Mock the Prisma findUnique method to throw an error
          jest.spyOn(prisma.golfers, 'findUnique').mockRejectedValue(new Error('Mock retrieval error'));
      
          // Call the getGolferById method on the golferRepository instance and expect it to throw an error
          await expect(golferRepository.getGolferById(golferId)).rejects.toThrowError('Failed to retrieve golfer');
        });
      });

      beforeAll(() => {
        prisma = new PrismaClient();
        golferRepository = new GolferRepository(); // Instantiate the GolferRepository class
      });
    
      afterAll(async () => {
        await prisma.$disconnect();
      });
    
      it('should delete a golfer by ID', async () => {
        // Create a mock golfer object for testing
        const golfer = {
          id: 1,
          name: 'John Doe',
          age: 30,
          handicap: 10,
        };
    
        // Create the golfer in the database to delete it
        await prisma.golfers.create({
          data: golfer,
        });
    
        // Call the deleteGolferById method on the golferRepository instance
        await expect(golferRepository.deleteGolferById(golfer.id)).resolves.toBeUndefined();
    
        // Verify that the golfer was deleted
        const deletedGolfer = await prisma.golfers.findUnique({
          where: { id: golfer.id },
        });
    
        expect(deletedGolfer).toBeNull();
      });
    
      it('should throw an error if the golfer deletion fails', async () => {
        // Create a mock golfer ID for testing
        const golferId = 1;
    
        // Mock the Prisma delete method to throw an error
        jest.spyOn(prisma.golfers, 'delete').mockRejectedValue(new Error('Mock deletion error'));
    
        // Call the deleteGolferById method on the golferRepository instance and expect it to throw an error
        await expect(golferRepository.deleteGolferById(golferId)).rejects.toThrowError('Failed to delete golfer');
      });
    });
     
 
