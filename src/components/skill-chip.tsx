export function SkillChip({ children }: { children: React.ReactNode }) {
  return <span className="skill-chip">{children}</span>;
}

export function SkillGroup({
  label,
  skills,
}: {
  label: string;
  skills: string[];
}) {
  return (
    <div className="flex w-full max-w-[812px] flex-col gap-3">
      <p className="font-[family-name:var(--font-geist-mono)] text-[12px] font-normal uppercase leading-[17px] tracking-[2px] text-ink-faint">
        {label}
      </p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillChip key={skill}>{skill}</SkillChip>
        ))}
      </div>
    </div>
  );
}
