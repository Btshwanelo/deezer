import React, { useState } from "react";
import MusicCard from "../components/MusicCard";

export default function Home() {

  
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [songs, setSongs] = useState([]);
  const [error, setError] = useState(null);

  const handleSearchInput = (e) => {
    setSearchValue(e.target.value.toLowerCase());
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearch = (e) => {
    search(searchValue);
    e.preventDefault();
  };

  const search = (searchValue) => {
    setLoading(true);
    setError(null);

    const url = `/search?q=track:${searchValue}`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setSongs(json.data);
        setLoading(false);
        console.log(json.data);
      } catch (error) {
        setError(error);
        setLoading(false);
        console.log("error", error);
      }
    };

    fetchData();
    resetInputField();
  };

  return (
    <div className="container-fluid">
      {error && <h1>Error...</h1>}
      {loading && <h1>Loading...</h1>}
      <div className="main__content">
        <form onSubmit={callSearch}>
          <div className="input-group mb-3">
            <input
              value={searchValue}
              onSubmit={callSearch}
              onChange={handleSearchInput}
              type="text"
              className="form-control"
              placeholder="Enter Song Name..."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <div  className="input-group-append">
              <span
                className="input-group-text"
                type="submit"
                value="search"
                id="basic-addon2"
                onClick={callSearch}
              >
                Search
              </span>
            </div>
          </div>
        </form>
        <div className="  container">
          <div className=" searched-misc row">
            {Object.keys(songs).map((key) => {
              return (
                <MusicCard
                  key={songs[key].id}
                  link={songs[key].artist.link}
                  id={songs[key].artist.id}
                  picture={songs[key].artist.picture_medium}
                  album={songs[key].album.title}
                  song={songs[key].title_short}
                  duration={songs[key].duration}
                />
              );
            })}
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
