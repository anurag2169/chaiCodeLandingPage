import "./App.css";
import { Benefits } from "./components/custom/BenefitsSection/Benefits";
import { ChaiCodeFeature } from "./components/custom/chaiCodeFeature/ChaiCodeFeature";
import { Community } from "./components/custom/communitySection/Community";
import { CoursesSection } from "./components/custom/coursesSection/CoursesSection";
import { Divider } from "./components/custom/divider/Divider";
import { Footer } from "./components/custom/footer/Footer";
import { FreeApiSection } from "./components/custom/freeapiSection/FreeApiSection";
import { HeroSection } from "./components/custom/heroSection/HeroSection";
import { LiveCohort } from "./components/custom/liveCohort/LiveCohort";
import { Navbar } from "./components/custom/nabvar/Navbar.component";
import { Showcase } from "./components/custom/showcaseSection/Showcase";
import { TagSection } from "./components/custom/tagSection/TagSection";
import { Testimonials } from "./components/custom/testimonials/Testimonials";
import { TweetLove } from "./components/custom/tweetLove/TweetLove";
import { chaiCodeFeatureSection } from "./data/chaiCodeFeature.data";
import { cohortBenefits } from "./data/cohortBenefits.data";
import { cohortsData } from "./data/cohorts.data";
import { communitySection } from "./data/communitySection.data";
import { footerData } from "./data/footer.data";
import { headerData } from "./data/header.data";
import { heroSectionData } from "./data/heroSection.data";
import { openSourceProject } from "./data/openSourceProject.data";
import { studentShowcaseData } from "./data/studentShowcase.data";
import { testimonialsData } from "./data/testimonials.data";
import { topicsCloudTagSection } from "./data/topicsCloudTagSection.data";
import { tweetLoveData } from "./data/tweetLove.data";
import { udemyCourses } from "./data/udemyCourses.data";

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
      <HeroSection {...heroSectionData} />
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
      <Testimonials
        testimonials={testimonialsData.testimonials}
        title={testimonialsData.title}
        heading={testimonialsData.heading}
        subHeading={testimonialsData.subHeading}
        btnText={testimonialsData.button.btnText}
        btnLink={testimonialsData.button.btnLink}
        btnTarget={testimonialsData.button.btnTarget}
      />
      <Divider />
      <CoursesSection
        heading={udemyCourses.heading}
        subHeading={udemyCourses.subheading}
        courses={udemyCourses.courses}
      />
      <Divider />
      <Benefits
        {...cohortBenefits}
        alumniNetwork={cohortBenefits.alumniNetwork}
      />
      <Divider />

      <ChaiCodeFeature
        heading={chaiCodeFeatureSection.heading}
        subheading={chaiCodeFeatureSection.subheading}
        items={chaiCodeFeatureSection.items}
        cta={chaiCodeFeatureSection.cta}
      />
      <Divider />
      <TagSection
        heading={topicsCloudTagSection.heading}
        subHeading={topicsCloudTagSection.subheading}
        tags={topicsCloudTagSection.tags}
      />
      <Divider />
      <Community {...communitySection} />
      <Divider />
      <FreeApiSection {...openSourceProject} />
      <Divider />
      <Footer
        {...footerData}
        socialIcons={footerData.socialIcons}
        links={footerData.links}
      />
    </section>
  );
}

export default App;
