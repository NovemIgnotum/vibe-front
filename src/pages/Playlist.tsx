import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAudio } from "../context/AudioContext";
import axios from "axios";

interface Track {
  title: string;
  band: string;
  track: string;
}

interface IPlayList {
  cover: string;
  name: string;
  tracks: Track[];
}

const PlayListPage = () => {
  const [playlistDetails, setPlaylistDetails] = useState<IPlayList | null>(
    null
  );
  const params = useParams();
  const { setTrack } = useAudio();

  useEffect(() => {
    const getPlaylist = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/playlist/read/${params.playListId}`
        );
        console.log("playlist", res.data.playlist);
        setPlaylistDetails(res.data.playlist);
      } catch (e) {
        console.error("Error while getting playlist", e);
      }
    };

    getPlaylist();
  }, [params]);

  return (
    <div
      style={{
        marginTop: "100px",
      }}
    >
      <h1>PlayList Page {params.playListId}</h1>
      {playlistDetails && (
        <>
          <img
            src={playlistDetails.cover}
            alt={`${playlistDetails.name} cover`}
          />
          <h3>{playlistDetails.name}</h3>
          <ul>
            {playlistDetails.tracks.map((track, index) => (
              <li key={index}>
                <h4>{track.title}</h4>
                <button
                  onClick={() => setTrack(track, index, playlistDetails.tracks)}
                >
                  Play
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default PlayListPage;
