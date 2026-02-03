export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  aspectRatio: 'portrait' | 'landscape' | 'square',
  year:string,
  from:string,
  role:string;
}

export const projects: Project[] = [
{
  id: '1',
  title: 'I make a little visualization for myself about bmw',
  category: 'Data Analyst',
  imageUrl:
  'https://i.ibb.co/1t9hnHC5/1.jpg',
  description: `I created a small visualization of BMW cars sold since 1997. 
  This helped me choose the best value car and also determine the price-mileage ratio. 
  After visualizing and working with the data, I realized that for every 10,000 miles, the price decreases by 6-10%. 
  
  I also noted the best-selling car models for each year.`,
  aspectRatio: 'square',
  year:'2025',
  from:'Upwork',
  role:'Data Scraping'
},
{
  id: '2',
  title: 'Data analyst end to end project',
  category: 'Data Analyst',
  imageUrl:
  'https://i.ibb.co/mCFF65FP/2.jpg',
  description: 'I scraped info from udemy and stepik, add it to data base and make report in power BI',
  aspectRatio: 'square',
  year:'2025',
  from:'Upwork',
  role:'Data Scraping'
},
{
  id: '3',
  title: 'Scraper voip.ms',
  category: 'Chrome Extencion',
  imageUrl:
  'https://i.ibb.co/JF72v3wV/Scraping-Visualization-google-extension-1.png',
  description:
  'Scraping sms from voip.ms and get login code from sms',
  aspectRatio: 'square',
  year:'2025',
  from:'Upwork',
  role:'Data Scraping + BackEnd'
},
{
  id: '4',
  title: 'HH data analysis',
  category: 'Data Analyst',
  imageUrl:
  'https://i.ibb.co/SXCK219z/Scraping-Visualization-google-extension-2.png',
  description: 'I scrape data from https://hh.ru/ and make data analys. And also create a datebase ETL',
  aspectRatio: 'landscape',
  year:'2024',
  from:'Upwork',
  role:'Data Analyst + Scraping'
},
{
  id: '5',
  title: 'GEO_QUEST tg bot',
  category: 'Chat Bot Developer',
  imageUrl:
  'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/project_item/attachment/f3082becf0d0153fd79c20e42d17ab3e-1763921001302/2.jpg',
  description: `I created a TG bot for a geo quest 
Functionality:

The bot stores the exact coordinates.
The bot monitors the user and tells them where to go, giving them hints.
When the user reaches a point, they receive a reward and move on to the next point.`,
  aspectRatio: 'portrait',
  year:'2024',
  from:'Upwork',
  role:'Telegram Bot Developer'
},
{
  id: '6',
  title: 'Telegram bot for Online shop',
  category: 'Chat Bot Developer',
  imageUrl:
  'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/project_item/attachment/fcb1bda7d1958b77d555cde8aeb2c423-1763921143482/2.jpg',
  description: 'A Telegram bot for promoting an online store in Romania. It also provides information about product availability.       ',
  aspectRatio: 'landscape',
  year:'2024',
  from:'Kwork',
  role:'Telegram Bot Developer'
},
{
  id: '7',
  title: 'AI profesor tg bot',
  category: 'Chat Bot Developer',
  imageUrl:
  'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/project_item/attachment/043ad1479d8ab215586d2d0ede87c262-1763921331793/2.png',
  description: 'A Telegram bot with AI embedded in it. The teacher allows you to effectively learn new words and remember them better.',
  aspectRatio: 'portrait',
  year:'2024',
  from:'Kwork',
  role:'Telegram Bot Developer'
},
{
  id: '8',
  title: 'Automation create NFT',
  category: 'Automation + Scraping',
  imageUrl:
  'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/project_item/attachment/3bc30e86b06e8d16830f5cfa2c423624-1763922149229/2.jpg',
  description: 'Automatic NFT creation with Sora. Fully automated. Powered by Selenium and request.',
  aspectRatio: 'square',
  year:'2025',
  from:'Upwork',
  role:'Data Automation'
}];