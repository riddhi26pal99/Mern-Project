import React from 'react'
import "./PlaceList .css"
import PlaceItem from './PlaceItem'
import Card from "../../shared/components/UIElements/Card"

function PlaceList(props) {

    if(props.items.length === 0 ){
    return (
        <div className= "place-list center">
            <Card>
                <h2>No place found. Maybe Create one?</h2>
                <button>Share Place</button>
            </Card>
        </div>
    )};

    return <ul className="place-list">
        {
            props.items.map(place => <PlaceItem 
                    key = {place.id}
                    id = {place.id}
                    image = {place.ImageURL}
                    title = {place.title}
                    description = {place.description}
                    address = {place.address}
                    creatorId = {place.creator}
                    coordinates = {place.location}
                />)
        }
    </ul>
}

export default PlaceList
