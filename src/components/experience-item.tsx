type ExperienceItemProps = {
  title: string;
  company?: string;
  companyHref?: string;
  dates: string;
  location?: string;
  bullets: React.ReactNode[];
  sharedTimeline?: boolean;
  showTimeline?: boolean;
};

export function ExperienceItem({
  title,
  company,
  companyHref,
  dates,
  location,
  bullets,
  sharedTimeline = false,
  showTimeline = true,
}: ExperienceItemProps) {
  return (
    <article className="relative grid w-full gap-4 lg:grid-cols-[minmax(0,605px)_minmax(0,1fr)] lg:gap-[30px]">
      <div
        className={`relative flex gap-[22px] ${sharedTimeline ? "lg:pl-6" : ""}`}
      >
        {showTimeline && !sharedTimeline ? (
          <div className="timeline-rule hidden self-stretch lg:block" aria-hidden />
        ) : null}
        {sharedTimeline ? (
          <div className="pointer-events-none absolute left-0 top-0 hidden h-full w-px bg-line lg:block" aria-hidden />
        ) : null}
        <div className="flex min-w-0 flex-1 flex-col gap-3 py-1 lg:py-5">
          <h3 className="text-[16px] font-medium leading-[23px] tracking-[-0.05px] text-ink">
            {title}
          </h3>
          <div className="flex flex-col gap-1 text-[12px]">
            {company ? (
              companyHref ? (
                <a
                  href={companyHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium leading-[17px] tracking-[0.05px] text-ink underline decoration-solid underline-offset-2"
                >
                  {company} ↗
                </a>
              ) : (
                <p className="font-medium leading-[17px] tracking-[0.05px] text-ink">
                  {company}
                </p>
              )
            ) : null}
            <p className="leading-[17px] tracking-[0.1px] text-ink-muted">{dates}</p>
            {location ? (
              <p className="leading-[17px] tracking-[0.1px] text-ink-muted">
                {location}
              </p>
            ) : null}
          </div>
        </div>
      </div>
      <div className="min-w-0 lg:py-0">
        <ul className="experience-list">{bullets.map((bullet, i) => (
          <li key={i}>{bullet}</li>
        ))}</ul>
      </div>
    </article>
  );
}
