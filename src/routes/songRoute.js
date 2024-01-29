import { Router } from "express";
import { allSong, createSong, deleteSong, getOneSong, updateSong } from "../controllers/songController";

export const songRouter = Router();

songRouter.get('/all', allSong)
songRouter.get('/oneSong', getOneSong)
songRouter.post('/create', createSong)
songRouter.put('/:id/edit', updateSong), 
songRouter.delete('/:id/delete', deleteSong)