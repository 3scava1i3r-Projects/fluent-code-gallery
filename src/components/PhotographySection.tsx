// // src/components/PhotographySection.tsx

// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Button } from '@/components/ui/button';
// import { ArrowRight, ArrowLeft } from 'lucide-react';

// // --- STATIC DATA SOURCE (No changes) ---
// const staticPins = [
//   {
//     guid: 'https://in.pinterest.com/pin/678073287685678687/',
//     link: 'https://in.pinterest.com/pin/678073287685678687/',
//     title: 'Escape to the spiritual heart of India! ✨ This breathtaking shot captures the serene beauty of the Golden Temple (Harmandir Sahib) in Amritsar...',
//     imageUrl: 'https://i.pinimg.com/236x/9c/65/1a/9c651a7ccb27e82c8026fa8e6f54dc56.jpg'
//   },
//   {
//     guid: 'https://in.pinterest.com/pin/678073287685678686/',
//     link: 'https://in.pinterest.com/pin/678073287685678686/',
//     title: 'A dreamy afternoon sky that looks like it was painted with strokes of soft clouds. Nature\'s quiet masterpiece...',
//     imageUrl: 'https://i.pinimg.com/236x/60/fc/24/60fc24e7e240e392061f58490a17663a.jpg'
//   },
//   {
//     guid: 'https://in.pinterest.com/pin/678073287685678684/',
//     link: 'https://in.pinterest.com/pin/678073287685678684/',
//     title: 'There\'s nothing quite like the warmth of a crackling bonfire under the glow of a full moon. Perfect for gathering with friends...',
//     imageUrl: 'https://i.pinimg.com/236x/11/29/2e/11292e61a215d5725b8b540a13e5cb56.jpg'
//   },
//   {
//     guid: 'https://in.pinterest.com/pin/678073287685678680/',
//     link: 'https://in.pinterest.com/pin/678073287685678680/',
//     title: 'Pure magic captured in this stunning tropical sunset with palm trees creating perfect silhouettes against the colorful sky...',
//     imageUrl: 'https://i.pinimg.com/236x/9b/58/dd/9b58dd7845688d1ec963913c84780549.jpg'
//   },
//   {
//     guid: 'https://in.pinterest.com/pin/678073287685678672/',
//     link: 'https://in.pinterest.com/pin/678073287685678672/',
//     title: 'Marvel at the stunning gopuram (temple tower) showcasing centuries-old Dravidian architecture! This magnificent structure features intricate stone carvings...',
//     imageUrl: 'https://i.pinimg.com/236x/70/1b/54/701b54e84d989b9ac3d316bc62ce2d64.jpg'
//   },
//   {
//     guid: 'https://in.pinterest.com/pin/678073287685219449/',
//     link: 'https://in.pinterest.com/pin/678073287685219449/',
//     title: 'Discover the art of origami with this beautifully crafted crane! Made from simple paper, this delicate creation showcases the magic...',
//     imageUrl: 'https://i.pinimg.com/236x/b6/e0/e1/b6e0e1b09718c2c6a1aa8e56354f0a6f.jpg'
//   },
//   {
//     guid: 'https://in.pinterest.com/pin/678073287685200295/',
//     link: 'https://in.pinterest.com/pin/678073287685200295/',
//     title: 'Dive into a dreamy, surreal world where the sky transforms into a canvas of vibrant purples and pinks...',
//     imageUrl: 'https://i.pinimg.com/236x/23/9a/75/239a75d1befb4e21c3d7deca7a238a09.jpg'
//   },
//   {
//     guid: 'https://in.pinterest.com/pin/678073287685200276/',
//     link: 'https://in.pinterest.com/pin/678073287685200276/',
//     title: 'Step into a world where serene greenery blends effortlessly with striking urban design. This peaceful cityscape features charming red brick pathways...',
//     imageUrl: 'https://i.pinimg.com/236x/96/fb/c6/96fbc63010f72eaaa2eb1bccad2daa53.jpg'
//   }
// ];


// const TITLE_MAX_LENGTH = 45;
// const ITEMS_PER_PAGE = 4;

// const truncateText = (text: string, maxLength: number): string => {
//   if (text.length <= maxLength) return text;
//   return text.substring(0, maxLength) + '...';
// };

