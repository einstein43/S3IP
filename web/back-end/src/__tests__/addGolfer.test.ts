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
        // test object voor testing
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
          golferRepository = new GolferRepository(); // maak de GolferRepository class aan
        });
      
        afterAll(async () => {
          await prisma.$disconnect();
        });
      
        it('should retrieve a golfer by ID', async () => {
          // test golfer object voor testing
          const golfer = {
            id: 1,
            name: 'John Doe',
            age: 30,
            handicap: 10,
          };
      
          // Golfer toevoegen aan database
          await prisma.golfers.create({
            data: golfer,
          });
      
          // roep getgolferbyid aan op de golferRepository instance
          await expect(golferRepository.getGolferById(golfer.id)).resolves.toBeUndefined();
      
          // check of de golfer is opgehaald
          const retrievedGolfer = await prisma.golfers.findUnique({
            where: { id: golfer.id },
          });
      
          expect(retrievedGolfer).toEqual(expect.objectContaining(golfer));
        });
      
        it('should throw an error if the golfer retrieval fails', async () => {
          // test id object voor testing
          const golferId = 1;
      
          // prisma findunique voor error test
          jest.spyOn(prisma.golfers, 'findUnique').mockRejectedValue(new Error('Mock retrieval error'));
      
          // roep getgolferbyid aan op de golferRepository instance en verwacht een error
          await expect(golferRepository.getGolferById(golferId)).rejects.toThrowError('Failed to retrieve golfer');
        });
      });

      beforeAll(() => {
        prisma = new PrismaClient();
        golferRepository = new GolferRepository(); //  maak de GolferRepository class aan
      });
    
      afterAll(async () => {
        await prisma.$disconnect();
      });
    
      it('should delete a golfer by ID', async () => {
        //  test golfer object voor testing
        const golfer = {
          id: 1,
          name: 'John Doe',
          age: 30,
          handicap: 10,
        };
    
        //  Golfer toevoegen aan database
        await prisma.golfers.create({
          data: golfer,
        });
    
        //  roep deletegolferbyid aan op de golferRepository instance
        await expect(golferRepository.deleteGolferById(golfer.id)).resolves.toBeUndefined();
    
        //  check of de golfer is verwijderd
        const deletedGolfer = await prisma.golfers.findUnique({
          where: { id: golfer.id },
        });
    
        expect(deletedGolfer).toBeNull();
      });
    
      it('should throw an error if the golfer deletion fails', async () => {
        // test id object voor testing
        const golferId = 1;
    
        
        jest.spyOn(prisma.golfers, 'delete').mockRejectedValue(new Error('Mock deletion error'));
    
        //  roep deletegolferbyid aan op de golferRepository instance en verwacht een error
        await expect(golferRepository.deleteGolferById(golferId)).rejects.toThrowError('Failed to delete golfer');
      });
    });
     
 
