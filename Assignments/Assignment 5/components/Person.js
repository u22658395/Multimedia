import React from 'react';

export class Person extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, birth_year, eye_color, gender, homeworld, error } = this.props.data;

        if (error) {
            return <div className="p-4 mx-auto max-w-lg text-center text-red-500 border border-red-500 rounded-lg font-semibold">Error: {error}</div>;
        }

        return (
            <div>
                <h1>Person</h1>
                <h3>{name}</h3>
                <p>Birth Year: {birth_year}</p>
                <p>Eye Color: {eye_color}</p>
                <p>Gender: {gender}</p>
                <p>Homeworld: {homeworld} </p>
            </div>
        );
    }
}

