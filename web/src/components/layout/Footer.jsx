import { useStore } from "@/store/useStore";

export default function Footer({ socials }) {
  const setCursorVariant = useStore((state) => state.setCursorVariant);

  return (
    <footer className="relative z-10 mx-auto mt-8 w-full max-w-[1500px] px-4 pb-10 sm:px-6 lg:pl-[20rem] lg:pr-8 xl:pl-[22rem]">
      <div className="p5-ink-card flex flex-col gap-6 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="p5-earwig text-base uppercase text-p5yellow">
            Calling Card Sent
          </p>
          <p className="p5-regular mt-2 text-sm text-white/70">
            Persona 5 inspired interface powered by the current React architecture.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              onMouseEnter={() => setCursorVariant("active")}
              onMouseLeave={() => setCursorVariant("default")}
              className="chip hover:-translate-y-1 hover:bg-p5red hover:text-white"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
