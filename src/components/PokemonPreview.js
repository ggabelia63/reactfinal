import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const PokemonPreview = ({id, image, name, type}) => {
    const style = type + " thumb-container";
    return (
        <Card className={style}>
            <div className="number"><small>#0{id}</small></div>
            <img src={image} alt={name} />
            <div className="detail-wrapper">
                <h3>{name}</h3>
                <small>Type: {type}</small>
            </div>
        </Card>
    )
}

export default PokemonPreview