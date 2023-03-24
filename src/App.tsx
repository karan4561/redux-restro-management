import React, { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from './app/store';
import ReservationCard from './components/reservationCard';
import CustomerCard from "./components/customerCard";
import { addReservation } from "./features/reservationSlice";

function App() {
  const [reservationInput, setreservationInput] = useState("");
  const reservations = useSelector((state: RootState) => state.reservations.value)
  const customers = useSelector((state: RootState) => state.customer.value)

  const dispatch = useDispatch();

  const handleAddReservations = () => {
    if(!reservationInput) return;
    dispatch(addReservation(reservationInput));
    setreservationInput("");
  }
  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name,index) => {
                return <ReservationCard name={name} index={index}/>              })
              }
            </div>
          </div>
          <div className="reservation-input-container">
            <input 
              value={reservationInput}
              onChange={(e)=>setreservationInput(e.target.value)}
              />
            <button onClick={handleAddReservations}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {customers.map((customers)=> {
            return <CustomerCard id={customers.id} name={customers.name} food={customers.food}/>
          })
          }
        </div>
      </div>
    </div>
  );
}

export default App;