import { Router } from "express";
import { addSongToPlaylist, allPlaylists, createPlaylist, deletePlaylist, deleteSongFromPlaylist, onePlaylist, updateOnePlaylist } from "../controllers/playlistController";

export const playlistRouter = Router();

playlistRouter.get('/all', allPlaylists);
playlistRouter.get('/onePlaylist', onePlaylist);
playlistRouter.post('/create', createPlaylist);
playlistRouter.put('/:id/edit', updateOnePlaylist);
playlistRouter.delete('/:id/delete', deletePlaylist);
playlistRouter.post("/:playlistId/addSong/:songId", addSongToPlaylist);
playlistRouter.delete('/:playlistId/deleteSong/:songId', deleteSongFromPlaylist)