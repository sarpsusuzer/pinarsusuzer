import Image from "next/image";
import { ExperienceItem } from "@/components/experience-item";
import { SkillGroup } from "@/components/skill-chip";

const designSkills = [
  "UX Design",
  "UI Design",
  "Wireframing",
  "Prototyping",
  "Userflows",
  "Timeline Development & Execution",
  "Design Systems Development",
  "End-to-End Product Design",
  "ERP & Custom Solutions",
];

const researchSkills = [
  "User Research",
  "Product Strategy",
  "Market & Competitive Analysis",
  "Benchmarking",
  "Brand Positioning",
];

const leadershipSkills = [
  "Team Leadership",
  "Client Communication",
  "Mentorship",
  "Task Distribution",
  "Cross-functional Collaboration",
  "Strategic Decision-Making in Design",
  "Stakeholder Alignment & Presentations",
  "Conducting Hiring & Interview Processes",
  "One-on-One Mentoring and Private Lessons",
];

const toolSkills = [
  "Figma",
  "Adobe XD",
  "Zeplin",
  "Illustrator",
  "Photoshop",
  "Affinity",
  "Codex",
  "Claude",
  "Asana",
  "Jira",
  "Float",
  "AI Design Tools",
  "Agile & Project Workflow Management",
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-full w-full max-w-[1440px] flex-col items-center gap-6 px-6 pb-12 pt-9 sm:gap-8 sm:px-9 sm:pb-16 sm:pt-[52px] lg:px-[58px] xl:px-[72px]">
      {/* Intro */}
      <section
        aria-label="Introduction"
        className="flex w-full max-w-[1324px] flex-col gap-6 lg:flex-row lg:items-start lg:gap-6"
      >
        {/* Portrait */}
        <div className="card flex w-full shrink-0 flex-col gap-[18px] p-[30px] lg:w-[480px]">
          <div className="relative aspect-[420/460] w-full overflow-hidden rounded-2xl sm:aspect-[636/430] lg:aspect-[420/460]">
            <Image
              src="/images/portrait.png"
              alt="Portrait of Pınar Susüzer"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 420px"
              className="object-cover object-[center_20%]"
            />
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-[36px] font-semibold leading-[51px] text-ink">
              Pınar Susüzer
            </h1>
            <p className="text-[16px] font-normal leading-[23px] tracking-[0.16px] text-ink-soft">
              Senior Digital Product Designer
            </p>
          </div>
        </div>

        {/* About + Links */}
        <div className="flex w-full flex-col gap-6 lg:w-[320px] lg:shrink-0">
          <div className="card flex flex-col gap-[18px] p-[30px]">
            <p className="section-label">About Her</p>
            <div className="grid gap-4 text-[13px] font-light leading-[21px] tracking-[0.65px] text-ink-soft md:grid-cols-2 lg:grid-cols-1">
              <p>
                A seasoned Digital Product Designer with 8+ years of experience,
                I specialize in designing SaaS, B2B, B2C products, apps,
                dashboards, and landing pages, leading both teams and clients
                from concept to delivery while ensuring seamless developer
                handoff.
              </p>
              <p>
                Focus on the product as a whole, creating solutions that balance
                user experience with business objectives. Commitment to continued
                growth in roles contributing to product development, team
                leadership, and strategic decision making.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
            <div className="card flex flex-col gap-[18px] p-[30px]">
              <p className="section-label">Links</p>
              <a
                href="mailto:pinar@susuzer.com"
                className="text-[12px] font-medium leading-[17px] tracking-[0.05px] text-ink"
              >
                pinar@susuzer.com ↗
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] font-medium leading-[17px] tracking-[0.05px] text-ink"
              >
                Linkedin ↗
              </a>
              <a
                href="https://www.behance.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] font-medium leading-[17px] tracking-[0.05px] text-ink"
              >
                Behance ↗
              </a>
            </div>

            {/* Tablet-only: What's Behind Title sits beside Links */}
            <div className="card flex flex-col gap-[18px] p-[30px] lg:hidden">
              <p className="section-label">What&apos;s Behind Title</p>
              <div className="space-y-0 text-[13px] leading-[25px] tracking-[0.16px] text-ink-soft">
                <p>
                  <span className="text-ink-faint">→</span>
                  {"  "}Product Strategy, UX/UI & Design Systems
                </p>
                <p>
                  <span className="text-ink-faint">→</span>
                  {"  "}AI-Enhanced Design
                </p>
                <p>
                  <span className="text-ink-faint">→</span>
                  {"  "}SaaS, Web & Mobile Experiences
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Supporting info */}
        <div className="flex w-full flex-col gap-6 lg:w-[476px] lg:shrink-0">
          <div className="card flex flex-col gap-[18px] p-[30px]">
            <p className="section-label">Now</p>
            <p className="text-[16px] leading-[23px] tracking-[-0.05px] text-ink">
              <span className="font-normal">Senior Product Designer </span>
              <span className="text-ink-faint">→</span>
              <span className="font-medium">{"  "}PRIVON</span>
            </p>
            <p className="text-[12px] leading-[17px] tracking-[0.1px] text-ink-muted">
              Istanbul, Türkiye · Since July 2026
            </p>
          </div>

          <div className="card hidden flex-col gap-[18px] p-[30px] lg:flex">
            <p className="section-label">What&apos;s Behind Title</p>
            <div className="space-y-0 text-[13px] leading-[25px] tracking-[0.16px] text-ink-soft">
              <p>
                <span className="text-ink-faint">→</span>
                {"  "}Product Strategy, UX/UI & Design Systems
              </p>
              <p>
                <span className="text-ink-faint">→</span>
                {"  "}AI-Enhanced Design
              </p>
              <p>
                <span className="text-ink-faint">→</span>
                {"  "}SaaS, Web & Mobile Experiences
              </p>
            </div>
          </div>

          <div className="card flex flex-col gap-[18px] p-[30px]">
            <p className="section-label">That&apos;s What She Said</p>
            <p className="font-[family-name:var(--font-cormorant)] text-[20px] italic leading-[27px] text-ink">
              UX is not a layer added to a product. It is the strategic lens that
              turns complexity into clarity, shapes trust at every decision, and
              helps ambitious products create lasting value.
            </p>
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section
        aria-label="Experiences"
        className="card w-full max-w-[1324px] p-4 sm:p-6 lg:p-8"
      >
        <div className="flex flex-col gap-8 px-2 pb-12 pt-6 sm:px-3 lg:px-5">
          <h2 className="section-title">Experiences</h2>

          <div className="flex flex-col gap-[50px]">
            <ExperienceItem
              title="Senior Product Designer"
              company="PRIVON"
              dates="July 2026 – Present"
              location="Hybrid & Istanbul, Türkiye"
              bullets={[
                "Leading end-to-end product design across PRIVON’s website, web platform, and mobile application, with a focus on creating refined, intuitive experiences that add measurable value to both the product and the business. Responsible for shaping user journeys, product flows, interface design, design systems, and cross-platform consistency across membership, dining, stays, and reservations, while working closely with the development team throughout the entire product delivery process.",
              ]}
            />

            <div className="relative flex flex-col gap-[50px]">
              <div
                className="pointer-events-none absolute left-0 top-5 bottom-5 hidden w-px bg-line lg:block"
                aria-hidden
              />
              <ExperienceItem
                title="Senior Product Designer"
                company="VOYA Digital Design Studio"
                companyHref="https://voya.digital/"
                dates="January 2024 – Present"
                location="Remote & Istanbul, TR"
                showTimeline={false}
                sharedTimeline
                bullets={[
                  "Took on the product management role for Domino’s, Coffy, and ÖdeAl projects, collaborating closely with the brands’ product teams to develop the products, designing their UI and UX, providing direction to our internal design team when needed, and ensuring smooth design handoffs to the development team.",
                  "Owned all decision-making processes related to establishing the design concept, developed a tailored design system, and structured the overall design framework to ensure consistency and scalability.",
                  "Led research and development initiatives to enhance each brand’s market positioning, developed user experience scenarios based on insights, and presented strategic UX solutions to clients.",
                  <>
                    Clients include:{" "}
                    <span className="font-semibold text-ink-soft">
                      Domino’s, Coffy, 360Sağlık, Neova Sigorta, ÖdeAl, Sipay,
                      Hesap, Rezervem and more.
                    </span>
                  </>,
                ]}
              />
              <ExperienceItem
                title="Product Designer"
                dates="July 2022 – January 2024"
                showTimeline={false}
                sharedTimeline
                bullets={[
                  "Collaborated directly with the founder even before the official establishment of the company, taking part in every critical and strategic phase of building the design studio. As part of this startup environment, I took ownership of management-related responsibilities and conducted in-depth research across various operational needs.",
                  "Played an active role in designing SaaS, B2B, and mobile app products, overseeing project workflows and guiding role distribution to ensure smooth execution and quality control.",
                  "Responsible for building and maintaining the design system, creating wireframes, developing UX strategies and research, applying UI designs, prototyping, testing, and handing off final assets to developers.",
                  "Participated in client meetings during design handoff phases, ensuring clear communication and seamless delivery between design and development teams.",
                  <>
                    Clients include:{" "}
                    <span className="font-semibold text-ink-soft">
                      Conexease, Ruuf, Datarul, Hayat Finans, Trive, Burger King
                      Kiosk, TAB Gıda and more.
                    </span>
                  </>,
                ]}
              />
            </div>

            <ExperienceItem
              title="Product Designer"
              company="Puresol ERP"
              companyHref="https://www.puresol.io/"
              dates="May 2020 - July 2022"
              location="Remote & Quebec, CA"
              bullets={[
                "Developed a scalable and flexible ERP framework, delivering tailored UI and UX solutions to address the unique requirements of each client and ensure optimal user experience.",
                "Owned the end-to-end design process for the product as the sole product designer, including user research, UX strategy, wireframing, UI design, prototyping, and usability testing.",
                "Developed and maintained a cohesive design system to ensure visual consistency and scalability across all product interfaces.",
                "Collaborated with stakeholders to align product goals, provided design solutions for business and user needs, and ensured smooth handoff of final assets to the development team.",
              ]}
            />

            <ExperienceItem
              title="UI/UX Designer"
              dates="June 2016 - August 2021"
              location="Freelance"
              bullets={[
                "Participated in brand design and voluntary app design projects alongside interior design studies since my student years.",
                "Created visualized presentations and developed designs at an HTML level for mobile platforms.",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        aria-label="Skills"
        className="card w-full max-w-[1324px] p-4 sm:p-6 lg:p-8"
      >
        <div className="flex flex-col gap-10 px-2 pb-12 pt-6 sm:px-3 lg:px-5">
          <h2 className="section-title">Skills</h2>
          <div className="flex flex-col gap-[37px]">
            <SkillGroup label="Design & Product Skills" skills={designSkills} />
            <SkillGroup label="Research & Strategy" skills={researchSkills} />
            <SkillGroup
              label="Collaboration & Leadership"
              skills={leadershipSkills}
            />
            <SkillGroup label="Tools & Technologies" skills={toolSkills} />
          </div>
        </div>
      </section>

      {/* Education */}
      <section
        aria-label="Education"
        className="card w-full max-w-[1324px] p-4 sm:p-6 lg:p-8"
      >
        <div className="flex flex-col gap-[34px] px-2 pb-12 pt-6 sm:px-3 lg:px-5">
          <h2 className="section-title">Education</h2>

          <div className="text-[13px] leading-[20px] tracking-[0.13px] text-ink-muted">
            <p className="text-edu-ink">
              Istanbul Bilgi University, Istanbul, Turkey
            </p>
            <p>Bachelor of Architecture, bArch, Interior Architecture</p>
            <p>3,41</p>
          </div>

          <div className="flex flex-col gap-6 pt-4">
            <p className="font-[family-name:var(--font-geist-mono)] text-[12px] font-normal uppercase leading-[17px] tracking-[2px] text-ink-faint">
              Certifications
            </p>
            <div className="text-[13px] leading-[20px] tracking-[0.13px] text-ink-muted">
              <p className="text-edu-ink">
                Duolingo - English Proficiency Certificate
              </p>
              <p>April 2022</p>
            </div>
            <div className="text-[13px] leading-[20px] tracking-[0.13px] text-ink-muted">
              <p className="text-edu-ink">
                Üretimhane - Freelance Designer and Branding Training
              </p>
              <p>September 2020</p>
            </div>
            <div className="text-[13px] leading-[20px] tracking-[0.13px] text-ink-muted">
              <p className="text-edu-ink">
                Istanbul Business Institute - Time Management
              </p>
              <p>February 2016</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="pt-2 text-center text-[11.5px] leading-[16px] tracking-[0.14px] text-ink-soft">
        <span>© Pınar Susüzer · </span>
        <span className="font-[family-name:var(--font-geist-mono)] font-light tracking-[7px]">
          2026
        </span>
      </footer>
    </main>
  );
}
