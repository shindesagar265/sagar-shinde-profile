import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer, Tooltip } from 'recharts';
import { radarSkills } from '../data/portfolio';

export default function SkillsChart() {
  return (
    <div className="h-[330px] w-full" role="img" aria-label="Expertise radar chart. Cloud 94, Lakehouse 93, Engineering 94, Governance 90, Leadership 90, Generative AI 78.">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={radarSkills} outerRadius="72%">
          <PolarGrid stroke="currentColor" className="text-slate-400/30" />
          <PolarAngleAxis dataKey="subject" tick={{ fill: 'currentColor', fontSize: 12 }} />
          <Tooltip contentStyle={{ background: '#0B1120', border: '1px solid rgba(148,163,184,.25)', borderRadius: 12, color: '#fff' }} />
          <Radar dataKey="value" stroke="#0078D4" fill="#0078D4" fillOpacity={0.34} strokeWidth={2} />
        </RadarChart>
      </ResponsiveContainer>
      <span className="sr-only">Self-assessed proficiency overview; detailed skills are listed beside the chart.</span>
    </div>
  );
}
