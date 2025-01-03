import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAudio } from "../context/AudioContext";
import axios from "axios";
import "../style/PlaylistPage.css";
import { FaPlay, FaPause } from "react-icons/fa";

interface Track {
  title: string;
  band: {
    name: string;
  };
  track: string;
}

interface IPlayList {
  cover: string;
  name: string;
  tracks: Track[];
}

interface IOwner {
  _id: string;
  name: string;
}

const PlayListPage = () => {
  const [playlistDetails, setPlaylistDetails] = useState<IPlayList | null>(
    null
  );
  const [ownerDetails, setOwnerDetails] = useState<IOwner | null>(null);
  const [playMusic, setPlayMusic] = useState<number | null>(null);
  const params = useParams();
  const { setTrack } = useAudio();

  useEffect(() => {
    const getPlaylist = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/playlist/read/${params.playListId}`
        );
        console.log("playlist", res.data);
        setPlaylistDetails(res.data.playlist);
        setOwnerDetails(res.data.band);
      } catch (e) {
        console.error("Error while getting playlist", e);
      }
    };

    getPlaylist();
  }, [params]);

  return (
    <div className="playlist-page">
      {playlistDetails && (
        <>
          <div className="playlist-information">
            <img
              src={playlistDetails.cover}
              alt={`${playlistDetails.name} cover`}
              className="playlist-cover"
            />
            <h1>
              {Object(playlistDetails).name} -
              {ownerDetails && ownerDetails.name}{" "}
            </h1>
            <h1>
              {playlistDetails.tracks.length}
              {playlistDetails.tracks.length > 1 ? "titres" : "titre"}
            </h1>
          </div>
          <div className="playlist-legend">
            <h2 className="title">Titre</h2>
            <h2 className="band">Artiste</h2>
            <h2 className="album">Album</h2>
          </div>
          <div className="legend-separator" />
          <div className="track-list">
            {playlistDetails.tracks.map((track, index) => (
              <div
                className="track-item"
                onClick={() => {
                  setTrack(track, index, playlistDetails.tracks);
                  setPlayMusic(index);
                }}
              >
                <div className="pochette-container">
                  {playMusic === index ? (
                    <>
                      <FaPause className="playLogo" />
                    </>
                  ) : (
                    <>
                      <FaPlay className="playLogo" />
                    </>
                  )}
                  <img
                    src={Object(track).originalAlbum.cover}
                    alt="track cover"
                  />
                  <h1 className="track-title">{track.title}</h1>
                </div>
                <h1 className="track-band">{track.band.name}</h1>
                <h1 className="track-originalAlbum">
                  {Object(track).originalAlbum.name}
                </h1>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default PlayListPage;
