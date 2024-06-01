import { useContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import "./login.scss";
import { useNavigate } from "react-router-dom";
import { AuthContext, User } from "../../context/AuthContext";

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { dispatch, state } = useContext(AuthContext);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const firebaseUser = userCredential.user;
        const user: User = {
          uid: firebaseUser.uid,
          email: firebaseUser.email,
        };
        dispatch({ type: "LOGIN", payload: user });
        localStorage.setItem("user", JSON.stringify(state.currentUser));
        navigate("/");
        console.log(user);
      })
      .catch(() => {
        setError(true);
      });
  };

  return (
    <div className="login">
      <div className="login-container">
        <h1>Dashboard Admin</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit">Login</button>
          {error ? <span>Wrong email or password!</span> : ""}
        </form>
      </div>
    </div>
  );
};

export default Login;
