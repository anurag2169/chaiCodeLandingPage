import "./App.css";
import { Divider } from "./components/custom/divider/Divider";
import { HeroSection } from "./components/custom/heroSection/heroSection";
import { LiveCohort } from "./components/custom/liveCohort/LiveCohort";
import { Navbar } from "./components/custom/nabvar/Navbar.component";
import { Showcase } from "./components/custom/showcaseSection/showcase";
import { Testimonials } from "./components/custom/testimonials/Testimonials";
import { TweetLove } from "./components/custom/tweetLove/TweetLove";
import { cohortsData } from "./data/cohorts.data";
import { headerData } from "./data/header.data";
import { studentShowcaseData } from "./data/studentShowcase.data";
import { testimonials } from "./data/testimonials.data";
import { tweetLoveData } from "./data/tweetLove.data";

function App() {
  const { logoImage, navbarItems, loginBtnText, loginButtonLink } = headerData;
  const { heading, subheading, tweets, cta } = tweetLoveData;
  const { title, logos } = studentShowcaseData;
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
      <Showcase title={title} logos={logos} />
      <Divider />
      <LiveCohort
        heading={cohortsData.sectionTitle}
        subHeading={cohortsData.sectionSubtitle}
        liveCohorts={cohortsData.cohorts}
      />
      <Divider />
      <Testimonials testimonials={testimonials} />
    </section>
  );
}

export default App;
