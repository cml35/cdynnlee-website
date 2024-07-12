import Layout from "../components/layout";

import {
  PaperAirplaneIcon,
  AcademicCapIcon,
  PhoneIcon,
  HeartIcon,
  UserIcon,
  HomeIcon,
} from "@heroicons/react/20/solid";

const timeline = [
  {
    id: 1,
    content: "Born and raised in Fiji",
    href: "#",
    date: "Feb 15, 1995",
    datetime: "1995-02-15",
    icon: UserIcon,
    iconBackground: "bg-custom-200",
  },
  {
    id: 2,
    content: "Moved to New Zealand",
    href: "#",
    date: "Nov 20, 2013",
    datetime: "2013-11-20",
    icon: PaperAirplaneIcon,
    iconBackground: "bg-custom-200",
  },
  {
    id: 3,
    content: "Graduated from the University of Waikato",
    href: "#",
    date: "Dec 8, 2018",
    datetime: "2018-12-08",
    icon: AcademicCapIcon,
    iconBackground: "bg-custom-200",
  },
  {
    id: 4,
    content: "Started my first graduate role at ezyVet",
    href: "#",
    date: "Apr 8, 2018",
    datetime: "2018-04-08",
    icon: HeartIcon,
    iconBackground: "bg-custom-200",
  },
  {
    id: 5,
    content: "Moved to the start up world at SpokePhone",
    href: "#",
    date: "Oct 20, 2020",
    datetime: "2020-10-20",
    icon: PhoneIcon,
    iconBackground: "bg-custom-200",
  },
  {
    id: 5,
    content: "Currently at CONQA HQ",
    href: "#",
    date: "Jun 22, 2022",
    datetime: "2022-06-22",
    icon: HomeIcon,
    iconBackground: "bg-custom-200",
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const Timeline = () => {
  return (
    <div className="flow-root mt-32">
      <h2 className="text-center font-bold tracking-tight text-4xl mb-14">
        My Story so far...
      </h2>
      <ul role="list" className="-mb-8">
        {timeline.map((event, eventIdx) => (
          <li key={event.id}>
            <div className="relative pb-8">
              {eventIdx !== timeline.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
                />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span
                    className={classNames(
                      event.iconBackground,
                      "flex h-8 w-8 items-center justify-center rounded-full ring-8 ring-white"
                    )}
                  >
                    <event.icon
                      aria-hidden="true"
                      className="h-5 w-5 text-white"
                    />
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                  <div>
                    <p className="text-sm text-gray-500">{event.content} </p>
                  </div>
                  <div className="whitespace-nowrap text-right text-sm text-gray-500">
                    <time dateTime={event.datetime}>{event.date}</time>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const About = () => {
  return (
    <main className="flex flex-col items-center justify-between pt-8">
      <Layout>
        <Timeline />
      </Layout>
    </main>
  );
};

export default About;
