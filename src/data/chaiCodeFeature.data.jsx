import {
  Code2,
  Fingerprint,
  Gift,
  GiftIcon,
  Heart,
  ImageOffIcon,
  Lightbulb,
  MessageCircleCode,
  User2Icon,
  Users2Icon,
} from "lucide-react";

const CenterCard = () => (
  <div className="flex flex-col gap-4 flex-1 w-full h-full min-h-[6rem] rounded-xl">
    <div className="">
      <img
        src="/hitesh-sir.jpeg"
        alt="hitesh"
        className="w-full h-full rounded-xl object-cover"
      />
    </div>
    <div className="text-start md:text-center">
      <h3 className="text-2xl lg:text-3xl font-semibold tracking-wide">
        Hitesh Choudhary
      </h3>
      <p className="text-xs tracking-wide mt-2 text-gray-300">
        Retired from corporate and full-time YouTuber, ex-founder of LCO
        (acquired), ex-CTO, Sr. Director at PW. 2 YT channels (958k & 470k),
        stepped into 43 countries
      </p>
    </div>
    <div className="text-start md:text-center">
      <h3 className="text-md font-bold">Approach</h3>
      <p className="text-xs mt-2 text-gray-300">
        Project based courses with peer learning and bounties with many
        activities
      </p>
    </div>
  </div>
);

export const chaiCodeFeatureSection = {
  heading: "But Why ChaiCode ?",
  subheading: "ChaiCode exists because we love tech and teaching",
  cta: {
    text: "Join Cohorts Live Classes",
    link: "https://courses.chaicode.com/learn/view-all?show=batch&type=17",
    target: "_blank",
  },
  items: [
    {
      title: "Comprehensive Curriculum",
      description:
        "Master key concepts and hands-on skills with clarity and confidence. We carefully map out the right way: thorough, practical, and easy to understand.",
      icon: <Lightbulb />,
    },
    {
      header: <CenterCard />,
      className: "order-first md:order-0",
      // icon: <Heart />,
    },
    {
      title: "You finish it",
      description:
        "Our cohorts are a collaborative journey. Students learn together, stay motivated, and complete the course on time as a community.",
      icon: <Fingerprint />,
    },
    {
      title: "Industry Guests",
      description:
        "We’re connected with industry experts and regularly bring them into our classes for engaging, fun, and insightful sessions with students",
      icon: <Users2Icon />,
    },
    {
      title: "Code and Chill",
      description:
        "Coding should be fun, not frightening. It might feel tough at first, but with time and practice, everything starts to click and fall into place.",
      icon: <Code2 />,
    },
    {
      title: "Improve Communication",
      description:
        "One of the best ways to boost communication skills is through practice. Our peer classes make it happen where co-learners teach, share, and grow together.",
      icon: <MessageCircleCode />,
    },
    {
      title: "Bounties",
      description:
        "Every cohort comes with exciting cash prizes and some even feature a MacBook giveaway! It’s our way of keeping the motivation high and the learning fun.",
      icon: <Gift />,
    },
  ],
};
