import "./App.css";
import { Navbar } from "./components/custom/nabvar/Navbar.component";
import { headerData } from "./data/header.data";

function App() {
  const { logoImage, navbarItems, loginBtnText, loginButtonLink } = headerData;
  return (
    <section className="">
      <Navbar
        logoImage={logoImage}
        navbarItems={navbarItems}
        buttonText={loginBtnText}
        buttonLink={loginButtonLink}
      />
    </section>
  );
}

export default App;
