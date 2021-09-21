import React from 'react'
import PropTypes from 'prop-types';

function ArtistCard({picture, name}) {
    return (
        <div className="col-md-8 col-sm-12">
            <h1 className="artist__header">{name} </h1>
              <img
                alt="at-img"
                className="artist__img"
                src={picture}
              />
            </div>
    )
}

ArtistCard.propTypes = {
  picture: PropTypes.string,
  name: PropTypes.string,
}

export default ArtistCard
