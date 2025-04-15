import {
  BookAIcon,
  Building2Icon,
  Code2Icon,
  IndianRupeeIcon,
  Sparkles,
  User2Icon,
} from "lucide-react";

export const cohortBenefits = {
  heading: "Key Benefits of Cohorts",
  subHeading:
    "Cohorts are best way to learn because you finish the course in a timely manner",
  gridItems: [
    {
      icon: <User2Icon className="h-4 w-4 text-black dark:text-neutral-400" />,
      title: "Taught by Professionals",
      description:
        "Our cohorts are being taught by top industry experts and educators",
    },
    {
      icon: (
        <Building2Icon className="h-4 w-4 text-black dark:text-neutral-400" />
      ),
      title: "Coding hostels",
      description:
        "There is nothing like late night discussion with fellow learners and solving bugs",
    },
    {
      icon: (
        <IndianRupeeIcon className="h-4 w-4 text-black dark:text-neutral-400" />
      ),
      title: "Bounties",
      description:
        "Earn rewards, from Cash to MacBook. Keeps you motivated to work hard",
    },
    {
      icon: <Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />,
      title: "Peer Code Reviews",
      description:
        "With Our internal tools like Masterji, every code assignment gets feedback to improve your code",
    },
    {
      icon: <Code2Icon className="h-4 w-4 text-black dark:text-neutral-400" />,
      title: "Leet Lab",
      description:
        "Our In-hourse built LeetCode style platform that helps you to understand foundation of programming language",
    },
    {
      icon: <BookAIcon className="h-4 w-4 text-black dark:text-neutral-400" />,
      title: "Revision classes",
      description:
        "We have so many peer classes by fellow learners that you get so many chances to learn that topic",
    },
  ],
  alumniNetwork: {
    heading: "Alumni Network and job listings",
    subheading:
      "The alumni Network that you always wished for in your college. We have a dedicated platform where students get to know each other, do projects, make agencies and join Hackathons. Our HR team also post regular job updates that you can apply directly whenever you are ready",
    locations: [
      {
        start: { lat: 64.2008, lng: -149.4937 },
        end: { lat: 34.0522, lng: -118.2437 },
      },
      {
        start: { lat: 64.2008, lng: -149.4937 },
        end: { lat: -15.7975, lng: -47.8919 },
      },
      {
        start: { lat: -15.7975, lng: -47.8919 },
        end: { lat: 38.7223, lng: -9.1393 },
      },
      {
        start: { lat: 51.5074, lng: -0.1278 },
        end: { lat: 28.6139, lng: 77.209 },
      },
      {
        start: { lat: 28.6139, lng: 77.209 },
        end: { lat: 43.1332, lng: 131.9113 },
      },
      {
        start: { lat: 28.6139, lng: 77.209 },
        end: { lat: -1.2921, lng: 36.8219 },
      },
      {
        start: { lat: 28.6139, lng: 77.209 },
        end: { lat: -50.2921, lng: 150.8219 },
      },
    ],
  },
};
