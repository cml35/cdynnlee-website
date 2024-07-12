// import { useQuery } from "@tanstack/react-query";
// import { get } from "../utils";

// const fetchBlogPosts = async () => {
//   const url = `https://medium2.p.rapidapi.com/article/67fa62fc1971`;
//   const result = await get(url);
//   return result;
// };

// export const useListBlogPosts = () =>
//   useQuery({
//     queryKey: ["blog-posts"],
//     queryFn: async () => fetchBlogPosts(),
//   });

export const blogPosts = [
  {
    id: 1,
    title:
      "From the kitchen to the keyboard: What being a chef taught me in my career as a Software Developer 💻",
    href: "https://medium.com/@claudynnlee/from-the-kitchen-to-the-keyboard-what-being-a-chef-taught-me-in-my-career-as-a-software-developer-f141c5305f82",
    description:
      "In this article, I will share with you a few skills I learnt as a Pastry Chef and still use in my career as a Software Developer.",
    date: "May 20, 2024",
    datetime: "2024-05-20",
    category: { title: "Software Development", href: "#" },
    author: {
      name: "Claudynn Lee",
      role: "Software Engineer",
      href: "#",
    },
  },
  {
    id: 2,
    title: "Becoming a better developer; the art of note-taking",
    href: "https://medium.com/@claudynnlee/becoming-a-better-developer-the-art-of-note-taking-77b7907a37ed",
    description:
      "In this article I will be telling you everything you need to know about how to become a better developer, simply by leveraging the power of note-taking. We will cover types of note-taking, the PARA method, note-taking tools, benefits of note-taking and at the end of this article, you can utilise the power of note-taking towards becoming a better developer.",
    date: "December 14, 2023",
    datetime: "2023-12-14",
    category: { title: "Software Development", href: "#" },
    author: {
      name: "Claudynn Lee",
      role: "Software Engineer",
      href: "#",
    },
  },
  {
    id: 3,
    title: "How to be a better writer",
    href: "https://medium.com/@claudynnlee/how-to-be-a-better-writer-4b41ac48351a",
    description:
      "A colleague came up to me recently and said “You’re such a talented writer, your piece was amazing and I loved it.” For one thing I was taken by surprise, having written a few articles and poems I don’t really think of myself as a writer.",
    date: "December 29, 2022",
    datetime: "2022-12-29",
    category: { title: "Software Development", href: "#" },
    author: {
      name: "Claudynn Lee",
      role: "Software Engineer",
      href: "#",
    },
  },
  {
    id: 4,
    title: "4-Day workweek and why everyone should have it ",
    href: "https://medium.com/@claudynnlee/4-day-workweek-and-why-everyone-should-have-it-3047f26549e4",
    description:
      "Imagine yourself having a public holiday every week of the working year. Imagine finally having the time to enjoy things you have always wanted to do. How does that make you feel?",
    date: "December 1, 2022",
    datetime: "2022-12-1",
    category: { title: "Software Development", href: "#" },
    author: {
      name: "Claudynn Lee",
      role: "Software Engineer",
      href: "#",
    },
  },
  {
    id: 5,
    title: "What's it like being queer in Engineering?",
    href: "https://medium.com/@claudynnlee/whats-it-like-being-queer-in-engineering-2573641628f8",
    description:
      "A colleague came up to me recently and said “You’re such a talented writer, your piece was amazing and I loved it.” For one thing I was taken by surprise, having written a few articles and poems I don’t really think of myself as a writer.",
    date: "April 10, 2022",
    datetime: "2022-04-10",
    category: { title: "Software Development", href: "#" },
    author: {
      name: "Claudynn Lee",
      role: "Software Engineer",
      href: "#",
    },
  },
  {
    id: 6,
    title: "3 Reasons why every Software Engineer should work for a start-up",
    href: "https://medium.com/@claudynnlee/3-reasons-why-every-software-engineer-should-work-for-a-start-up-e97487ec20e0",
    description:
      "New Zealand start-ups are breaking into overseas markets bringing unique solutions to the world. With an ecosystem value of over 1.2 billion dollars, the opportunities that come with it are endless.",
    date: "July 20, 2021",
    datetime: "2021-07-20",
    category: { title: "Software Development", href: "#" },
    author: {
      name: "Claudynn Lee",
      role: "Software Engineer",
      href: "#",
    },
  },
];
