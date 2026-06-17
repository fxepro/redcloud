export interface Review {
  author: string;
  role?: string; // optional — e.g. "Operations Director" or a city
  rating: number; // 1–5
  text: string;
  when?: string; // optional — e.g. "3 months ago"
}

// Real Google reviews (copy/paste). Add or edit entries here.
export const reviews: Review[] = [
  {
    author: "Sanji Setty",
    rating: 5,
    text: "I highly recommend working with this company! It has been a great experience to learn about all the services Redcloud Systems offers. They provide great value of service with a friendly and professional staff.",
  },
  {
    author: "Clio Soiffer",
    rating: 5,
    text: "Satish was knowledgeable, skilled, and personable in our discussion of our plans for a website audit and redesign. I hope to work with him again in the future and would highly recommend his services.",
  },
  {
    author: "Wes Selken",
    rating: 5,
    text: "I've worked with Satish and he has shown his ability to work hard and diligently to get his project done on time, while meeting or exceeding expectations. I would recommend working with him.",
  },
  {
    author: "Daniela Maldonado",
    rating: 5,
    text: "I love engaging with Redcloud. They are located in downtown, by all the shops and restaurants. They are available to meet and have coffee anytime, to discuss my business.",
  },
  {
    author: "Mike Kilcoyne",
    rating: 5,
    text: "Satish is legit — I've loved working with him on a number of projects (mostly startup related) and he knows his stuff.",
  },
  {
    author: "Steph Hooper",
    rating: 5,
    text: "I have really enjoyed working with Redcloud Systems. They utilize the latest technology and platforms in website development to reach your target market.",
  },
  {
    author: "Giovani Avendano",
    rating: 5,
    text: "Best service and was able to initiate my own domain for my business. I got everything I wanted and getting more customers ever since.",
  },
  {
    author: "Nicole Bernal",
    rating: 5,
    text: "I used their Salesforce consulting expertise. Their background and knowledge is useful to move any company forward.",
  },
  {
    author: "Serenity Goggins",
    rating: 5,
    text: "E-commerce is not easy — Redcloud makes my whole life easier than easy.",
  },
  {
    author: "Isa Barsallo",
    rating: 5,
    text: "Great company to meet all your technology consulting needs. Nice people to work with.",
  },
  {
    author: "Carola Mueller",
    rating: 5,
    text: "Looks like a great up and coming new business! Good luck!",
  },
  {
    author: "Mike T",
    rating: 5,
    text: "Great company to work with if you get the chance!",
  },
];

export const reviewSummary = {
  // Overall rating to show in the heading.
  rating: 5.0,
  // Link to the public Google reviews for this listing.
  url: "https://www.google.com/maps/place/?q=place_id:ChIJT3yoGT1FE4cRkZ21OmfkIco",
};
