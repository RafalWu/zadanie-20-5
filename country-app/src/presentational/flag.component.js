import React from 'react';

const CountryFlag = (props) => (
    <div className="country-logo-wrapper"> // <CountryFlag country={...} /> (?)
        <img className="country-logo" src={props.country.imageUrl} alt="country photo" />
    </div>
);

export default CountryFlag;