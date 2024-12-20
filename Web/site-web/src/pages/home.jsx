import Plateau from "../components/plateau";
import Header from "../components/header";
import "./home.css";
import basketball from "../assets/basketball.png";
import soccer from "../assets/soccer.png";
import tennis from "../assets/tennis.png";
import { Link } from "react-router-dom";
import { useReservationSystem } from "../hooks/useReservationSystem";

const HomePage = () => {
  const { plateaus } = useReservationSystem();
  
  const getCorrespondingImage = (plateauId) => {
    const imageMap = {
      'p1': basketball,
      'p2': soccer,
      'p3': tennis
    };

    return imageMap[plateauId] || null;
  };

  return (
    <div className="homepage">
      <h1 className="title">Choisissez un plateau pour commencer!</h1>
      <div className="card-container">
       {/* TODO: Charger les plateaus dynamiquement */}
          {plateaus.map((plateau) => (
            <Link key={plateau.id} to={`/plateau/${plateau.id}`}>
              <Plateau image={getCorrespondingImage(plateau.id)} title={`${plateau.name}`}/>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default HomePage;
