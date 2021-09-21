import React from "react";
import PropTypes from 'prop-types';

function AlbumCard({picture, album_name}) {
  return (
    <div className="col-md-3">
      <div className="album_card">
        <div className="album_card__content">
          <img
            src={picture}
            alt="album img"
            className="music_card__img"
          />
        </div>
        <div className="music_card__label">
          <div className="music_card__label--album">{album_name}</div>
        </div>
      </div>
    </div>
  );
}

AlbumCard
.propTypes = {
  picture: PropTypes.string,
  album_name: PropTypes.string,
}

export default AlbumCard;
