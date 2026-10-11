export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-6xl px-6 pt-28 md:pt-32">
      <div className="grid items-end gap-6 md:grid-cols-2">
        <div className="pb-6 md:pb-24">
          <h1 className="font-serif text-4xl font-semibold md:text-6xl">
            <span className="block text-base font-normal text-muted">I'M</span>
            <span className="text-karma">Hadev</span>
          </h1>
          <p className="mt-3 text-lg">In-Training Full-Stack Web Developer</p>
          <p className="mt-3 max-w-md text-muted">
            Learner soon to be a full-stack web developer, mostly interested in fixing bugs and errors.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a href="#portfolio" className="rounded-md bg-karma px-6 py-3 font-medium text-on-karma hover:opacity-90">
              View Portfolio
            </a>
            <a href="#contact" className="rounded-md border border-karma px-6 py-3 font-medium text-karma hover:bg-karma hover:text-on-karma">
              Contact Me
            </a>
          </div>
        </div>

        <div className="relative">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR176gn5pfb7_QjTcOUme-sKUghzXfN7hMUCXii16I71aLW8JvkpCZmzW0&s=10"
            alt="Portrait of Hadev"
            width={480}
            height={560}
            fetchPriority="high"
            className="mx-auto h-auto w-full max-w-md grayscale"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-page to-transparent" />
        </div>
      </div>
    </section>
  );
}