// // --- NEW, MORE DYNAMIC VARIANTS FOR THE GRID ---
// const gridVariants = {
//     // A custom property `direction` will tell us which way to slide
//     enter: (direction: number) => ({
//         x: direction > 0 ? '100%' : '-100%', // Start off-screen to the right or left
//         opacity: 0,
//     }),
//     center: {
//         zIndex: 1,
//         x: 0, // Animate to the center
//         opacity: 1,
//     },
//     exit: (direction: number) => ({
//         zIndex: 0,
//         x: direction < 0 ? '100%' : '-100%', // Animate off-screen to the opposite side
//         opacity: 0,
//     }),
// };

// // Simple variants for the individual photo cards
// const itemVariants = {
//   hidden: { opacity: 0, scale: 0.95 },
//   visible: { opacity: 1, scale: 1 },
// };


// export const PhotographySection = () => {
//   // We now track the page and the direction of pagination
//   const [[page, direction], setPage] = useState([0, 0]);

//   const paginate = (newDirection: number) => {
//     // The page is calculated using the modulo operator to loop correctly
//     const newPage = (page + newDirection + Math.ceil(staticPins.length / ITEMS_PER_PAGE)) % Math.ceil(staticPins.length / ITEMS_PER_PAGE);
//     setPage([newPage, newDirection]);
//   };

//   // Calculate the start and end index for the current page
//   const startIndex = page * ITEMS_PER_PAGE;
//   const endIndex = startIndex + ITEMS_PER_PAGE;
//   const currentPins = staticPins.slice(startIndex, endIndex);

//   return (
//     <section id="photography" className="container py-24 sm:py-32">
//        <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         viewport={{ once: true }}
//       >
//         <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-5xl font-display">
//                 Photography
//             </h2>
//             <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
//                 A collection of moments captured through my lens.
//             </p>
//         </div>
        
//         <div className="flex flex-col items-center gap-8">
//             {/* The AnimatePresence component is key for smooth transitions */}
//             {/* We also add a `relative` and `overflow-hidden` container to contain the sliding animation */}
//             <div className="relative w-full h-auto overflow-hidden">
//                 <AnimatePresence initial={false} custom={direction}>
//                     <motion.div
//                         // Using the page index as a key tells Framer Motion to re-animate when it changes
//                         key={page}
//                         className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full"
//                         custom={direction}
//                         variants={gridVariants}
//                         initial="enter"
//                         animate="center"
//                         exit="exit"
//                         transition={{
//                             x: { type: "spring", stiffness: 300, damping: 30 },
//                             opacity: { duration: 0.2 }
//                         }}
//                     >
//                         {currentPins.map((pin) => (
//                             <motion.a
//                                 key={pin.guid}
//                                 href={pin.link}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="block rounded-lg overflow-hidden relative group"
//                                 variants={itemVariants}
//                                 whileHover={{ scale: 1.03, zIndex: 10 }}
//                                 transition={{ type: 'spring', stiffness: 300 }}
//                             >
//                                 <img 
//                                     src={pin.imageUrl} 
//                                     alt={pin.title} 
//                                     className="w-full h-auto aspect-[3/4] object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out" 
//                                 />
//                                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
//                                     <p className="text-white text-sm font-semibold drop-shadow-md">
//                                         {truncateText(pin.title, TITLE_MAX_LENGTH)}
//                                     </p>
//                                 </div>
//                             </motion.a>
//                         ))}
//                     </motion.div>
//                 </AnimatePresence>
//             </div>

//             {/* The Carousel Navigation Buttons */}
//             <div className="flex items-center gap-4">
//                 <Button
//                     onClick={() => paginate(-1)} // Go back
//                     variant="outline"
//                     className="rounded-full gap-x-2 px-6 font-medium"
//                     aria-label="Previous photos"
//                 >
//                     <ArrowLeft className="h-4 w-4" />
//                     Back
//                 </Button>

//                 <Button
//                     onClick={() => paginate(1)} // Go forward
//                     variant="outline"
//                     className="rounded-full gap-x-2 px-6 font-medium"
//                     aria-label="Next photos"
//                 >
//                     Next
//                     <ArrowRight className="h-4 w-4" />
//                 </Button>
//             </div>
//         </div>
//       </motion.div>
//     </section>
//   );
// };


// src/components/PhotographySection.tsx

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft } from 'lucide-react';

