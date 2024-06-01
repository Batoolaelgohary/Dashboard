import { User } from "./AuthContext";

interface AuthState {
  currentUser: User | null;
}

type AuthAction = { type: "LOGIN"; payload: User } | { type: "LOGOUT" };

const initialAuthState: AuthState = {
  currentUser: null,
};

const AuthReducer = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case "LOGIN": {
      return {
        ...state,
        currentUser: action.payload,
      };
    }
    case "LOGOUT": {
      return {
        ...state,
        currentUser: null,
      };
    }
    default:
      return state;
  }
};

export { AuthReducer, initialAuthState };
