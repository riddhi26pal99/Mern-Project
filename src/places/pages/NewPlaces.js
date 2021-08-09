import React from 'react'
import "./NewPlace.css"

import Input from '../../shared/components/FormElements/Input'

function NewPlaces() {
    return (
        <form action="" className="place-form">
            <Input element = "input" type="text" label="title" validator={[]} />
        </form>
    )
}

export default NewPlaces
