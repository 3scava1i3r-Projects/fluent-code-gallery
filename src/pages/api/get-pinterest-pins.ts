// // src/pages/api/get-pinterest-pins.ts

// import { NextApiRequest, NextApiResponse } from 'next';
// import { XMLParser } from 'fast-xml-parser';

// // --- CONFIGURATION ---
// const PINTEREST_USERNAME = "0xescav";
// const PINTEREST_BOARD_NAME = "scene";

// const PINTEREST_RSS_URL = `https://www.pinterest.com/${PINTEREST_USERNAME}/${PINTEREST_BOARD_NAME}.rss`;

// export interface PinData {
//   link: string;
//   imageUrl: string;
//   title: string;
//   guid: string;
// }

// const extractImageUrl = (htmlString: string): string => {
//   const match = htmlString.match(/<img src="([^"]+)"/);
//   return match ? match[1] : "";
// };

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== 'GET') {
//     return res.status(405).end('Method Not Allowed');
//   }

//   try {
//     // 1. Fetch the RSS feed directly from Pinterest (Server-to-Server)
//     const response = await fetch(PINTEREST_RSS_URL);
//     if (!response.ok) {
//       throw new Error(`Pinterest server responded with status: ${response.status}`);
//     }
//     const xmlData = await response.text();
    
//     // 2. Parse the XML into JSON
//     const parser = new XMLParser({ ignoreAttributes: true });
//     const jsonData = parser.parse(xmlData);

//     const items = jsonData?.rss?.channel?.item || [];

//     // 3. Transform the data into our clean structure
//     const pins: PinData[] = items.map((item: any) => ({
//       title: item.title,
//       link: item.link,
//       guid: item.guid,
//       imageUrl: extractImageUrl(item.description),
//     })).filter((pin: PinData) => pin.imageUrl);

//     // Set a cache header to tell browsers and Vercel to cache the result
//     res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=59');
    
//     // 4. Send the successful JSON response
//     res.status(200).json(pins);

//   } catch (error) {
//     console.error("Error fetching Pinterest pins:", error);
//     res.status(500).json({ message: "Failed to fetch pins.", error: (error as Error).message });
//   }
// }