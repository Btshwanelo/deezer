import React from "react";
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';

function MusicCard({song, id, duration, album, picture}) {
  return (
    <div className="col-md-3 col-sm-6">
      <Link to={`/Artist/${id}`}> 
        <div className="album_card">
          <div className="album_card__content">
            <img
              src={picture}
              alt="album img"
              className="music_card__img"
            />
          </div>
          <div className="music_card__label">
          <div className="music_card__label--song">{song}</div>
          <div className="music_card__label--track">Duration: {duration}</div>
            <div className="music_card__label--album">By {album}</div>
          </div>
        </div>
        </Link>
    </div>
  );
}

MusicCard.propTypes = {
  picture: PropTypes.string,
  duration: PropTypes.number,
  album: PropTypes.string,
  id: PropTypes.number,
  song: PropTypes.string,
}


export default MusicCard;
