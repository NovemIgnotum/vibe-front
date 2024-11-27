import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import "./style/Playlist.css";
import { Link } from "react-router-dom";
interface PlayListProps {
  playlistId: string;
}

interface IPlayList {
  cover: string;
  name: string;
  tracks: [
    {
      title: string;
      artist: string;
      url: string;
    }
  ];
}

const PlayList = (props: PlayListProps) => {
  const [playlistDetails, setPlaylistDetails] = useState({} as IPlayList);

  const getPlaylistLiked = useCallback(async () => {
    try {
      await axios
        .get(
          `${process.env.REACT_APP_API_URL}/playlist/read/${props.playlistId}`
        )
        .then((res) => {
          setPlaylistDetails(res.data.playlist);
          console.log("playlist liked", res.data.playlist);
        })
        .catch((e) => {
          console.error("Error while getting playlist liked", e);
        });
    } catch (e) {
      console.error("Error while getting playlist liked", e);
    }
  }, [props.playlistId]);

  useEffect(() => {
    getPlaylistLiked();
  }, [getPlaylistLiked]);

  return (
    <>
      <Link key={props.playlistId} to={`/playlist/${props.playlistId}`}>
        <img
          src={playlistDetails.cover}
          alt={`${playlistDetails.name} cover`}
        />
        <h3>{playlistDetails.name}</h3>
      </Link>
    </>
  );
};

export default PlayList;
