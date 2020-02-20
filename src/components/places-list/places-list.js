import React, {useState} from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card";

const PlacesList = ({offers = []}) => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardHover = (card) => {
    setActiveCard(card);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <PlaceCard key={offer.id} card={offer}
        onCardHover={handleCardHover}
        onHeaderClick={() => {}}/>)}
    </div>
  );
};

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(PlaceCard.propTypes.card).isRequired
};

export default PlacesList;
