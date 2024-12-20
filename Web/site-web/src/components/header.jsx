import { PiNumberCircleOneFill } from "react-icons/pi";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ReservationContext } from "../context/reservation-context";
import "./header.css";
import { initialState } from "../reducers/reservation-reducer";


const Header = () => {
  const { state } = useContext(ReservationContext);

  // TODO : Vérifier si une réservation est en cours
  let isReservationStarted = false;
  if(JSON.stringify(state) === JSON.stringify(initialState)) {
    isReservationStarted = false;
  } else if(JSON.stringify(state) != JSON.stringify(initialState)) {
    isReservationStarted = true;
  }
  

  return (
    <header className="homepage-header">
      <Link to="/" className="homepage-link">
        <h1 className="homepage-title">PolyCourt</h1>
      </Link>
      <div className="link-container">
        <Link to="/reservation" className="reservation-link">
          {isReservationStarted && (
            <PiNumberCircleOneFill className="notification" />
          )}
          Réserver
        </Link>
      </div>
    </header>
  );
};

export default Header;