// --- STATIC DATA SOURCE (No changes) ---
const staticPins = [
  {
    guid: 'https://in.pinterest.com/pin/678073287685678687/',
    link: 'https://in.pinterest.com/pin/678073287685678687/',
    title: 'Escape to the spiritual heart of India! ✨ This breathtaking shot captures the serene beauty of the Golden Temple (Harmandir Sahib) in Amritsar...',
    imageUrl: 'https://i.pinimg.com/236x/9c/65/1a/9c651a7ccb27e82c8026fa8e6f54dc56.jpg'
  },
  {
    guid: 'https://in.pinterest.com/pin/678073287685678686/',
    link: 'https://in.pinterest.com/pin/678073287685678686/',
    title: 'A dreamy afternoon sky that looks like it was painted with strokes of soft clouds. Nature\'s quiet masterpiece...',
    imageUrl: 'https://i.pinimg.com/236x/60/fc/24/60fc24e7e240e392061f58490a17663a.jpg'
  },
  {
    guid: 'https://in.pinterest.com/pin/678073287685678684/',
    link: 'https://in.pinterest.com/pin/678073287685678684/',
    title: 'There\'s nothing quite like the warmth of a crackling bonfire under the glow of a full moon. Perfect for gathering with friends...',
    imageUrl: 'https://i.pinimg.com/236x/11/29/2e/11292e61a215d5725b8b540a13e5cb56.jpg'
  },
  {
    guid: 'https://in.pinterest.com/pin/678073287685678680/',
    link: 'https://in.pinterest.com/pin/678073287685678680/',
    title: 'Pure magic captured in this stunning tropical sunset with palm trees creating perfect silhouettes against the colorful sky...',
    imageUrl: 'https://i.pinimg.com/236x/9b/58/dd/9b58dd7845688d1ec963913c84780549.jpg'
  },
  {
    guid: 'https://in.pinterest.com/pin/678073287685678672/',
    link: 'https://in.pinterest.com/pin/678073287685678672/',
    title: 'Marvel at the stunning gopuram (temple tower) showcasing centuries-old Dravidian architecture! This magnificent structure features intricate stone carvings...',
    imageUrl: 'https://i.pinimg.com/236x/70/1b/54/701b54e84d989b9ac3d316bc62ce2d64.jpg'
  },
  {
    guid: 'https://in.pinterest.com/pin/678073287685219449/',
    link: 'https://in.pinterest.com/pin/678073287685219449/',
    title: 'Discover the art of origami with this beautifully crafted crane! Made from simple paper, this delicate creation showcases the magic...',
    imageUrl: 'https://i.pinimg.com/236x/b6/e0/e1/b6e0e1b09718c2c6a1aa8e56354f0a6f.jpg'
  },
  {
    guid: 'https://in.pinterest.com/pin/678073287685200295/',
    link: 'https://in.pinterest.com/pin/678073287685200295/',
    title: 'Dive into a dreamy, surreal world where the sky transforms into a canvas of vibrant purples and pinks...',
    imageUrl: 'https://i.pinimg.com/236x/23/9a/75/239a75d1befb4e21c3d7deca7a238a09.jpg'
  },
  {
    guid: 'https://in.pinterest.com/pin/678073287685200276/',
    link: 'https://in.pinterest.com/pin/678073287685200276/',
    title: 'Step into a world where serene greenery blends effortlessly with striking urban design. This peaceful cityscape features charming red brick pathways...',
    imageUrl: 'https://i.pinimg.com/236x/96/fb/c6/96fbc63010f72eaaa2eb1bccad2daa53.jpg'
  },
    {
    guid: 'https://in.pinterest.com/pin/678073287686238696/',
    link: 'https://in.pinterest.com/pin/678073287686238696/',
    title: 'Escape into tranquility with this sun - drenched street, where lush trees and vibrant blooms transform the city into a peaceful retreat 🌞. Whether you’re taking a mindful stroll, snapping a scenic shot for your Snapchat story, or simply soaking in nature’s beauty, let this urban haven recharge your day. Ideal for summer walks, local adventures, or sharing serene vibes online. Find joy in the everyday and capture moments worth snapping. ✨ #TropicalVibes #StreetPhotography #NatureAesthetic #TravelGoals #UrbanJungle #Snap #Snapchat',
    imageUrl: 'https://i.pinimg.com/236x/e8/ff/2a/e8ff2a61773bc27728f264ad0203cc5d.jpg'
  },
  {
    guid: 'https://in.pinterest.com/pin/678073287686238691/',
    link: 'https://in.pinterest.com/pin/678073287686238691/',
    title: 'Escape to a serene tropical paradise with this charming scene of palm trees, warm sunlight, and a cozy neighborhood vibe. The perfect blend of nature and urban life makes this spot feel like a slice of paradise right in the city! #TropicalVibes #PalmTrees #UrbanNature #SunnyDays #RelaxationSpot #SnapChat #Snap',
    imageUrl: 'https://i.pinimg.com/236x/64/60/a9/6460a96c404c64a8a34e36b07748d8cd.jpg'
  },
  {
    guid: 'https://in.pinterest.com/pin/678073287686238661/',
    link: 'https://in.pinterest.com/pin/678073287686238661/',
    title: 'Discover the beauty of city living with a touch of nature! This serene home, nestled among lush green trees, is the perfect blend of urban architecture and natural tranquility. Whether you love home design, cozy spaces, or city aesthetics, this pin is sure to inspire your next dream home vision. Save it, share it, or snap it for your Snapchat story! Hashtags: #HomeInspiration #UrbanJungle #CityLiving #HouseGoals #NatureLovers #DreamHome #ArchitectureLovers #CozyVibes #Greenery #HomeDecor #AestheticHomes #PinterestFinds #InstaHome #Snap #Snapchat #HomeDesign #TreehouseVibes #ModernLiving #PeacefulPlaces #HomeSweetHome #TrendingNow',
    imageUrl: 'https://i.pinimg.com/236x/8f/ae/da/8faeda52b5976bab57b365417c6b842d.jpg'
  },
  {
    guid: 'https://in.pinterest.com/pin/678073287686238667/',
    link: 'https://in.pinterest.com/pin/678073287686238667/',
    title: 'Description: Talk about finding a hidden gem! 🌿 This tranquil view, blending stunning historical architecture with a peaceful lakeside landscape, is pure travel inspiration. The intricate stonework of this traditional pavilion (chhatri) offers the perfect spot to pause and soak in the serenity. Dreaming of exploring incredible India? Add this vibe to your "Travel Bucket List," "Wanderlust Dreams," or "Beautiful Destinations" boards! Hashtags: #IndiaTravel #Rajasthan #IncredibleIndia #TravelGoals #Wanderlust #BucketList #Aesthetic #TravelPhotography #ArchitectureLovers #HiddenGem #Serenity #VacationMode #Explore #BeautifulDestinations #InstaTravel #History #Culture #PhotoOfTheDay #TravelInspo #Vibes #snap #snapchat',
    imageUrl: 'https://i.pinimg.com/236x/00/d4/5d/00d45dea0721e68245a773178d87a890.jpg'
  },
  {
    guid: 'https://in.pinterest.com/pin/678073287686238669/',
    link: 'https://in.pinterest.com/pin/678073287686238669/',
    title: 'Wander down this quiet country lane and lose yourself in the drama of a lone palm tree stretching toward a brooding sky. The muted greens of the roadside merge with silvery clouds to create a scene that’s equal parts serene and cinematic. Pin this image if you crave moody landscapes, dreamy road-trip vibes, or just a moment of peaceful escape. Hashtags: #palmtrees #cloudyskies #moodygrams #wanderlust #landscapephotography #naturephotography #roadtrip #ruralroads #exploremore #skyporn #earthpix #visualsoflife #adventureseeker #travelgram #outdoorvibes #picoftheday #moodytones #snap #snapchat #instatravel',
    imageUrl: 'https://i.pinimg.com/236x/dc/20/69/dc206984d5e33da40f4b1c612b0d0cde.jpg'
  },
  {
    guid: 'https://in.pinterest.com/pin/678073287686238671/',
    link: 'https://in.pinterest.com/pin/678073287686238671/',
    title: 'Description: Step back in time and peer through this intriguing stone window. Where do you think this secret passage leads? Explore historical mysteries and hidden architectural wonders. Share your thoughts! #HistoricalMystery #AncientArchitecture #TravelSecrets Hashtags: #HistoricalMystery #AncientArchitecture #TravelSecrets #HiddenGems #Explore #Travel #Wanderlust #ArchitecturePhotography #HistoryLovers #AncientHistory #Travelgram #InstaTravel #Discover #AdventureTime #TravelInspiration #Photography #Vintage #snap #snapchat #SecretPlaces',
    imageUrl: 'https://i.pinimg.com/236x/7a/f9/25/7af925aafeb3bd814cc8c1383b6e5c81.jpg'
  },
  {
    guid: 'https://in.pinterest.com/pin/678073287686238681/',
    link: 'https://in.pinterest.com/pin/678073287686238681/',
    title: 'Find peace in simplicity with this calming sky and leafy branch photo. Perfect for anyone who loves minimalism, nature, and tranquil vibes. Let this serene scene inspire your next mood board, phone wallpaper, or creative project. Save it for daily inspiration and a touch of calm in your feed! Hashtags: #Aesthetic #NatureLovers #Minimalism #SkyLovers #Serene #CalmVibes #NaturePhotography #Inspiration #Tranquility #Leafy #BlueSky #Peaceful #OutdoorVibes #PhotoOfTheDay #Snap #Snapchat #Trendy #PinterestFinds #FreshAir #MoodBoard #SimpleBeauty',
    imageUrl: 'https://i.pinimg.com/236x/41/85/28/418528f28e33352831747415078e2e7f.jpg'
  },
  {
    guid: 'https://in.pinterest.com/pin/678073287686238683/',
    link: 'https://in.pinterest.com/pin/678073287686238683/',
    title: 'Capture the calm and mysterious energy of midnight with this moody aesthetic window shot. Perfect for anyone who loves late-night vibes, minimalism, and dreamy inspiration. Let this photo set the tone for your next creative project or mood board. Save it for your aesthetic, photography, or inspiration boards! Hashtags: #Mood #Aesthetic #NightVibes #Midnight #WindowView #Minimalism #Dreamy #Inspiration #Photography #Vibes #Moody #HomeDecor #InteriorDesign #Snap #Snapchat #PhotoOfTheDay #Trendy #ChillVibes #Artistic #PinterestFinds #LateNight',
    imageUrl: 'https://i.pinimg.com/236x/82/53/a6/8253a6fc9c9e84c73b547b524aff9945.jpg'
  }

];
const TITLE_MAX_LENGTH = 45;
const ITEMS_PER_PAGE = 4;

