
import { motion } from "framer-motion";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";

const workData = [
  {
    dateRange: "2023 - Present",
    duration: "1 year 10 months",
    company: "Innoviksha LLP",
    role: "Software Engineer",
    stack: "React & Web3",
    totalMonths: 22,
  },
  {
    dateRange: "2023",
    duration: "2 months",
    company: "Cogoport Pvt Ltd",
    role: "Software Development Engineer",
    stack: "Ruby on Rails, Python",
    totalMonths: 2,
  },
  {
    dateRange: "2023",
    duration: "5 months",
    company: "Cogoport Pvt Ltd",
    role: "SDE Intern",
    stack: "Ruby on Rails, Python",
    totalMonths: 5,
  },
  {
    dateRange: "2022",
    duration: "1 month",
    company: "Moralis Web3",
    role: "Web3 Frontend Intern",
    stack: "HardHat, ReactJS, TypeScript",
    totalMonths: 1,
  },
];

const Work = () => {
  const totalMonths = workData.reduce((acc, job) => acc + job.totalMonths, 0);
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const totalExperience = `${years} years ${months} months`;

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
              {workData.map((job, index) => (
                <TableRow
                  key={index}
                  className="hover:bg-muted/20 transition-colors"
                >
                  <TableCell className="font-mono text-sm text-muted-foreground w-[180px] align-top py-6">
                    <div>{job.dateRange}</div>
                    <div className="text-xs mt-1">{job.duration}</div>
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
