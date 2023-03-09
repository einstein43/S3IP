import express, { Request, Response } from "express";
import { REPLCommand } from "repl";
import { Golfer } from "../models/golfer.model";

export interface IGolferController {
  getAllGolfers(req: Request, res: Response): Promise<Golfer[]>;
  createGolfer(req: Request, res: Response): Promise<void>;
  getGolferById(req: Request, res: Response): Promise<Golfer>;
  updateGolferById(req: Request, res: Response): Promise<void>;
  deleteGolferById(req: Request, res: Response): Promise<void>;
}

export interface IGolferService {
  getAllGolfers(): Promise<Golfer[]>;
  createGolfer(golfer: Golfer): Promise<void>;
  getGolferById(id: number): Promise<Golfer>;
  updateGolferById(id: number, golfer: Golfer): Promise<void>;
  deleteGolferById(id: number): Promise<void>;
}

export interface IGolferRepository {
  getAllGolfers(): Promise<Golfer[]>;
  createGolfer(golfer: Golfer): Promise<void>;
  getGolferById(id: number): Promise<Golfer>;
  updateGolferById(id: number, golfer: Golfer): Promise<void>;
  deleteGolferById(id: number): Promise<void>;
}