const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

// --- NEW, SUBTLE ANIMATION VARIANTS ---
// A simple fade and slight scale for a gentle cross-fade effect.
const gridVariants = {
    hidden: { 
        opacity: 0, 
        scale: 0.98, // Start slightly smaller
    },
    visible: { 
        opacity: 1, 
        scale: 1,
        transition: {
            duration: 0.4,
            ease: "easeOut",
            staggerChildren: 0.1, // Stagger the appearance of each photo
        },
    },
    exit: { 
        opacity: 0, 
        scale: 0.98, // Fade and shrink out
        transition: { 
            duration: 0.2,
            ease: "easeIn",
        },
    },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 }, // Simple fade and slide-up
  visible: { opacity: 1, y: 0 },
};


export const PhotographySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleBack = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - ITEMS_PER_PAGE;
      if (newIndex < 0) {
        return Math.floor((staticPins.length - 1) / ITEMS_PER_PAGE) * ITEMS_PER_PAGE;
      }
      return newIndex;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + ITEMS_PER_PAGE;
      return newIndex >= staticPins.length ? 0 : newIndex;
    });
  };

  const currentPins = staticPins.slice(currentIndex, currentIndex + ITEMS_PER_PAGE);

  return (
    <section id="photography" className="container py-24 sm:py-32">
       <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-5xl font-display">
                Photography
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                A collection of moments captured through my lens.
            </p>
        </div>
        
        <div className="flex flex-col items-center gap-8">
            <div className="relative w-full">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full"
                        variants={gridVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {currentPins.map((pin) => (
                            <motion.a
                                key={pin.guid}
                                href={pin.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block rounded-lg overflow-hidden relative group"
                                // The individual items now have simpler variants
                                variants={itemVariants} 
                                whileHover={{ scale: 1.03, y: -5, zIndex: 10 }} // Subtle lift on hover
                                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                            >
                                <img 
                                    src={pin.imageUrl} 
                                    alt={pin.title} 
                                    className="w-full h-auto aspect-[3/4] object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                                    <p className="text-white text-sm font-semibold drop-shadow-md">
                                        {truncateText(pin.title, TITLE_MAX_LENGTH)}
                                    </p>
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* The Carousel Navigation Buttons (no changes) */}
            <div className="flex items-center gap-4">
                <Button
                    onClick={handleBack}
                    variant="outline"
                    className="rounded-full gap-x-2 px-6 font-medium"
                    aria-label="Previous photos"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back
                </Button>

                <Button
                    onClick={handleNext}
                    variant="outline"
                    className="rounded-full gap-x-2 px-6 font-medium"
                    aria-label="Next photos"
                >
                    Next
                    <ArrowRight className="h-4 w-4" />
                </Button>
            </div>
        </div>
      </motion.div>
    </section>
  );
};
