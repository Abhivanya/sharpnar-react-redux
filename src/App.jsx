import Counter from "./components/Counter";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import { authActions } from "./store";
import Auth from "./components/Auth";
import { useSelector } from "react-redux";
function App() {
  // const isLoggedIn = authActions.auth.isLoggedIn;
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <>
      <Header />
      {isLoggedIn && <UserProfile />}
      {!isLoggedIn && <Auth />}
      <Counter />
    </>
  );
}

export default App;
