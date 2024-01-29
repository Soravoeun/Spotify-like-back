import Playlist from "../models/playlistModel";
import Song from "../models/songModel";

export const allPlaylists = async (req, res) => {
  try {
    const playlists = await Playlist.find();
    res.json(playlists);
  } catch (error) {
    console.error(error);
  }
};

export const onePlaylist = async (req, res) => {
  try {
    const getOnePlaylist = await Playlist.findOne(req.body);
    res.json(getOnePlaylist);
  } catch (error) {
    console.log(error);
  }
};

export const createPlaylist = async (req, res) => {
  try {
    const newPlaylist = await Playlist.create(req.body);
    res.json(newPlaylist);
  } catch (error) {
    console.log(error);
  }
};

export const updateOnePlaylist = async (req, res) => {
  try {
    // Récupérer l'ID de la playlist à mettre à jour depuis les paramètres de la requête
    const playlistId = req.params.id;

    // Récupérer les données de mise à jour à partir du corps de la requête
    const updatedPlaylistData = req.body;

    // Mettre à jour la playlist dans la base de données
    const updatedPlaylist = await Playlist.findByIdAndUpdate(
      playlistId,
      updatedPlaylistData,
      { new: true }
    );

    // Renvoyer la playlist mise à jour en réponse
    res.json(updatedPlaylist);
  } catch (error) {
    // Gérer les erreurs
    console.log(error);
    res
      .status(500)
      .json({
        message:
          "Une erreur s'est produite lors de la mise à jour de la playlist.",
      });
  }
};

export const deletePlaylist = async (req, res) => {
  // Récupérer l'ID de la playlist à mettre à jour depuis les paramètres de la requête
  const playlistId = req.params.id;
  try {
      const removePlaylist = await Playlist.findByIdAndDelete(playlistId);
      res.json(removePlaylist);
  } catch (error) {
    console.log(error);
  }
};

export const addSongToPlaylist = async (req, res) => {
  const { songId, playlistId } = req.params;
  try {
    const oneSong = await Song.findById(songId);
    const onePlaylist = await Playlist.findById(playlistId);

    if (!oneSong || !onePlaylist) {
      return res
        .status(401)
        .json({ message: "Playlist ou Chanson non trouvé" });
    }
    if (!onePlaylist.oneSong.includes(songId)) {
      onePlaylist.oneSong.push(songId);
      await onePlaylist.save();
      res.json(onePlaylist);
    } else {
      res
        .status(400)
        .json({ message: "La chanson est déjà dans la playlist." });
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteSongFromPlaylist = async (req, res) => {
    const { songId, playlistId } = req.params;
    try {
        const findOneSongById = await Song.findById(songId);
        const findOnePlaylistById = await Playlist.findById(playlistId);
        findOnePlaylistById.Song.pull(findOneSongById);
       await findOnePlaylistById.save();
    } catch (error) {
        console.log(error)
    }
}
