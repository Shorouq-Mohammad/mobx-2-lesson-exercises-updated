import React, { Component } from 'react';
import { observer, inject, Observer } from 'mobx-react'

class Reservation extends Component {
    complete = () => {
        this.props.RestaurantStore.completeRes(this.props.res.id)
    }

    seat = () => {
        this.props.RestaurantStore.seatRes(this.props.res.id)
    }

    render() {
        const {name, numPeople } = this.props.res
        return (
            <div>
                <h3>{name} - {numPeople}</h3>
                <button onClick={this.complete}>Complete</button>
                <button onClick={this.seat}>Seat</button>
            </div>
            //render the reservation data here
            //make sure you store the ID somewhere so you can find the reservation
            //use the class "conditional" to conditionally render completed reservations
            //You should hav ea complete reservation button to complete the reservation
        )
    }
}

//inject your store here
export default inject("RestaurantStore")(Observer(Reservation))