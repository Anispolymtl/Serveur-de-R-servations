import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Popup from "../components/popup";
import Calendar from "../components/calendar";
import { useReservationSystem } from "../hooks/useReservationSystem";
import images from "../utils/imageSource";
import "./plateau.css";

/**
 * TODO : Compléter l'affichage des informations du plateau et l'affichage du calendrier
 * @returns {JSX.Element} Page d'un plateau spécifique
 */
function PlateauPage() {
  const { plateauId } = useParams();
  const { plateaus } = useReservationSystem();
  const [isOpen, setIsOpen] = useState(false);
  const imageSrc = images[plateauId];
  const [displayedReservation, setDisplayedReservation] = useState(null);

  const plateau = plateaus.find((p) => p.id === plateauId);

  const togglePopup = (reservation) => {
    if (reservation) {
      setDisplayedReservation(reservation);
    }
    setIsOpen(!isOpen);
  };

  /* Parties de code où on a utilisé l'aide d'un SIAG:
   1-Le SIAG nous a été utile pour afficher le nom et la description du plateau
      1.1: Le SIAG a proposé plusieurs solution a mon problème que le nom n'affichait pas
          correctement les noms, description après plusieurs essais infructueux puisque ceux-ci étaient rendu avant que l'info
          ai pu être accédé. J'ai donc opté pour l'option de safe access ? (xxx?.yyy) afin de m'assurer de recevoir
          l'information avant de l'afficher.
*/

  return (
    <div className="facility-container">
      <div className="info-container">
        <div className="facility-image">
          {/* TODO : Afficher le nom, description et capacité du plateau */}  
          <img src={imageSrc} alt="Basketball Court" />
          <div className="plateau-info">
            <h2>{plateau?.name}</h2>         
            <p>{plateau?.description}</p>
            <p>{`Capacité maximale : ${plateau?.maxCapacity}`}</p>
            <div className="reservation-link">
              <Link to={`/reservation/${plateau?.id}`} className="reserve-btn"> Réserver </Link>
            </div>
          </div>
        </div>
        <div className="calendar-container">
          {/* TODO : Afficher le calendrier et lui donner la fonction de fermeture */}
          <Calendar togglePopup={togglePopup} plateauName={plateau?.name}/>
        </div>
      </div>
      {isOpen && (
        // TODO : Charger les informations de la réservation dans le popup
        <Popup
          reservationId={displayedReservation?._id}
          content={
            <div>
              <p>Plateau : {displayedReservation?.plateauName}</p>
              <p>Client : {displayedReservation?.clientName}</p>
            </div>
          }
          handleClose={togglePopup}
        />
      )}
    </div>
  );
}

export default PlateauPage;
