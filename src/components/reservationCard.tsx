import React from "react";
import { removeReservation } from "../features/reservationSlice";
import { addCustomer } from "../features/customerSlice"
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";

interface ReservationSlice {
  name: string;
  index: number;
}

function ReservationCard({ name, index }: ReservationSlice) {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        dispatch(removeReservation(index));
        dispatch(addCustomer({
          id: uuid(),
          name,
          food: []
        }))
      }}
      className="reservation-card-container"
    >
      {name}
    </div>
  );
}

export default ReservationCard;
