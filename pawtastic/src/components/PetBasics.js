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
                    <input type="checkbox" id="gender" className="slider" />
                    <label for="gender" class="switch"></label>                    
                    <input type="checkbox" id="spayNeuter" className="slider" />
                    <label for="spayNeuter" class="switch"></label>  
                    <div className="weight">
                        <div class="col-xl-10 pb-5">
                            <input class="checkbox-budget" type="radio" name="budget" id="budget-1" checked />
                            <label class="for-checkbox-budget" for="budget-1">
                                <span data-hover="500$">500$</span>
                            </label>
                            <input class="checkbox-budget" type="radio" name="budget" id="budget-2" />
                            <label class="for-checkbox-budget" for="budget-2">                          
                                <span data-hover="1000$">1000$</span>
                            </label>
                            <input class="checkbox-budget" type="radio" name="budget" id="budget-3" />
                            <label class="for-checkbox-budget" for="budget-3">                          
                                <span data-hover="1500$">1500$</span>
                            </label>
                            <input class="checkbox-budget" type="radio" name="budget" id="budget-4" />
                            <label class="for-checkbox-budget" for="budget-4">                          
                                <span data-hover="2000$">2000$</span>
                            </label>
                        </div>   
                    </div>
                </div>
            </div>
        )
    }
}
