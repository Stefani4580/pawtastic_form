import React, { Component } from 'react';

export default class PetBasics extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: "",
            breed: "",
            dob: "",
            spayNeuter: "",
            weight: ""
        }
    }
    render() {
        return (
            <div>
                <div className="petBasicsForm">
                    <label>Name</label>
                    <input  type="text"
                            placeholder="pet name"
                            value={this.state.name}
                    />
                    <label>Breed</label>
                    <input  type="text"
                            placeholder="breed"
                            value={this.state.breed}
                    />
                    <input type="checkbox" id="toggle" className="gender" />
                    <label for="toggle" class="switch"></label>                    

                </div>
            </div>
        )
    }
}
