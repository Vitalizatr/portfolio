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
  'https://upwork-usw2-prod-agora-file-storage.s3.us-west-2.amazonaws.com/profile/portfolio/thumbnail/5016464ddbb7c664792b145174f94448?response-content-disposition=inline%3B%20filename%3D%22image_original%22%3B%20filename%2A%3Dutf-8%27%27image_original&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIE9cb3JHoti1sgs7JSlHFmT8EcUl6cq3SiqNdezHasD3AiEAgG9dMKlexCL5MFwDqNsb9XYZqAgxrFp0ltiZRN9lUJoqmwUI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw3Mzk5MzkxNzM4MTkiDCwlxiFG1mFdVxTOuirvBA9GM7hJb2TmyTW3bsFgeek7cF7pd1QiBgQzl4QkLXnIphWdeNIogtLWnK613i5VYKdsuIO8a%2Bz1gqInxjJKmFEdLEjs7eT2DJxSeRE6v5sG18nKo0ftXRZeWpImFJpMijl2rCMlMprDegvwNNoDrLHNQxyc0HmExtuoqVWcfjx1WW0PBX2qZrah1IEwNxk%2BMW2xQIGtG%2FQhIB2iJHjRiB2KNypvfZNXrN0rUJUbyRNkTDuFjjdsy63vLMjujB6w6Ae61S%2BoPf%2FcdKcNRgIk8WMoESN3ygXdTFxGlgtCVlJ9MHgUmDtGLyoBkZkjCmlcWWaf53rZqYyoH7QMxWkYuiNohSuGHA58K%2BSis7qDIgvaWusW94mIJSSIPpgZyWI0nT0ECTaTAoXliPMsz60JWHgcrkW8FKy3yrX%2BRK1Pvl4Ci4HK6Av4eXCc5tc3e0XkTa0QVR218uC59d7xS5WkvjL%2Ff7WX2XkUlHCoYgpWrx%2BRVnjppnOJE%2BA4hq%2BTtTLp%2Bx5Fh%2Fp7OYryYqIZ1ietciqMvoc23tGunkGww%2FgklV8q74kgmkAwUirMXrsrvqupv0Ja9WYaKjsqHIyV1MZsfv0VfL86HqWe9O%2FMvVlQL4tJC48QcY9b9OnPN7DEX1Wmnk0i4koxLqkez2SCEs1heNpNTwRZqB3oyPPNL3PTyjFN9gyeSuQX5WYpSXB6%2FtqRNA6ZmN%2FWODx2IQgzeKLgvvohSX16TDL0zl2gZk36shkWOkwOXe8wJmuL1WEkyZeSTkwic1CGEWtWSKuY5PTmLHhvYIU%2Bhf3HCgzSxSUlZbc05Ng%2FheWku90IkPUEu%2FUPMLKhhMwGOpkBsQZ6HLLx4pzVwwkdEMq6ixx8lCfg3fFFwSw8HDSudJw3d77u5CRiHwoFhbrRW0iTzlLRtWIqvqsXZOMOSOV%2Fcr%2FgmiwszkAo3XpDzMERS8MiGLwBgS2LufwK0I4Jl%2F7CKmrDWPr7NtZxAr9hu2Z0wANk2XBEdZzKpx%2FdUmss54fEyXGLl7pv%2FhOdl3HMKNJnn%2BtMqPQVhz6A&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20260202T214412Z&X-Amz-SignedHeaders=host&X-Amz-Expires=1799&X-Amz-Credential=ASIA2YR6PYW57ALSVTBN%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=5e48e51956ee32e191e436d1d7ea49c381fecd66b4793ef0ae05a2bd25d4aef1',
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
  'https://upwork-usw2-prod-agora-file-storage.s3.us-west-2.amazonaws.com/profile/portfolio/thumbnail/7501bfddc46eeac1ef283f0324dc4b27?response-content-disposition=inline%3B%20filename%3D%22image_original%22%3B%20filename%2A%3Dutf-8%27%27image_original&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIBAUKQuxo1KWQM3Y06rJXBqljL1UI8ESFAEisf6jdlB5AiEA%2FkAjUJ1z3OmbYMXRK3dax%2F9jvoIWiBM9jkc68SwFJSwqmwUI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw3Mzk5MzkxNzM4MTkiDF7pXTfcTj3kAoDeFyrvBJ4HYPdqHkWUOm%2FFPlPFqnwmu6Ror4Z2TeIokfeJ7%2F6qw%2BDknUuwKUaFIKAhRcXJFHkAwU667iosv8CdiOhSf3rBvUZH%2FGHjsoGDQYi2FquYTWCHFwiMJAKCP4NXCT655Ixeh68O7rbTdcOP3Ifm07ir1A%2FFb24R7Q%2BOt9yLBky8RyGiGSexj2uTXvMkTOt4a%2B16C5cWDYHspsDwiL6eCTxEx0Cx%2FsTjXtrahLk8coRCfEnmT3NUG9XqDcJuMWPrCc%2F2IVWkhY0EG9clc3OeQwEWwGeDOVehEeEaF3Xr20ptiPptztbxXAw%2Byi3Pc%2B2sselfQlGuhqlkxJTbngJm7becP8r94RsD9%2BtLLnZZPh38SdLghXukw%2BvWelXUEQVeFV%2FEzFxKM%2B0K40gH6g8TUJI9FoTcywXWm1okkzpniL8%2BHzVzX8U5O4Pf3Bq6PAIHH%2BEvmIi51E%2FQTMxMpITaE8sH9%2FVxcXQocg7U7PQznCeeZGWR9ezbYbHYQC00PHkMLx4uvkA5%2F2W818JM2hJ%2BIJHWq%2Fni5Re3%2BDbof0XhQfzJoCXjEoZsJhJ8vxe%2F6wTLwFZ0osD96v%2FLjRd3djlXictLnKCls2By3OWLBTywYfUVLIH0K5W9TwBblNDYgq1aeSuNY%2FyGkspZaU6%2BxUv5RHpZAY9gsaXuAYmMSGPGNFBCy2BrnMxZksby2q%2BtlJBGKE3B%2FGLkZbQe8Q1nZ%2FiKjjaNnKXKYfGx3YQxoK%2FISXUZfy0SG0MyQEK%2BPJOVjoLBLkXpvRG6SgXiyqWuOJNeuVqWQTgCzdXcWS3YAO6DU%2FLbGMt5vuhUKK0E52HooX%2FsMMKshMwGOpkBZVWq33n%2BgnegDCNrjCu3KlLCwN1ROK0TE3OXtb0Rd2kU2Epqw6v9I%2BotkFvaR4eQ5s7I0aUKx%2BLmXRVYdfaR5VCXxcCN3JTWrsHFUobWZGAQBGH7idFokGWQJPqbBTnAHQGDnS7dDBSUH7%2BGZBkIGt5r6jEK7wZh1QlLjqLcYDLqTa2OCEcVAYLRYlfoh%2FDmshoUFtZNgKtv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20260202T215459Z&X-Amz-SignedHeaders=host&X-Amz-Expires=1799&X-Amz-Credential=ASIA2YR6PYW54NKBQVWT%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=36dad8de78e37d4573608bc69f9175b4de9b650ec72f44235f1b7908c19b2109',
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
  'https://upwork-usw2-prod-agora-file-storage.s3.us-west-2.amazonaws.com/profile/portfolio/thumbnail/23760d2bc29befa4331be681c0b2e17a?response-content-disposition=inline%3B%20filename%3D%22image_original%22%3B%20filename%2A%3Dutf-8%27%27image_original&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIBAUKQuxo1KWQM3Y06rJXBqljL1UI8ESFAEisf6jdlB5AiEA%2FkAjUJ1z3OmbYMXRK3dax%2F9jvoIWiBM9jkc68SwFJSwqmwUI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw3Mzk5MzkxNzM4MTkiDF7pXTfcTj3kAoDeFyrvBJ4HYPdqHkWUOm%2FFPlPFqnwmu6Ror4Z2TeIokfeJ7%2F6qw%2BDknUuwKUaFIKAhRcXJFHkAwU667iosv8CdiOhSf3rBvUZH%2FGHjsoGDQYi2FquYTWCHFwiMJAKCP4NXCT655Ixeh68O7rbTdcOP3Ifm07ir1A%2FFb24R7Q%2BOt9yLBky8RyGiGSexj2uTXvMkTOt4a%2B16C5cWDYHspsDwiL6eCTxEx0Cx%2FsTjXtrahLk8coRCfEnmT3NUG9XqDcJuMWPrCc%2F2IVWkhY0EG9clc3OeQwEWwGeDOVehEeEaF3Xr20ptiPptztbxXAw%2Byi3Pc%2B2sselfQlGuhqlkxJTbngJm7becP8r94RsD9%2BtLLnZZPh38SdLghXukw%2BvWelXUEQVeFV%2FEzFxKM%2B0K40gH6g8TUJI9FoTcywXWm1okkzpniL8%2BHzVzX8U5O4Pf3Bq6PAIHH%2BEvmIi51E%2FQTMxMpITaE8sH9%2FVxcXQocg7U7PQznCeeZGWR9ezbYbHYQC00PHkMLx4uvkA5%2F2W818JM2hJ%2BIJHWq%2Fni5Re3%2BDbof0XhQfzJoCXjEoZsJhJ8vxe%2F6wTLwFZ0osD96v%2FLjRd3djlXictLnKCls2By3OWLBTywYfUVLIH0K5W9TwBblNDYgq1aeSuNY%2FyGkspZaU6%2BxUv5RHpZAY9gsaXuAYmMSGPGNFBCy2BrnMxZksby2q%2BtlJBGKE3B%2FGLkZbQe8Q1nZ%2FiKjjaNnKXKYfGx3YQxoK%2FISXUZfy0SG0MyQEK%2BPJOVjoLBLkXpvRG6SgXiyqWuOJNeuVqWQTgCzdXcWS3YAO6DU%2FLbGMt5vuhUKK0E52HooX%2FsMMKshMwGOpkBZVWq33n%2BgnegDCNrjCu3KlLCwN1ROK0TE3OXtb0Rd2kU2Epqw6v9I%2BotkFvaR4eQ5s7I0aUKx%2BLmXRVYdfaR5VCXxcCN3JTWrsHFUobWZGAQBGH7idFokGWQJPqbBTnAHQGDnS7dDBSUH7%2BGZBkIGt5r6jEK7wZh1QlLjqLcYDLqTa2OCEcVAYLRYlfoh%2FDmshoUFtZNgKtv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20260202T215837Z&X-Amz-SignedHeaders=host&X-Amz-Expires=1799&X-Amz-Credential=ASIA2YR6PYW54NKBQVWT%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=0420b0dea2857cf3511c06d7a8f6651d5560babed8dafbe23a7be0aae467200b',
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
  'https://upwork-usw2-prod-agora-file-storage.s3.us-west-2.amazonaws.com/profile/portfolio/thumbnail/afdbfb887a3cc838ee2db0d4cc7faf42?response-content-disposition=inline%3B%20filename%3D%22image_original%22%3B%20filename%2A%3Dutf-8%27%27image_original&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCzCufd2m5HquQMvJ3ePH1cmZoAb0HLagbh7EANAp%2FmUwIhAKH9s1ANBFTHBNs4Is%2BnjqaL1p4SsPMhXOyUlUHbGqN5KpsFCO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNzM5OTM5MTczODE5Igy7L9jwuDfiL7JTraAq7wRxeW%2BrEencUJo5WDnUYakFrDs3fZuvt0%2BAh9Pc7hcFKzY%2Bc5i5lkJ2rTzsZylQJRQXjxEUVcm59fYQY4%2FEPJyO97loNNlei5Sv8BAbtxDX%2BVQeJpx6h31UNUK1t%2BPb%2Be%2Bb3udznYVRwDZcUUFW6ccuH29Yo7NKDPwc5pzlkWLqYDbZ9NC%2FgmXkSACGp454XMbi%2FkKwSs6X8x%2B20UIyT1RDXugl89DlxoL2ZCoU79UCwGptz4pABFk%2FXbusRcky9GHFCbmb9xr3jIi5RApevxON021Q9FzcEf8r3LJDOAhHCpbTzV1HlobhLaxK38q5dC9sOy9rzt9sCHTHKi8vRacDAwxcJY1muAE5d9wua%2BYt8tG4eZZ94sh3bxPI0v%2FUg9AHYU4qBJYztz%2BKuyU%2F%2BmlznIrOd2US%2FZbzBC8hp1HGlTWeit2rHNVg12UpaJqefZxMJmtN7n%2FBupV5PLckGHXzeo71Xnc0z52C%2Bl3b9jQT4dSJmua16bYfV1IqZptCcIW5gt%2FQMauXoohlDT8BeJU6WNh7Z%2FdtmNrEe4bqAt9xgC0OlPsfwKbu%2BE5YDAGL75I%2FvT4psWwRfPfIqWzjA8x0SWWQ2D7vFRu5RLTXk7aWzGuba1SqeGo1i%2BeYv6n2NtS4S6kVSunP8aLJWZkw6ypnJN91ovzacBOTfFC%2FrfrvAJbzvHWw4q7Bui%2B59diFu33p%2FOJYoIIQ0GH2OFkejInfrOWtio08b5Cn15NS0lF2ojr%2FbQqCO9i7JD96uL4SZbdwsqB20UAslZKnKkYLvU6sWnCls8sm0oBGJPu1gU5AXy%2Bw0pc4YWkl5dqWQaFlDDD0tITMBjqYAV6Bx1Fxxk731meIpMuRe6HTdccQCOZQIOf3XH%2FCZ4wNYkprjPKf6sYAz9zEywEKPgQ8cjnEATVxHTred0dl9Bj3NEP%2F2JTX5wbTOejzW7tUi3XTcf4f1tWwDskCSifBpJKwyxkismL5X5wM8SZtCJrxkwVx%2FWeSOm5qrlYUTd%2BZOXEhoqG88fsaX%2Fo5iQusQbhwhz7diqvD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20260202T220035Z&X-Amz-SignedHeaders=host&X-Amz-Expires=1799&X-Amz-Credential=ASIA2YR6PYW55CGXLFEM%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=052f0bdd623b27c9e9e906baea6edc7ae7884640de0fdcd9b8fe9c71d3c068a8',
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