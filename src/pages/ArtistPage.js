import React, { useEffect, useState } from "react";
import TopSongs from "../components/TopSongs";
import ArtistCard from "../components/ArtistCard";
import AlbumCard from "../components/AlbumCard";
import { useParams } from "react-router-dom";

function ArtistPage() {
  const { id } = useParams();
  const [artist, setArtist] = useState({});
  const [albums, setAlbums] = useState([]);
  const [albumError, setAlbumError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = `/artist/${id}`;
    const top_url = `/artist/${id}/top?limit=4`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setArtist(json);
        setLoading(false);
        console.log(json);
      } catch (error) {
        setError(error);
        setLoading(false);
        console.log("error", error);
      }
    };

    const fetchSongs = async () => {
      try {
        const response = await fetch(top_url);
        const json = await response.json();
        console.log("album run")
        setAlbums(json.data);
        setLoading(false);
        console.log(json.data);
      } catch (error) {
        setAlbumError(error);
        setLoading(false);
        console.log("error", error);
      }
    };

    fetchData();
    fetchSongs();
  }, [id]);



  return (
    <div className="container-fluid">
      <div className="main__content">
        {loading && <h1>Loading...</h1>}
        
        {albumError ? (<h1>Error...</h1>): error ? (<h1>Error...</h1>) :
        (
        <div className="container-fluid">
          <div className=" main__top-div row">
            <ArtistCard picture={artist.picture_xl} name={artist.name} />
            <div className="col-md-4 col-sm-12">
              <h1 className="artist__header">TOP SONGS </h1>
              <ul className="artist__songs">
                {}{Object.keys(albums).map((key) => {return (
                <TopSongs key={albums[key].id} song_name={albums[key].title} artist_name={albums[key].artist.name} />
                
              );})}
              </ul>
            </div>
          </div>
          <div className="album-div row">
            <div className="col-md-12">
              <h1 className="artist__header">Albums </h1>
            </div>
            {Object.keys(albums).map((key) => {return (
                <AlbumCard key={albums[key].id} picture={albums[key].album.cover_small} album_name={albums[key].album.title}/>
                
              );})}
          </div>
        </div>)}
      </div>
    </div>
  );
}

export default ArtistPage;
