
import { motion } from "framer-motion";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";

// Update the calculateDurationFromStart to accept startMonth
const calculateDurationFromStart = (startYear: number, startMonth: number = 0): { duration: string; totalMonths: number } => {
  const startDate = new Date(startYear, startMonth, 1); // First day of startMonth
  const now = new Date();
  const diffMs = now - startDate;
  const diffMonths = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 30.4375)); // Average month length
  const years = Math.floor(diffMonths / 12);
  const months = diffMonths % 12;
  const duration = years > 0 ? `${years} year${years > 1 ? 's' : ''} ${months} month${months !== 1 ? 's' : ''}` : `${months} month${months !== 1 ? 's' : ''}`;
  return { duration, totalMonths: diffMonths };
};

type Job = {
  startYear: number;
  startMonth?: number; // 0-11 for January-December, optional
  endYear: number | null;
  company: string;
  role: string;
  stack: string;
  duration?: string;
  totalMonths?: number;
};

const workData: Job[] = [
  {
    startYear: 2023,
    startMonth: 7, // August (0=Jan, 1=Feb, ..., 7=Aug)
    endYear: null,
    company: "HIE Agency",
    role: "Software Engineer",
    stack: "React & Web3",
  },
  {
    startYear: 2023,
    endYear: 2023,
    company: "Cogoport Pvt Ltd",
    role: "Software Development Engineer",
    stack: "Ruby on Rails, Python",
    duration: "2 months",
    totalMonths: 2,
  },
  {
    startYear: 2023,
    endYear: 2023,
    company: "Cogoport Pvt Ltd",
    role: "SDE Intern",
    stack: "Ruby on Rails, Python",
    duration: "5 months",
    totalMonths: 5,
  },
  {
    startYear: 2022,
    endYear: 2022,
    company: "Moralis Web3",
    role: "Web3 Frontend Intern",
    stack: "HardHat, ReactJS, TypeScript",
    duration: "1 month",
    totalMonths: 1,
  },
];

const Work = () => {
  // Compute all job data dynamically
  const computedJobs = workData.map((job) => {
    const isPresent = job.endYear === null;
    const { duration, totalMonths } = isPresent
      ? calculateDurationFromStart(job.startYear, job.startMonth || 0)
      : { duration: job.duration!, totalMonths: job.totalMonths! };

    const dateRange = isPresent
      ? `${job.startYear} - Present`
      : job.startYear === job.endYear
      ? `${job.startYear}`
      : `${job.startYear} - ${job.endYear!}`;

    return { ...job, computedDateRange: dateRange, computedDuration: duration, computedTotalMonths: totalMonths };
  });

  const totalMonths = computedJobs.reduce((acc, job) => acc + job.computedTotalMonths, 0);
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const totalExperience = `${years} year${years !== 1 ? 's' : ''} ${months} month${months !== 1 ? 's' : ''}`;

  return (
    <section id="work" className="container py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-5xl font-display mb-12">
          Work
        </h2>

        <div className="rounded-lg border border-border/40">
          <Table>
            <TableBody>
              {computedJobs.map((job, index) => (
                <TableRow
                  key={index}
                  className="hover:bg-muted/20 transition-colors"
                >
                  <TableCell className="font-mono text-sm text-muted-foreground w-[180px] align-top py-6">
                    <div>{job.computedDateRange}</div>
                    <div className="text-xs mt-1">{job.computedDuration}</div>
                  </TableCell>
                  <TableCell className="font-semibold text-base align-middle py-6 w-[250px]">
                    {job.company}
                  </TableCell>
                  <TableCell className="text-left font-mono text-sm align-middle py-6">
                    <span className="text-card-foreground">{job.role}</span>
                    <span className="text-muted-foreground/50 mx-2">|</span>
                    <span className="text-muted-foreground">{job.stack}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="text-right mt-6 font-mono text-sm text-muted-foreground">
          Work experience
          <br />
          <span className="text-base text-card-foreground font-semibold">
            {totalExperience}
          </span>
        </div>
      </motion.div>
    </section>
  );
};
export default Work;
