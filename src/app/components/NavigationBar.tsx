import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Link from "next/link";
import classNames from "classnames";

import Home from "../page";
import Posts from "../posts/page";
import About from "../about/page";

const categories = [
  {
    name: "🏠 Home",
    posts: [
      {
        id: 1,
        title: "Does drinking coffee make you smarter?",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
  },
  {
    name: "👩‍💻 About me",
    posts: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
  },
  {
    name: "👩‍💻 Blog Posts",
    posts: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
  },
];

const navigationItems = [
  { name: "🏠 Home", key: "home", href: "/" },
  { name: "👩‍💻 About me", key: "about", href: "/about" },
  { name: "👩‍💻 Blog Posts", key: "posts", href: "/posts" },
];

const renderPage = (key: string) => {
  switch (key) {
    case "home":
      return (
        <div>
          <Link href="/dashboard">Home</Link>
          <Home />
        </div>
      );
    case "about":
      return (
        <div>
          <About />
        </div>
      );
    case "posts":
      return (
        <div>
          <Posts />
        </div>
      );
    default:
      return (
        <div>
          <h1>404 Page</h1>
          <p>This is the 404 page</p>
        </div>
      );
  }
};

const getCurrentTab = (tabType: string) => {
  switch (tabType) {
    case "about":
      return <About />;
    case "posts":
      return <Posts />;
    case "home":
      return <Home />;
    default:
      return <Home />;
  }
};

type NavigationItem = {
  key: string;
  href: string;
  name: string;
};

interface TabProps {
  navigationItems: Array<NavigationItem>;
}

//data-[selected]:bg-black/5
const Tabs = (props: TabProps) => {
  const { navigationItems } = props;
  return navigationItems.map(({ key, href, name }) => (
    <Tab
      key={key}
      className="rounded-full py-1 px-3 text-sm/6 font-semibold text-black focus:outline-none data-[hover]:bg-black/5"
    >
      {/* {({ selected }) => ( */}
      <Link
        //   className={classNames(
        //     selected ? "bg-black/5" : "bg-white",
        //     "rounded-full py-1 px-3 text-sm/6 font-semibold text-black focus:outline-none data-[hover]:bg-black/5"
        //   )}
        key={key}
        href={href}
      >
        {name}
      </Link>
      {/* )} */}
    </Tab>
  ));
};

export default function NavigationBar() {
  return (
    <div className="flex w-full justify-center px-4">
      <div className="w-full max-w-md">
        <TabGroup>
          <TabList className="flex gap-4">
            <Tabs navigationItems={navigationItems} />
          </TabList>
          {/* <TabPanels className="mt-3"> */}
          {/* {navigationItems.map(({ name, key, href }) => (
              //   <TabPanel
              //     key={name}
              //     className="rounded-xl bg-black/5 p-3"
              //   ></TabPanel>
              
            ))} */}
          {/* </TabPanels> */}
        </TabGroup>
      </div>
    </div>
  );
}
