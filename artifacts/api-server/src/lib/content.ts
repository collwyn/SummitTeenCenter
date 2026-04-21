/**
 * Static content for The Summit Center site.
 *
 * To add a new news post, append an entry to `newsPosts`.
 * To adjust partner tiers or program offerings, edit the corresponding arrays.
 */

export const communityQuotes = [
  {
    id: "terry-t",
    name: "Terry T.",
    neighborhood: "Ashland Falls",
    quote:
      "You need the parents' involvement. A place where they unwind, have fun, do homework, or just get away to talk with an adult. A place to feel safe and be themselves.",
  },
  {
    id: "susan-a",
    name: "Susan A.",
    neighborhood: "Heartland Dr",
    quote:
      "Have local leaders actually hang out with kids doing fun activities. Let kids see they're real people. A basketball game vs. police, politicians shooting pool — that's how you rebuild trust.",
  },
  {
    id: "maria-i",
    name: "Maria I.",
    neighborhood: "Summit Parkway",
    quote:
      "Add Red Cross certifications, babysitting training, resume building, cooking classes, and a driving school partnership.",
  },
  {
    id: "shanice-ascue",
    name: "Shanice Ascue",
    neighborhood: "Trenholm",
    quote:
      "Look into creating a sponsorship tier. Start thinking of fundraising ideas right now. Let SCORE be your best friend.",
  },
  {
    id: "kathleen-monk",
    name: "Kathleen Monk",
    neighborhood: "Lake Carolina",
    quote:
      "We both had youth centers growing up and how GOOD they were. We really wished these would be brought back now so teens would have things to do!",
  },
];

export const newsPosts = [
  {
    id: "the-idea-is-born",
    title: "The Idea Is Born",
    date: "2025-09-12",
    author: "Colin Cleveland",
    excerpt:
      "It started as a single Nextdoor post asking a simple question: what if 29229 had a real place for teens?",
    body: `It started as a single Nextdoor post asking a simple question: what if the 29229 zip code in Columbia, South Carolina had a real place for teens — not a parking lot, not a screen, but a space?

Within days the thread had hundreds of replies. Parents shared what they wished they had growing up. Teachers and coaches volunteered. Local leaders chimed in with offers to mentor, donate equipment, or host events. Neighbors who had never met began organizing.

The Summit Center is a direct response to that conversation. The plan is simple in spirit and ambitious in scope: a building where teens can play, learn, build skills for life, and meet the adults shaping their community. Recreation. Career development. Real connection.

This site is the start of the public chapter. If the idea moved you on Nextdoor, it can move you here too — sign up for updates, volunteer, or send us a suggestion. The center is being built by the community, for the community.`,
  },
];

// Tip for maintainers: add a new post by copying one of the entries above,
// changing the id (must be unique, kebab-case), and putting the newest post
// at the top of the array.

export const partnerTiers = [
  {
    id: "gold",
    tier: "Gold",
    priceRange: "$10,000+ / year",
    description:
      "Founding-level partners whose support makes the building, the equipment, and the staffing possible. Gold partners are recognized as cornerstones of the center.",
    benefits: [
      "Premier logo placement on building signage and website",
      "Named sponsorship of a program or facility space",
      "Featured in all major press and community announcements",
      "Reserved invitations to ribbon-cuttings and donor events",
      "Quarterly impact reports with photos and outcomes",
    ],
    sampleSponsors: ["Your Company Here", "Local Business", "Family Foundation"],
  },
  {
    id: "silver",
    tier: "Silver",
    priceRange: "$2,500 – $9,999 / year",
    description:
      "Silver partners power specific programs — career workshops, certification courses, equipment refreshes, or seasonal events.",
    benefits: [
      "Logo placement on website and program materials",
      "Co-branded recognition on sponsored programs",
      "Invitation to community events and open houses",
      "Annual impact summary",
    ],
    sampleSponsors: ["Your Company Here", "Local Business"],
  },
  {
    id: "bronze",
    tier: "Bronze",
    priceRange: "$500 – $2,499 / year",
    description:
      "Bronze partners help keep the lights on, the snacks stocked, and the small-but-essential things running every day teens walk through the door.",
    benefits: [
      "Listed as a community partner on the website",
      "Recognition on the in-center partner wall",
      "Invitation to the annual community appreciation night",
    ],
    sampleSponsors: ["Your Company Here", "Local Business"],
  },
];

export const programs = [
  {
    id: "recreation",
    name: "Recreation",
    tagline: "A place to show up, play, and just be a teenager.",
    offerings: [
      { title: "Sports", description: "Open gym, leagues, and pick-up games for basketball, volleyball, and more." },
      { title: "Video Gaming Lounge", description: "A monitored, comfortable space with current consoles and tournaments." },
      { title: "Art Studio", description: "Drawing, painting, mixed-media, and digital art with rotating instructors." },
      { title: "Agriculture & Fish/Game Programs", description: "Hands-on outdoor learning — gardens, fishing, and conservation skills." },
      { title: "Pool Table & Ping Pong", description: "Casual hangout games with weekly tournaments and friendly rivalries." },
    ],
  },
  {
    id: "career",
    name: "Career Development",
    tagline: "Real skills, real certifications, real first jobs.",
    offerings: [
      { title: "Trade Skills", description: "Intro courses in HVAC, construction, agriculture, and home improvement." },
      { title: "Entrepreneurship Workshops", description: "Build a small business from idea to launch with mentors who have done it." },
      { title: "Resume Building", description: "Write, edit, and present a real resume that gets interviews." },
      { title: "Red Cross Certifications", description: "CPR, First Aid, and lifeguard certification courses on-site." },
      { title: "Babysitting Training", description: "Safety, child development, and business basics for new sitters." },
      { title: "Cooking Classes", description: "Practical kitchen skills, nutrition basics, and meal planning." },
      { title: "Driving School Partnership", description: "Discounted driver education through a local partner school." },
      { title: "SCORE Mentorship", description: "Free 1-on-1 mentoring from experienced professionals via SCORE." },
      { title: "College Planning", description: "Applications, essays, financial aid, and campus visit guidance." },
    ],
  },
  {
    id: "community",
    name: "Community Involvement",
    tagline: "Where the neighborhood actually shows up.",
    offerings: [
      { title: "Authority Figure Game Nights", description: "Pool, basketball, and ping pong vs. local police, fire, EMT, politicians, USC Athletics, Fort Jackson, and Shaw AFB." },
      { title: "Wildlife & Zoo Visits", description: "Field trips and on-site presentations from Riverbanks Zoo and SC wildlife experts." },
      { title: "Mentor Program", description: "Long-term 1-on-1 mentoring matched by interest and goals." },
      { title: "Referral Resources", description: "Trusted local referrals for counseling, jobs, and education when teens or families need them." },
    ],
  },
];
