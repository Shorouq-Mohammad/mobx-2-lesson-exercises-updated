import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import ResInput from './ResInput';
import { Reservation } from '../stores/ReservationStore';

class Restaurant extends Component{
    add = () => {
        this.props.RestaurantStore.addRes(this.props.GeneralStore.name, this.props.GeneralStore.numPeople)
    }
    render () {
        return (
            <div>
                <span>You have {this.props.RestaurantStore.openTables} open tables</span>
                <hr/>
                <span>You have {this.props.RestaurantStore.restPopulation} people in restaurant</span>
                <hr/>
                <span>You have {this.props.RestaurantStore.completedTables} completed tables in restaurant</span>
                {/* Add in # of people in restaurant */}
                {/* Add in # of completed tables with id "completedTables*/}
                <ResInput/>
                <button id="addRes" onClick={this.add}>Add Reservation</button>
                {/* Make the Add Reservation button work */}
                <div className = "reservations">
                {/* Map reservation data to Reservation components here */}
                {this.props.RestaurantStore.reservations.map(r => <Reservation res={r} key={r.id}/>)}
                </div>
            </div>
        )
    }
}

export default inject("GeneralStore", "RestaurantStore")(observer(Restaurant))