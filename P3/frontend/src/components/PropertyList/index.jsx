import {useEffect, useState} from 'react';
import PropertyCard from './PropertyCard';

function PropertyList(props) {
    const [properties, setProperties] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:8000/properties/search/')
          .then(response => response.json())
          .then(body => {
            setProperties([...body.results])})
       }, [])

    return (
        <>
          {properties.map(property =>
            <PropertyCard location={property.location} price={property.price} title={property.title} image={property.images[0]}/>
            )}
        </>
    );
}

export default PropertyList;