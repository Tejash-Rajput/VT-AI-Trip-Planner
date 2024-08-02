import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for 3 days with each day plan with best time to visit in JSON format",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "hotelOptions": [\n    {\n      "hotelName": "The D Las Vegas",\n      "hotelAddress": "301 Fremont Street, Las Vegas, NV 89101",\n      "price": "From $30 per night",\n      "hotelImageUrl": "https://www.thed.com/sites/default/files/styles/featured_home_image/public/images/property-images/d-las-vegas-exterior-night-735x490.jpg",\n      "geoCoordinates": "36.1693,-115.1431",\n      "rating": 4.0,\n      "description": "A budget-friendly hotel located in the heart of Fremont Street Experience, offering a casino, restaurants, and a rooftop pool."\n    },\n    {\n      "hotelName": "Circus Circus Hotel & Casino",\n      "hotelAddress": "2880 Las Vegas Blvd S, Las Vegas, NV 89109",\n      "price": "From $25 per night",\n      "hotelImageUrl": "https://www.circuscircus.com/sites/default/files/styles/featured_home_image/public/images/property-images/circus-circus-hotel-casino-exterior-night-735x490.jpg",\n      "geoCoordinates": "36.1196,-115.1722",\n      "rating": 3.5,\n      "description": "A classic Las Vegas hotel with a circus theme, featuring a casino, arcade, and a variety of dining options."\n    },\n    {\n      "hotelName": "Golden Nugget Hotel & Casino",\n      "hotelAddress": "129 E Fremont St, Las Vegas, NV 89101",\n      "price": "From $40 per night",\n      "hotelImageUrl": "https://www.goldennugget.com/sites/default/files/styles/featured_home_image/public/images/property-images/golden-nugget-las-vegas-exterior-night-735x490.jpg",\n      "geoCoordinates": "36.1672,-115.1421",\n      "rating": 4.5,\n      "description": "A historic hotel with a luxurious atmosphere, featuring a casino, restaurants, and a shark tank."\n    }\n  ],\n  "itinerary": [\n    {\n      "day": 1,\n      "plan": [\n        {\n          "placeName": "Fremont Street Experience",\n          "placeDetails": "A pedestrian mall in downtown Las Vegas with a canopy of lights and free live entertainment.",\n          "placeImageUrl": "https://www.vegasexperience.com/media/images/articles/Fremont_Street_Experience_4.jpg",\n          "geoCoordinates": "36.1687,-115.1429",\n          "ticketPricing": "Free",\n          "rating": 4.5,\n          "timeTravel": "4:00 PM - 8:00 PM"\n        },\n        {\n          "placeName": "The D Las Vegas",\n          "placeDetails": "A budget-friendly casino with a variety of slot machines and table games.",\n          "placeImageUrl": "https://www.thedonlinecasino.com/sites/default/files/styles/featured_home_image/public/images/property-images/golden-gate-las-vegas-exterior-day-735x490.jpg",\n          "geoCoordinates": "36.1693,-115.1431",\n          "ticketPricing": "Free",\n          "rating": 4.0,\n          "timeTravel": "8:00 PM - 10:00 PM"\n        }\n      ]\n    },\n    {\n      "day": 2,\n      "plan": [\n        {\n          "placeName": "The Strip",\n          "placeDetails": "A world-famous boulevard lined with casinos, hotels, restaurants, and attractions.",\n          "placeImageUrl": "https://www.planetware.com/wpimages/2020/02/las-vegas-strip-at-night-illuminated-by-neon-lights-nightlife-entertainment-things-to-do.jpg",\n          "geoCoordinates": "36.1088,-115.1715",\n          "ticketPricing": "Free",\n          "rating": 5.0,\n          "timeTravel": "10:00 AM - 2:00 PM"\n        },\n        {\n          "placeName": "Bellagio Conservatory & Botanical Garden",\n          "placeDetails": "A beautiful indoor garden with stunning floral displays and themed exhibits.",\n          "placeImageUrl": "https://www.bellagio.com/content/dam/bellagio/images/homepage/conservatory/conservatory-main.jpg",\n          "geoCoordinates": "36.1108,-115.1734",\n          "ticketPricing": "Free",\n          "rating": 4.5,\n          "timeTravel": "2:00 PM - 4:00 PM"\n        },\n        {\n          "placeName": "The LINQ Promenade",\n          "placeDetails": "An outdoor shopping and dining district with a Ferris wheel and other attractions.",\n          "placeImageUrl": "https://www.caesars.com/content/dam/caesars-entertainment/images/linq/linq-promenade.jpg",\n          "geoCoordinates": "36.1063,-115.1715",\n          "ticketPricing": "Free",\n          "rating": 4.0,\n          "timeTravel": "4:00 PM - 6:00 PM"\n        }\n      ]\n    },\n    {\n      "day": 3,\n      "plan": [\n        {\n          "placeName": "Red Rock Canyon National Conservation Area",\n          "placeDetails": "A scenic canyon with hiking trails, rock formations, and stunning views.",\n          "placeImageUrl": "https://www.nps.gov/redr/learn/photosmultimedia/red-rock-canyon-national-conservation-area.htm",\n          "geoCoordinates": "36.1737,-115.3454",\n          "ticketPricing": "$7 per vehicle",\n          "rating": 4.5,\n          "timeTravel": "9:00 AM - 12:00 PM"\n        },\n        {\n          "placeName": "Neon Museum",\n          "placeDetails": "A museum showcasing historic neon signs from Las Vegas.",\n          "placeImageUrl": "https://www.neonmuseum.org/sites/default/files/styles/hero_image/public/images/hero_images/2018-11-07_140418_neon-museum-las-vegas-exterior-wide.jpg",\n          "geoCoordinates": "36.1649,-115.1401",\n          "ticketPricing": "$20 per adult",\n          "rating": 4.0,\n          "timeTravel": "1:00 PM - 3:00 PM"\n        },\n        {\n          "placeName": "Downtown Container Park",\n          "placeDetails": "An outdoor shopping and dining district featuring repurposed shipping containers.",\n          "placeImageUrl": "https://www.downtowncontainerpark.com/media/images/about-us/downtown-container-park-las-vegas-exterior-daytime-735x490.jpg",\n          "geoCoordinates": "36.1669,-115.1452",\n          "ticketPricing": "Free",\n          "rating": 4.0,\n          "timeTravel": "3:00 PM - 5:00 PM"\n        }\n      ]\n    }\n  ]\n}\n```',
        },
      ],
    },
  ],
});

// const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
// console.log(result.response.text());
