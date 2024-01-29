import Song from "../models/songModel";

export const allSong = async (req, res) => {
  try {
    const songs = await Song.find();
    res.json(songs);
  } catch (error) {
    console.log(error.message);
  }
};

export const getOneSong = async (req, res) => {
  try {
    const oneSong = await Song.findOne(req.body);
    res.json(oneSong);
  } catch (error) {
    console.log(error);
  }
};

export const createSong = async (req, res) => {
  try {
    const newSong = await Song.create(req.body);
    res.json(newSong);
  } catch (error) {
    console.log(error);
  }
};

export const updateSong = async (req, res) => {
  try {
    const songId = req.params.id;
    const updatedSongData = req.body;
    const updateSong = await Song.findByIdAndUpdate(songId, updatedSongData, {
      new: true,
    });
    res.json(updateSong);
  } catch (error) {
    console.log(error);
  }
};

export const deleteSong = async (req, res) => {
  try {
    const songId = req.params.id;
    const updatedSongData = req.body;
    const removeSong = await Song.findByIdAndDelete(songId, updatedSongData, {
      new: true,
    });
    res.json(removeSong);
  } catch (error) {
    console.log(error);
  }
};
