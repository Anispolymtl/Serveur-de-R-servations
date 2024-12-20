// reservation-reducer.js
export const initialState = {
  currentReservation: {
    name: "",
    plateau: "",
    equipment: [],
    day: "",
    startTime: "",
    endTime: "",
  },
};

/* Parties de code où on a utilisé l'aide d'un SIAG:
   1-Le SIAG nous a été utile pour l'implémentation du Reducer
      1.1: Le SIAG a proposé une solution à la fonction reducer que j'ai gardé puisque je 
          ne comprenais pas bien comment coder le update et reset puisqu'il n'y a pas de type
          dans JS et je trouve ca très mélangeant de savoir quel objet a quel attributs.       
*/

export const UPDATE_RESERVATION = "UPDATE_RESERVATION";
export const RESET_RESERVATION = "RESET_RESERVATION";

// TODO : Implémenter la gestion des 2 actions du Reducer
export const reservationReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_RESERVATION:
      return {
        ...state,
        currentReservation: {
          ...state.currentReservation,
          ...action.payload,
        },
      };
    case RESET_RESERVATION:
      return {
        ...state,
        currentReservation: { ...initialState.currentReservation },
      };
    default:
      return state;
  }
};
