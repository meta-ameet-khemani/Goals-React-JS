import React from 'react'

function Person({person}) {
    return (
        <div>
            <h2>{person.name.toString().toUpperCase()}</h2>
            <h4>{person.age.toString().toUpperCase()}</h4>
            <h4>{person.skill.toString().toUpperCase()}</h4>
        </div>
    )
}

export default Person
