import { useReservationSystem } from "../hooks/useReservationSystem";
import "./popup.css";

/**
 * TODO : Compléter la composante pour permettre l'annulation d'une réservation.
 * @param {string} reservationId : identifiant de la réservation à annuler
 * @param {HTMLElement} content : contenu du popup sous forme de contenu HTML arbitraire
 * @param {Function} handleClose : fonction à appeler pour fermer le popup 
 * @returns {JSX.Element} : Popup pour annuler une réservation
 */
const Popup = ({ reservationId, content, handleClose }) => {
  const { fetchReservations, cancelReservation, error } = useReservationSystem();

  // TODO : envoyer une requête pour annuler la réservation.
  // Recharger la page après une annulation réussie.
  const handleCancel = async () => {
    if (!reservationId) {
      alert("Erreur : ID de réservation invalide.");
      return;
    }
    try {
      await cancelReservation(reservationId);
      alert("Réservation annulée avec succès");
      handleClose();
      fetchReservations();
    } catch (err) {
      alert(`Erreur lors de l'annulation: ${err.message}`);
    }
  };

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className="title-container">
          <h2>Réservation</h2>
          <button className="close-btn" onClick={handleClose}> &times; </button>
        </div>
        <h3>{content}</h3>
        <button className="cancel-btn" onClick={handleCancel}> Annuler</button>
      </div>
    </div>
  );
};

export default Popup;
