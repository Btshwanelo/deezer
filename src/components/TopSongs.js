import React from "react";
import PropTypes from 'prop-types';

function TopSongs({song_name, artist_name}) {
  return (
    <li className="artist__item">
      <span className="artist__song">{artist_name}</span>
      <span className="artist__album">{song_name}</span>
    </li>
  );
}

TopSongs.propTypes = {
  song_name: PropTypes.string,
  artist_name: PropTypes.string,
}

export default TopSongs;
