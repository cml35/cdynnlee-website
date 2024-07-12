import Layout from "../app/components/layout";

const LinkedInIcon = () => {
  return (
    <a href="https://www.linkedin.com/in/claudynn-lee/">
      <svg
        className="mt-12 h-8 w-8 text-custom-200 hover:text-black"
        viewBox="0 0 24 24"
        fill="none"
        width="24"
        height="24"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        {" "}
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
        <rect x="2" y="9" width="4" height="12" />{" "}
        <circle cx="4" cy="4" r="2" />
      </svg>
    </a>
  );
};

const InstagramIcon = () => {
  return (
    <a href="https://www.instagram.com/claudynn_lee?igsh=YmJuZHp1NmQ5eGh3&utm_source=qr">
      <svg
        className="ml-2 mt-12 h-8 w-8 text-custom-200 hover:text-black"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        {""}
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />{" "}
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />{" "}
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    </a>
  );
};

const GitHubIcon = () => {
  return (
    <a href="https://github.com/cml35">
      <svg
        className="mt-12 ml-2 h-8 w-8 text-custom-200 hover:text-black"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        {" "}
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    </a>
  );
};

const Intro = () => {
  return (
    <div className="px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Bula, I&apos;m Claudynn 🤚 I&apos;m a Software Engineer.
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Born and raised in Fiji. I&apos;m passionate about building software
          that is scalable, maintainable and user-friendly.
        </p>
        <div className="flex flex-col items-center justify-center">
          <p className="transition duration-300 ease-in-out hover:scale-110 w-fit text-left mt-8 text-base font-semibold leading-7 text-custom-200">
            🏋️‍♀️ Gym Junkie
          </p>
          <p className="transition duration-300 ease-in-out hover:scale-110 w-fit text-left mt-1 text-base font-semibold leading-7 text-custom-200">
            🖋️ Amateur Writer
          </p>
          <p className="transition duration-300 ease-in-out hover:scale-110 w-fit text-left mt-1 text-base font-semibold leading-7 text-custom-200">
            🇳🇿 Based in Auckland, NZ
          </p>
          <p className="transition duration-300 ease-in-out hover:scale-110 w-fit text-left mt-1 text-base font-semibold leading-7 text-custom-200">
            🌈 Queer in Tech
          </p>
          <div className="flex flex-row">
            <LinkedInIcon />
            <InstagramIcon />
            <GitHubIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between pt-8">
      <Layout>
        <div className="flex items-center justify-center">
          <Intro />
        </div>
      </Layout>
    </main>
  );
}
