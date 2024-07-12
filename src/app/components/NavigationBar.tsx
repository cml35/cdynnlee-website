"use client";

import { Tab, TabGroup, TabList } from "@headlessui/react";
import Link from "next/link";

import { downloadPDF } from "../utils";

const downloadResume = (e: React.MouseEvent) => {
  e.preventDefault();
  downloadPDF("/Claudynn_Lee_Resume_2024.pdf", "Claudynn_Lee_Resume.pdf");
};

const navigationItems = [
  { name: "🏠 Home", key: "home", href: "/" },
  { name: "🙋‍♀️ About me", key: "about", href: "/about" },
  { name: "👩‍💻 Blog Posts", key: "posts", href: "/posts" },
];

type NavigationItem = {
  key: string;
  href: string;
  name: string;
};

interface TabProps {
  navigationItems: Array<NavigationItem>;
}

const Tabs = (props: TabProps) => {
  const { navigationItems } = props;
  return navigationItems.map(({ key, href, name }) => (
    <Tab
      key={key}
      className="rounded-full py-1 px-3 text-sm/6 font-semibold text-black focus:outline-none data-[hover]:bg-black/5"
    >
      <Link key={key} href={href}>
        {name}
      </Link>
    </Tab>
  ));
};

export default function NavigationBar() {
  return (
    <div className="flex flex-col items-center justify-center bg-custom-100 z-50 h-10 w-full">
      <TabGroup>
        <TabList className="flex gap-4">
          <Tabs navigationItems={navigationItems} />
          <Tab
            key="contact"
            className="rounded-full py-1 px-3 text-sm/6 font-semibold text-black focus:outline-none data-[hover]:bg-black/5"
            onClick={downloadResume}
          >
            📩 Download my resume
          </Tab>
        </TabList>
      </TabGroup>
    </div>
    // </div>
  );
}
