// "use client";

import Image from "next/image";

import Layout from "../components/layout";

import { blogPosts } from "../hooks/useListBlogPosts";

const Subscription = () => {
  return (
    <div className="flex flex-col items-center mx-auto mt-8 mb-20">
      <h3 className="mt-2 text-sm font-semibold leading-6 text-gray-900">
        Subscribe to my newsletter
      </h3>
      <p className="mt-2 text-sm leading-6 text-gray-600">
        My latest articles, updates and resources, sent to your inbox weekly.
      </p>
      <form className="mt-6 sm:flex sm:max-w-md">
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          id="email-address"
          name="email-address"
          type="email"
          required
          placeholder="Enter your email"
          autoComplete="email"
          className="w-full min-w-0 appearance-none rounded-md bg-white px-3 py-1.5 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-200 sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
        />
        <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
          <button
            type="submit"
            className="flex w-full items-center justify-center rounded-md bg-custom-200 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-200/2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-custom-200"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

const BlogList = () => {
  return (
    <div className="px-6 py-22 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto text-center lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From my blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Fresh content to keep you updated on what I&apos;m up to, trends in
            tech and upcoming projects.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-28 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <Image
                  className="rounded"
                  src="/IMG_3919.png"
                  width={40}
                  height={40}
                  alt="My picture"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

const Posts = () => {
  return (
    <main className="flex flex-col items-center justify-between pt-8">
      <Layout>
        <BlogList />
        <Subscription />
      </Layout>
    </main>
  );
};

export default Posts;
