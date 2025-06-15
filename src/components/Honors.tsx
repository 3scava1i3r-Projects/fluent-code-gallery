
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const internationalHonors = [
  {
    year: '2021',
    name: 'Fellowship Awardee',
    org: 'Ethereum India Fellowship 2.0',
    desc: 'Selected as top 0.5% candidates and awarded fellowship in Track 2.',
  },
  {
    year: '2021',
    name: 'PlutoPepe Winner',
    org: 'DefiSummer Hackathon',
    desc: 'Awarded the NFT Meme Marketplace Prize.',
  },
  {
    year: '2021',
    name: 'Grand Prize Winner',
    org: 'ETHCC Hackathon',
    desc: 'Won the Grand Prize for the Graph Protocol Track.',
  },
  {
    year: '2021',
    name: '2nd Runner Up',
    org: 'Sovrython',
    desc: 'Placed as 2nd Runner Up in the Covalent Track.',
  },
  {
    year: '2020',
    name: 'Wormhole & Community Choice Award',
    org: 'HackAtom V Hackathon',
    desc: 'Received both the Wormhole Award and the Community Choice Award.',
  },
  {
    year: '2020',
    name: 'Popular Vote Winner',
    org: 'Hack-a-Solution Hackathon',
    desc: 'Secured the Popular Vote Winner award.',
  },
  {
    year: '2020',
    name: '2nd Runner Up',
    org: 'Icognito CTF',
    desc: 'Our team was 2nd Runner Up amongst 100+ teams internationally.',
  },
];

const domesticHonors = [
  {
    year: '2022',
    name: 'Top 2.67% Finalist',
    org: 'Flipkart Grid 4.0',
    desc: 'Selected among top 2.67% out of 150,000+ candidates across India.',
  },
  {
    year: '2022',
    name: 'Top 1% Finalist',
    org: 'Uber HackTag 2.0',
    desc: 'Selected among top 1% out of 35,000+ candidates across India.',
  },
  {
    year: '2021',
    name: 'Integration Prize Winner',
    org: 'IOTEX India Hackathon',
    desc: 'Awarded the Integration Prize.',
  },
  {
    year: '2020',
    name: 'Portis & Matic Challenge Winner',
    org: 'Hack Gujarat Hackathon',
    desc: 'Won both the Portis Challenge and the Matic Challenge.',
  },
  {
    year: '2020',
    name: 'Grand Prize Winner',
    org: 'HackoFiesta Hackathon',
    desc: 'Awarded the Grand Prize.',
  },
];


const Honors = () => {
  return (
    <section id="honors" className="container py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl text-center font-display">Awards & Honors</h2>
        <div className="mt-12 max-w-3xl mx-auto space-y-12">
          
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-primary/90 mb-8 font-display">International</h3>
            <div className="space-y-8">
              {internationalHonors.map((honor, index) => (
                <motion.div
                  key={`intl-${index}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-x-6"
                >
                  <div className="p-2 rounded-full bg-accent/20 border border-accent/50">
                    <Award className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground">{honor.year} - {honor.org}</p>
                    <h3 className="text-lg font-bold text-primary mt-1">{honor.name}</h3>
                    <p className="text-muted-foreground mt-1">{honor.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-primary/90 mb-8 font-display">Domestic</h3>
            <div className="space-y-8">
              {domesticHonors.map((honor, index) => (
                <motion.div
                  key={`dom-${index}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-x-6"
                >
                  <div className="p-2 rounded-full bg-accent/20 border border-accent/50">
                    <Award className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground">{honor.year} - {honor.org}</p>
                    <h3 className="text-lg font-bold text-primary mt-1">{honor.name}</h3>
                    <p className="text-muted-foreground mt-1">{honor.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default Honors;
