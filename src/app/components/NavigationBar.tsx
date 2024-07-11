import { Tab, TabGroup, TabList } from "@headlessui/react";
import Link from "next/link";

const navigationItems = [
  { name: "🏠 Home", key: "home", href: "/" },
  { name: "🙋‍♀️ About me", key: "about", href: "/about" },
  { name: "👩‍💻 Blog Posts", key: "posts", href: "/posts" },
  { name: "📩 Contact me", key: "contact", href: "/contact" },
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
    <div className="flex flex-col justify-center px-4">
      <div className="w-full">
        <TabGroup>
          <TabList className="flex gap-4">
            <Tabs navigationItems={navigationItems} />
          </TabList>
        </TabGroup>
      </div>
    </div>
  );
}
