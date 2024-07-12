import Layout from "../app/components/layout";

const Intro = () => {
  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Bula, I&apos;m Claudynn 🤚 I&apos;m a Software Engineer.
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Born and raised in Fiji. I&apos;m passionate about building software
          that is scalable, maintainable and user-friendly.
        </p>
        <div className="flex flex-col items-center justify-center">
          <p className="transition duration-300 ease-in-out hover:scale-110 w-fit text-left mt-8 text-base font-semibold leading-7 text-indigo-600">
            🏋️‍♀️ Gym Junkie
          </p>
          <p className="transition duration-300 ease-in-out hover:scale-110 w-fit text-left mt-1 text-base font-semibold leading-7 text-indigo-600">
            🖋️ Amateur Writer
          </p>
          <p className="transition duration-300 ease-in-out hover:scale-110 w-fit text-left mt-1 text-base font-semibold leading-7 text-indigo-600">
            🇳🇿 Based in Auckland, NZ
          </p>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between pt-8">
      <Layout>
        <div className="w-full flex items-center justify-center">
          <Intro />
        </div>
      </Layout>
    </main>
  );
}
