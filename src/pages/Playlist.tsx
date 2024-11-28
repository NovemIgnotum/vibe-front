import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAudio } from "../context/AudioContext";
import axios from "axios";
import "../style/PlaylistPage.css";

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
            </h1>{" "}
          </div>
          <div className="track-list">
            {playlistDetails.tracks.map((track, index) => (
              <div className="track-item">
                <h4>{track.title}</h4>
                <button
                  onClick={() => setTrack(track, index, playlistDetails.tracks)}
                >
                  Play
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default PlayListPage;
