import "./App.css";
import { HeroSection } from "./components/custom/heroSection/heroSection";
import { Navbar } from "./components/custom/nabvar/Navbar.component";
import { TweetLove } from "./components/custom/tweetLove/TweetLove";
import { headerData } from "./data/header.data";
import { tweetLoveData } from "./data/tweetLove.data";

function App() {
  const { logoImage, navbarItems, loginBtnText, loginButtonLink } = headerData;
  const { heading, subheading, tweets, cta } = tweetLoveData;
  return (
    <section className="">
      <Navbar
        logoImage={logoImage}
        navbarItems={navbarItems}
        buttonText={loginBtnText}
        buttonLink={loginButtonLink}
      />
      <HeroSection />
      <TweetLove
        heading={heading}
        subheading={subheading}
        tweets={tweets}
        cta={cta}
      />
    </section>
  );
}

export default App;
