import type { ReactNode } from "react";

import zohranLogo from "../assets/zohran_logo.png";
import summerLogo from "../assets/logo_summer.png";
import peltolaLogo from "../assets/logo_peltola.png";
import alaskaLogo from "../assets/ak_dems.png";
import kansasLogo from "../assets/logo_kansas.png";
import venturaLogo from "../assets/logo_ventura.png";
import mcDuffieLogo from "../assets/logo_mcduffie.png";
import donavanLogo from "../assets/donavan_mckinney_logo.webp";
import willLawrenceLogo from "../assets/wl_logo_teal.avif";
import abdulLogo from "../assets/abdul_for_us_senate.png";
import rabbLogo from "../assets/Chris Rabb (100)_20260314195307242104.png";
import mejiaLogo from "../assets/mejia_mejia_nj11_edit.png";
import claireValdezLogo from "../assets/claire_valdez.svg";
import mississippiDemsLogo from "../assets/mississippi_dems.png";
import deliaRamirezLogo from "../assets/delia_ramirez_logo.png";

export const BOOKING_URL = "https://calendar.app.google/Ji4vUvhSFwXnK1bYA";
export const bookingHref = BOOKING_URL;

const maryInstagramPhoto = "https://scontent-sjc3-1.cdninstagram.com/v/t51.2885-19/324702073_179364854715274_2861100934901912353_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_cat=110&_nc_oc=Q6cZ2gE9FWK0byBmezmWiUbdG3OAvyTs5Ox-qhnHionB9uwDSAd5DML1jMpmB-gWLC8ZGvk&_nc_ohc=l3JkA3uzXo0Q7kNvwE8T2NN&_nc_gid=1WCCwAXQ6BwhDtZ8w2dViw&edm=APoiHPcBAAAA&ccb=7-5&oh=00_AQHiDpRLLGnBz4xz5WoQt3vQcBy3k6OFgxLQHjxq-uMbDg&oe=6A84A50E&_nc_sid=22de04";

const instagramEmbed = (url: string, width = 1800) =>
  `https://wsrv.nl/?url=${encodeURIComponent(url)}&w=${width}&output=jpg&q=90`;

export const socialPhotos = {
  zohran: {
    src: instagramEmbed("https://scontent-sjc6-1.cdninstagram.com/v/t51.82787-15/587652661_18375037447159156_7487218866039526445_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=100&ig_cache_key=Mzc3MzAxMDk2NzI2NjIwMTU0NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTI4Mi5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=gsb1dlzhXaIQ7kNvwHWr4ax&_nc_oc=AdoZhQcUUR_Zw-s8JkH9TZFDJs3WyUkyB7WGDLO2gNthhiYlb3_0_7naPLeAfUkodE4&_nc_zt=23&_nc_ht=scontent-sjc6-1.cdninstagram.com&_nc_gid=4OHog0aEs5CD9IqQ9moZqA&_nc_ss=7b689&oh=00_AQGjihQzEP3QT_xgr-zcNquHNiv-E7rR7MV0zxPYC0ab5A&oe=6A849DF8"),
    sourceUrl: "https://www.instagram.com/p/DRcbX2NDgY5/?img_index=1",
  },
  summer: {
    src: instagramEmbed("https://scontent-sjc3-1.cdninstagram.com/v/t51.82787-15/653605447_18096843911286802_7278197464377044929_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ig_cache_key=MzQ3MDgyMDg3MjE4NzQ0MzUxNQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTE1Ni5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=eXhTHxtJ_ZMQ7kNvwFf1QJW&_nc_oc=AdoASuU-ey3MLEK1ikDU_qjuqiW_IUk8mzG_36H6gj6gIMizvlkT2PWAaHpNvr1Ujkg&_nc_zt=23&_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_gid=OPfJrwSKokZjjMgvaCTnPQ&_nc_ss=7b689&oh=00_AQEHn1OYdasYBnIoFVx8PBW_sjgHHfV5kI5VORo22Ly3JQ&oe=6A84B723"),
    sourceUrl: "https://www.instagram.com/p/DAq1TMAP6W1/?img_index=2",
  },
  mary: {
    src: instagramEmbed(maryInstagramPhoto, 1080),
    sourceUrl: maryInstagramPhoto,
  },
  abdul: {
    src: "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:lrlmw63dqlhqacs6pbu6ffzn/bafkreifznuasyjg5ips6pwjntj5ngbmb6zki5fypejx7n4fayd5fjnrkdi",
    sourceUrl: "https://bsky.app/profile/abdulelsayed.bsky.social/post/3msvzw6bryc25",
  },
  donavan: {
    src: "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:iudgz7lu72zoxux4msbghgxh/bafkreifhzrif2l5szjh7c66gd2olpnmhfvivsnssdwzt46tc3caai7y6my",
    sourceUrl: "https://bsky.app/profile/donavanmckinney.bsky.social/post/3mp765tk4xc2l",
  },
  will: {
    src: instagramEmbed("https://scontent-sjc6-1.cdninstagram.com/v/t51.82787-15/768144170_18210423910348332_687791260530918853_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=101&ig_cache_key=Mzk1ODYxOTk0MjI5NTQ1MTA0NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMjcyNi5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=FyCWX0yoJCIQ7kNvwFszDXV&_nc_oc=AdpXgTg9SfM7OHM76rHJRGGb_cKRHD46ALHzNjrnyOflG4LPhszZeY0jMD-MtZK1-fk&_nc_zt=23&_nc_ht=scontent-sjc6-1.cdninstagram.com&_nc_gid=pgsLtA9ZjSZfGS4Hk17eKw&_nc_ss=7b689&oh=00_AQFezhlgAIUN88UEhYXE8pLsdXnX24iL2MH-xCahI9Zgug&oe=6A84B1E8"),
    sourceUrl: "https://www.instagram.com/p/Dbv2DErllCU/?img_index=1",
  },
  analilia: {
    src: instagramEmbed("https://scontent-sjc6-1.cdninstagram.com/v/t51.82787-15/683435722_17866148580619093_751786134998795413_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=101&ig_cache_key=Mzg4NzgzNjcwMjQwNDY5OTk1Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=tI8uEVRuZxkQ7kNvwFXbRkn&_nc_oc=AdrOVZF5WA6soIPyDNzJogcvZIpOEWJ0AMVF0Wq5XBymAFf-70kPD0SwGxFfhWY8jX0&_nc_zt=23&_nc_ht=scontent-sjc6-1.cdninstagram.com&_nc_gid=tycPaxyuuNGK8Y59j9K_1w&_nc_ss=7b689&oh=00_AQFYN3ISXcr0g0mjhIVzLfRkaHE4OwU7Jl6gV3VV7yLJXw&oe=6A84CEE1"),
    sourceUrl: "https://www.instagram.com/p/DX0XuHXjucw/",
  },
  rachel: {
    src: "https://pbs.twimg.com/media/GcS0gXfXkAAkx9y?format=jpg&name=large",
    sourceUrl: "https://x.com/SenatorVentura/status/1856807434674659643",
  },
  kenyan: {
    src: "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:6urt4yvdu237s7wopneik43f/bafkreif7b7ieshq5udoznameeyjpvh35757c3fn5sqyhh4d7z5oo5m5g4i",
    sourceUrl: "https://bsky.app/profile/kenyanmcduffie.bsky.social/post/3mjq6ih2eyx2x",
  },
} as const;

export type Metric = {
  value: string;
  label: string;
};

export type Tactic = {
  title: string;
  description: string;
};

export type CaseStudy = {
  slug: string;
  name: string;
  shortName: string;
  service: string;
  year: string;
  headline: string;
  summary: string;
  seoDescription: string;
  image: string;
  imageAlt: string;
  imageSourceUrl?: string;
  imagePosition?: string;
  logo: string;
  imageFit?: "cover" | "contain";
  cardImage?: string;
  cardImageAlt?: string;
  cardImageFit?: "cover" | "contain";
  tone: "cyan" | "coral" | "lime" | "gold";
  featured?: boolean;
  metrics: Metric[];
  challenge: ReactNode;
  approachIntro: string;
  tactics: Tactic[];
  outcome: ReactNode;
  publicSources?: { label: string; href: string }[];
};

const caseStudyRecords: CaseStudy[] = [
  {
    slug: "summer-lee-2024",
    name: "U.S. Representative Summer Lee",
    shortName: "Summer Lee",
    service: "Fundraising + digital",
    year: "2024",
    headline: "From an $89,989 quarter to a $1.02 million quarter.",
    summary:
      "How a disciplined finance program grew receipts from $89,989 in Q2 2023 to $1.02 million in Q4, followed by about $920,000 from January 1 through April 3, 2024.",
    seoDescription:
      "How Representative Summer Lee's campaign grew from $89,989 in Q2 2023 to $1.02 million in Q4, then raised about $920,000 from January 1 through April 3, 2024.",
    image: socialPhotos.summer.src,
    imageAlt: "Representative Summer Lee speaking with nurses and healthcare workers at a campaign rally",
    imageSourceUrl: socialPhotos.summer.sourceUrl,
    imagePosition: "center 42%",
    logo: summerLogo,
    tone: "cyan",
    metrics: [
      { value: "$89,989", label: "reported in Q2 2023" },
      { value: "$1.02M", label: "reported in Q4 2023" },
      { value: "~$920K", label: "reported Jan. 1-Apr. 3, 2024" },
    ],
    challenge: (
      <>
        Representative Lee&apos;s campaign reported $89,989 in Q2 2023. That result fed a public narrative that she was vulnerable to a well-funded primary challenge and left the campaign without the financial firewall it needed.
      </>
    ),
    approachIntro:
      "NWF took responsibility for the full finance operation and moved the campaign from a reactive posture to a high-tempo, integrated program.",
    tactics: [
      {
        title: "Build a serious event calendar",
        description:
          "A rigorous candidate schedule—with one to two fundraising trips most weekends—created more productive moments with supporters inside and outside the district.",
      },
      {
        title: "Rebuild the digital engine",
        description:
          "We overhauled email and SMS infrastructure, improved segmentation, and increased conversion without exhausting the campaign's list.",
      },
      {
        title: "Root the story locally",
        description:
          "Community-based events paired major fundraising totals with visible, tangible support in the district.",
      },
    ],
    outcome: (
      <>
        The revamped operation reported $1.02 million in Q4 2023 and about $920,000 from January 1 through April 3, 2024. A perceived liability became an unmistakable show of strength.
      </>
    ),
  },
  {
    slug: "analilia-mejia-2026",
    name: "U.S. Representative Analilia Mejia",
    shortName: "Analilia Mejia",
    service: "Digital fundraising",
    year: "2026",
    headline: "$400K raised. Zero dollars spent acquiring a list.",
    summary:
      "$400K+ raised through digital in five months—with zero list acquisition and zero list edits. Pure execution on the existing universe.",
    seoDescription:
      "How NWF Strategies built Analilia Mejia's digital fundraising program from scratch and raised more than $400,000 in five months without list acquisition or list edits.",
    image: socialPhotos.analilia.src,
    imageAlt: "Analilia Mejia addressing workers and immigrant-rights organizers at a New Jersey rally",
    imageSourceUrl: socialPhotos.analilia.sourceUrl,
    imagePosition: "center 46%",
    logo: mejiaLogo,
    tone: "coral",
    featured: true,
    metrics: [
      { value: "$400K+", label: "raised via digital in 5 months" },
      { value: "5 mo", label: "total program duration" },
      { value: "$0", label: "spent on list acquisition or editing" },
      { value: "2-for-2", label: "special primary and general" },
    ],
    challenge: (
      <>
        Analilia Mejia entered the 2026 NJ-11 special election as a progressive insurgent in a crowded 13-way Democratic primary to replace Governor-elect Mikie Sherrill. Her labor and Working Families organizing background—including a national role on Bernie Sanders&apos;s 2020 campaign—gave her strong grassroots credibility, but no congressional fundraising apparatus. With a compressed February 5 primary and April 16 general, the digital program had to be built and producing immediately.
      </>
    ),
    approachIntro:
      "NWF built and ran the campaign's digital fundraising operation end to end, then used disciplined content, cadence, segmentation, and testing to drive more value from the universe already in place.",
    tactics: [
      {
        title: "Build the program from scratch",
        description:
          "NWF owned copywriting, design, deliverability, deployment, segmentation logic, and reporting from day one.",
      },
      {
        title: "Work the existing universe",
        description:
          "There was no list acquisition, scrubbing, or editing. Every result came from better content, cadence, segmentation, and ask discipline.",
      },
      {
        title: "Run email and SMS together",
        description:
          "Coordinated sends tracked news cycles, debates, endorsements from Warren, EMILYs List, and WFP, plus FEC deadlines.",
      },
      {
        title: "Optimize through both elections",
        description:
          "Continuous testing of subject lines, body copy, and ask amounts refined every send through the primary and general-election wins.",
      },
    ],
    outcome: (
      <>
        The program raised more than $400,000 in five months without spending a dollar on list acquisition or changing the base list. That pure execution helped take Mejia from insurgent in a 13-way special primary to a two-for-two winner and U.S. Representative.
      </>
    ),
  },
  {
    slug: "mary-peltola-2022",
    name: "Former U.S. Representative Mary Peltola",
    shortName: "Mary Peltola",
    service: "Data + voter contact",
    year: "2022",
    headline: "Precision data for a history-making upset.",
    summary:
      "How targeting, rapid voter contact, and real-time modeling supported Alaska's first Democratic House win in roughly 50 years.",
    seoDescription:
      "How NWF Strategies used voter targeting, turnout modeling, and rapid-response calls to support Mary Peltola's 2022 special-election victory, Alaska's first Democratic House win in roughly 50 years.",
    image: socialPhotos.mary.src,
    imageAlt: "Mary Peltola in an official outdoor portrait",
    imageSourceUrl: socialPhotos.mary.sourceUrl,
    imagePosition: "center 8%",
    logo: peltolaLogo,
    tone: "lime",
    metrics: [
      { value: "40K", label: "calls made in two weeks" },
      { value: "0.3%", label: "turnout projection error" },
      { value: "200+", label: "targeting universes" },
    ],
    challenge: (
      <>
        One month before Alaska&apos;s at-large special election, NWF joined a campaign navigating a historically Republican electorate and the state&apos;s first ranked-choice federal election. The team needed to mobilize quickly, teach voters a new ballot system, and make every contact count across an enormous state.
      </>
    ),
    approachIntro:
      "We combined field strategy with live data systems so targeting, scripts, and resource decisions could improve throughout the final weeks.",
    tactics: [
      {
        title: "Teach the ballot",
        description:
          "Ranked-choice education was embedded into outreach so supporters understood how to cast a valid ballot and continue through later rounds.",
      },
      {
        title: "Branch the message",
        description:
          "Scripts changed by audience and issue, helping volunteers meet voters with a message relevant to their priorities.",
      },
      {
        title: "Model in real time",
        description:
          "Turnout projections, sentiment signals, and live dashboards guided more than 200 ad universes and helped reverse an early-vote deficit in Juneau.",
      },
    ],
    outcome: (
      <>
        NWF&apos;s fellowship program delivered 40,000 calls in two weeks—half of the campaign&apos;s total. Turnout modeling finished within 0.3% of the final result, targeting increased participation among low-propensity voters by 27%, and refined messages improved conversion among Republican and swing voters by 15%.
      </>
    ),
  },
  {
    slug: "alaska-democratic-party-2024",
    name: "Alaska Democratic Party",
    shortName: "Alaska Democrats",
    service: "Independent expenditure + data",
    year: "2024",
    headline: "The only legislative chamber flip of 2024.",
    summary:
      "How a compliant, data-driven independent-expenditure program helped flip Alaska's State House to a Democratic-led coalition.",
    seoDescription:
      "How NWF Strategies helped the Alaska Democratic Party flip the State House in 2024 with compliant independent-expenditure strategy and precision targeting.",
    image: alaskaLogo,
    imageAlt: "Alaska Democratic Party logo",
    logo: alaskaLogo,
    imageFit: "contain",
    tone: "gold",
    metrics: [
      { value: "1", label: "legislative chamber flipped nationally" },
      { value: "60+", label: "targeting universes" },
      { value: "27%", label: "turnout lift in key districts" },
    ],
    challenge: (
      <>
        The party wanted to scale the successful targeting frameworks developed in Alaska while maintaining strict legal separation between candidates and independent expenditures. The program also had to adapt to the state&apos;s geographic and demographic complexity across multiple competitive districts.
      </>
    ),
    approachIntro:
      "NWF built a coordinated digital independent-expenditure program with compliance, precision targeting, and live optimization designed in from the start.",
    tactics: [
      {
        title: "Create a real firewall",
        description:
          "Clear internal protocols kept candidate and party operations separate while allowing public targeting frameworks to inform compliant voter universes.",
      },
      {
        title: "Localize the universe",
        description:
          "More than 60 district-specific audiences reflected local issues, demographics, geography, and turnout opportunity.",
      },
      {
        title: "Optimize across channels",
        description:
          "Digital, direct mail, and rapid response were coordinated around consistent messages and real-time performance signals.",
      },
    ],
    outcome: (
      <>
        The State Senate remained in Democratic-led coalition control and the State House flipped—the only legislative chamber in the country to move from Republican to Democratic control in 2024. Turnout in key districts increased by 27%.
      </>
    ),
  },
  {
    slug: "kansas-democratic-party-2024",
    name: "Kansas Democratic Party",
    shortName: "Kansas Democrats",
    service: "Operations + technology",
    year: "2024",
    headline: "A statewide support system built to move at campaign speed.",
    summary:
      "How automated intake, a central resource hub, and rapid support modernized the candidate experience statewide.",
    seoDescription:
      "How NWF Strategies modernized Kansas Democratic Party candidate support with automated onboarding, a centralized resource center, and 15-minute response times.",
    image: kansasLogo,
    imageAlt: "Kansas Democratic Party logo",
    logo: kansasLogo,
    imageFit: "contain",
    tone: "coral",
    metrics: [
      { value: "90%", label: "faster candidate onboarding" },
      { value: "100+", label: "candidates served" },
      { value: "15 min", label: "support response standard" },
    ],
    challenge: (
      <>
        Candidate interest was outgrowing the party&apos;s support infrastructure. Slow handoffs and scattered resources created friction at exactly the moment first-time candidates needed clarity, credentials, compliance materials, and practical guidance.
      </>
    ),
    approachIntro:
      "NWF turned a fragmented process into a single digital ecosystem for candidate intake, training, resources, and rapid-response support.",
    tactics: [
      {
        title: "Automate the first mile",
        description:
          "Candidates could immediately access training, receive VoteBuilder credentials, and complete compliance documentation through a consistent intake flow.",
      },
      {
        title: "Put answers in one place",
        description:
          "The state's first centralized campaign resource center combined guides, editable templates, and an interactive video library.",
      },
      {
        title: "Guarantee a fast response",
        description:
          "A 15-minute support standard, backed by always-available systems, kept candidates moving when questions surfaced.",
      },
    ],
    outcome: (
      <>
        Automated onboarding cut processing time by 90%, the resource library supported more than 100 candidates at every level of office, and the rapid-support system maintained a 15-minute response time—creating a durable foundation for statewide organizing.
      </>
    ),
  },
  {
    slug: "rachel-ventura-2022",
    name: "Illinois State Senator Rachel Ventura",
    shortName: "Rachel Ventura",
    service: "Voter contact + data",
    year: "2022",
    headline: "A 15-point win against the entire establishment.",
    summary:
      "How a data-first outreach program overwhelmed a 65-to-1 fundraising disadvantage and an appointed incumbent.",
    seoDescription:
      "How NWF Strategies helped Rachel Ventura overcome a 65-to-1 fundraising disadvantage and win an Illinois State Senate primary by 15 points.",
    image: socialPhotos.rachel.src,
    imageAlt: "Rachel Ventura visiting the Art Institute of Chicago",
    imageSourceUrl: socialPhotos.rachel.sourceUrl,
    imagePosition: "center 40%",
    logo: venturaLogo,
    cardImage: venturaLogo,
    cardImageAlt: "Rachel Ventura campaign logo",
    cardImageFit: "contain",
    tone: "lime",
    metrics: [
      { value: "65:1", label: "opponent fundraising advantage" },
      { value: "15:1", label: "NWF voter-contact advantage" },
      { value: "15 pts", label: "primary victory margin" },
    ],
    challenge: (
      <>
        Ventura faced an appointed incumbent backed by the state party, organized labor, both U.S. senators, and the governor. Her opponent&apos;s extraordinary financial advantage made a conventional paid-media contest impossible.
      </>
    ),
    approachIntro:
      "NWF framed Ventura as an independent leader and built a data-guided direct-contact program that could win attention through scale and relevance.",
    tactics: [
      {
        title: "Own the independent contrast",
        description:
          "Mail and messaging emphasized Ventura's record, pro-choice support, and freedom from the political machine.",
      },
      {
        title: "Outwork the money",
        description:
          "A large calling and texting operation delivered 15 times more voter contacts than the incumbent's program.",
      },
      {
        title: "Learn every week",
        description:
          "Automated social performance reports, sentiment analysis, and multivariate models continuously sharpened messages and channels.",
      },
    ],
    outcome: (
      <>
        Ventura defeated the appointed incumbent 57.4% to 42.5%. The data-first field program turned a lopsided institutional contest into a decisive 15-point primary victory.
      </>
    ),
  },
  {
    slug: "kenyan-mcduffie-2022",
    name: "D.C. Councilmember Kenyan McDuffie",
    shortName: "Kenyan McDuffie",
    service: "Voter contact",
    year: "2022",
    headline: "A citywide coalition, contact by contact.",
    summary:
      "How targeted scripts, disciplined vote goals, and more than 444,000 direct contacts helped win an at-large council seat.",
    seoDescription:
      "How NWF Strategies helped Kenyan McDuffie win an at-large D.C. Council seat through 113,000 calls, 331,214 texts, and targeted voter contact.",
    image: socialPhotos.kenyan.src,
    imageAlt: "Kenyan McDuffie with supporters at a Latino community meet and greet",
    imageSourceUrl: socialPhotos.kenyan.sourceUrl,
    imagePosition: "center 38%",
    logo: mcDuffieLogo,
    cardImage: mcDuffieLogo,
    cardImageAlt: "Kenyan McDuffie campaign logo",
    cardImageFit: "contain",
    tone: "cyan",
    metrics: [
      { value: "113K+", label: "voter calls" },
      { value: "331K+", label: "targeted texts" },
      { value: "3 wards", label: "core coalition firewall" },
    ],
    challenge: (
      <>
        After a ballot technicality ended his attorney-general campaign, McDuffie mounted an independent bid for one of two at-large council seats against two popular incumbents. The path required an exact vote-share strategy—not simply broad persuasion.
      </>
    ),
    approachIntro:
      "NWF defined the coalition McDuffie needed, wrote the voter-contact program, and concentrated resources where every additional vote changed the citywide math.",
    tactics: [
      {
        title: "Manage the vote goal",
        description:
          "The campaign focused on holding the leading Democrat below 35% while securing second place ahead of the independent incumbent.",
      },
      {
        title: "Build the firewall",
        description:
          "Outreach protected McDuffie's Ward 5 base and aggressively expanded margins in majority-Black Wards 7 and 8.",
      },
      {
        title: "Scale relevant contact",
        description:
          "NWF wrote targeted scripts and delivered more than 113,000 calls and 331,214 texts through its fellowship program.",
      },
    ],
    outcome: (
      <>
        McDuffie won the at-large seat by posting large margins in Wards 5, 7, and 8 while remaining competitive elsewhere. Many voters from the leading Democrat&apos;s base selected McDuffie for the second seat, completing the coalition strategy.
      </>
    ),
  },
  {
    slug: "donavan-mckinney-2026",
    name: "Michigan State Representative Donavan McKinney",
    shortName: "Donavan McKinney",
    service: "Fundraising + events",
    year: "2026",
    headline: "A national finance network, built from day one.",
    summary:
      "How donor introductions, bundling, in-person events, and virtual fundraisers built real capacity for a first-time congressional campaign.",
    seoDescription:
      "How NWF Strategies built Donavan McKinney's national fundraising program from campaign launch through donor relationships, events, bundling, and virtual fundraisers.",
    image: socialPhotos.donavan.src,
    imageAlt: "Donavan McKinney speaking at an SEIU home care workers rally in Michigan",
    imageSourceUrl: socialPhotos.donavan.sourceUrl,
    imagePosition: "center 42%",
    logo: donavanLogo,
    tone: "gold",
    featured: true,
    metrics: [
      { value: "Day 1", label: "NWF joined at campaign launch" },
      { value: "$100Ks", label: "raised through the program" },
      { value: "National", label: "donor network" },
    ],
    challenge: (
      <>
        A first-time congressional candidate was challenging a two-term incumbent with the ability to self-fund. Without a personal fortune, the campaign needed to build a nationwide finance network from the ground up and turn early enthusiasm into competitive resources.
      </>
    ),
    approachIntro:
      "Working with the campaign from launch, NWF centered the finance plan on durable relationships and repeatable, high-impact events.",
    tactics: [
      {
        title: "Make national introductions",
        description:
          "NWF connected McKinney with Muslim and progressive donor communities across the country, extending the finance network well beyond Michigan.",
      },
      {
        title: "Create rooms that matter",
        description:
          "Major in-person fundraisers brought hosts, community leaders, and prospective donors together around a clear case for the candidacy.",
      },
      {
        title: "Remove geography as a limit",
        description:
          "Bundlers and virtual fundraisers created additional ways for national supporters to invest and stay connected.",
      },
    ],
    outcome: (
      <>
        The program raised hundreds of thousands of dollars and gave the campaign a disciplined event calendar plus lasting relationships with supporters nationwide—the financial base a first-time challenger needed to compete on his own terms.
      </>
    ),
  },
  {
    slug: "will-lawrence-2026",
    name: "Will Lawrence for Congress",
    shortName: "Will Lawrence",
    service: "Digital fundraising + events",
    year: "2026",
    headline: "Two months. Nearly triple the monthly raise.",
    summary:
      "How a complete digital program and focused event calendar grew monthly fundraising from $115,000 to $330,000.",
    seoDescription:
      "How NWF Strategies grew Will Lawrence's monthly fundraising from $115,000 to $330,000 in two months through digital fundraising and events.",
    image: socialPhotos.will.src,
    imageAlt: "Will Lawrence addressing a packed campaign event",
    imageSourceUrl: socialPhotos.will.sourceUrl,
    imagePosition: "center 46%",
    logo: willLawrenceLogo,
    tone: "cyan",
    metrics: [
      { value: "2 months", label: "engagement timeline" },
      { value: "$178K", label: "raised in month one" },
      { value: "$330K", label: "raised in month two" },
    ],
    challenge: (
      <>
        NWF joined for the final two months of a congressional primary. The campaign had a compelling organizing story and real momentum, but needed to reach donors outside Michigan and build a dependable closing operation on an unusually compressed timeline.
      </>
    ),
    approachIntro:
      "We paired end-to-end email and SMS fundraising with an event calendar that gave new supporters more reasons—and more ways—to engage.",
    tactics: [
      {
        title: "Run one complete digital program",
        description:
          "A disciplined email and SMS cadence kept the campaign's story in front of donors and allowed fast response to the moments that mattered.",
      },
      {
        title: "Expand nationally",
        description:
          "Audience growth introduced Lawrence to grassroots donors across the country and converted new attention into sustained support.",
      },
      {
        title: "Let events reinforce digital",
        description:
          "A productive fundraising calendar deepened relationships and created fresh moments around which the digital program could organize.",
      },
    ],
    outcome: (
      <>
        Monthly fundraising rose from approximately $115,000 before the engagement to $178,000 in NWF&apos;s first month and $330,000 in the next—a 2.9× increase in just two months, with a broader national grassroots audience supporting the close.
      </>
    ),
  },
  {
    slug: "abdul-el-sayed-2026",
    name: "Dr. Abdul El-Sayed for U.S. Senate",
    shortName: "Abdul El-Sayed",
    service: "Major-donor fundraising",
    year: "2026",
    headline: "Major-donor capacity without losing grassroots identity.",
    summary:
      "How a California program and national virtual events built more than $1 million in durable donor relationships.",
    seoDescription:
      "How NWF Strategies raised $500,000 through Abdul El-Sayed's California major-donor program and built a national relationship network worth more than $1 million.",
    image: socialPhotos.abdul.src,
    imageAlt: "Abdul El-Sayed smiling at the podium during a Michigan campaign rally",
    imageSourceUrl: socialPhotos.abdul.sourceUrl,
    imagePosition: "center 34%",
    logo: abdulLogo,
    tone: "coral",
    featured: true,
    metrics: [
      { value: "$500K", label: "raised through California" },
      { value: "High 5 figs", label: "per national virtual event" },
      { value: "$1M+", label: "from relationships built" },
    ],
    challenge: (
      <>
        The campaign had an energized small-dollar following and refused corporate PAC money. It needed a complementary major-donor channel that could turn enthusiasm across key communities into high-dollar support without compromising its grassroots identity.
      </>
    ),
    approachIntro:
      "NWF built the California high-dollar operation end to end, then expanded the model into national virtual events that generated meaningful revenue while protecting candidate time.",
    tactics: [
      {
        title: "Own the full event cycle",
        description:
          "We led donor identification, host recruitment, production, and staffing across Southern California and the Bay Area.",
      },
      {
        title: "Activate community networks",
        description:
          "Muslim-American, Arab-American, South Asian, tech, red-to-blue, and progressive relationships gave the program both breadth and trust.",
      },
      {
        title: "Scale beyond one market",
        description:
          "National virtual fundraisers generated high five figures apiece and expanded the relationship network without adding unnecessary travel.",
      },
    ],
    outcome: (
      <>
        The California program raised $500,000, then expanded into national virtual fundraisers generating high five figures per event. The relationships NWF built have produced more than $1 million and created a durable major-donor channel alongside the campaign&apos;s small-dollar base.
      </>
    ),
  },
];

const CASE_STUDY_ORDER = [
  "analilia-mejia-2026",
  "donavan-mckinney-2026",
  "abdul-el-sayed-2026",
  "will-lawrence-2026",
  "summer-lee-2024",
  "alaska-democratic-party-2024",
  "kansas-democratic-party-2024",
  "mary-peltola-2022",
  "rachel-ventura-2022",
  "kenyan-mcduffie-2022",
] as const;

export const caseStudies = CASE_STUDY_ORDER.map((slug) =>
  caseStudyRecords.find((study) => study.slug === slug),
).filter((study): study is CaseStudy => Boolean(study));

export const clientLogos = [
  { name: "Zohran Mamdani", src: zohranLogo },
  { name: "Mary Peltola", src: peltolaLogo },
  { name: "Summer Lee", src: summerLogo },
  { name: "Donavan McKinney", src: donavanLogo },
  { name: "Kansas Democratic Party", src: kansasLogo },
  { name: "Alaska Democratic Party", src: alaskaLogo },
  { name: "Chris Rabb", src: rabbLogo },
  { name: "Analilia Mejia", src: mejiaLogo },
  { name: "Claire Valdez", src: claireValdezLogo },
  { name: "Mississippi Democratic Party", src: mississippiDemsLogo },
  { name: "Delia Ramirez", src: deliaRamirezLogo },
  { name: "Abdul El-Sayed", src: abdulLogo },
];

export const services = [
  {
    number: "01",
    title: "Strategy & intelligence",
    short: "Know the race before it defines you.",
    description:
      "Turn rigorous research into a usable point of view: sharper messages, prepared responses, and an evidence base the whole campaign can act on.",
    capabilities: ["Message research", "Opposition tracking", "Rapid response", "Issue briefs", "Live databases"],
    href: "/capabilities#strategy-intelligence",
  },
  {
    number: "02",
    title: "Data & modeling",
    short: "Make every decision with a clearer signal.",
    description:
      "Targeting, turnout models, dashboards, and audience segmentation that turn messy campaign data into timely, practical decisions.",
    capabilities: ["Voter targeting", "Turnout modeling", "Dashboards", "Audience segmentation", "Performance analysis"],
    href: "/data-technology",
  },
  {
    number: "03",
    title: "Campaign activation",
    short: "Move voters at campaign speed.",
    description:
      "High-capacity calling, texting, field strategy, scripts, and real-time quality control—designed around the people you actually need to reach.",
    capabilities: ["Phones", "Peer-to-peer text", "Field strategy", "Scripting", "Live reporting"],
    href: "/capabilities#campaign-activation",
  },
  {
    number: "04",
    title: "Fundraising & acquisition",
    short: "Build the operation behind the number.",
    description:
      "Finance plans, call time, events, donor research, email, and SMS—built as one accountable system that compounds across the cycle.",
    capabilities: ["Finance strategy", "Call time", "Events", "Email + SMS", "Donor research"],
    href: "/capabilities#fundraising-acquisition",
  },
];

export const team = [
  { name: "Sathvik Kaliyur", title: "CEO & Co-Founder" },
  { name: "Jonathan Li", title: "COO & Co-Founder" },
  { name: "Ashley Caleb", title: "Director of Fundraising" },
  { name: "Connor Lentz", title: "Fundraising Manager" },
  { name: "Liam Borg", title: "Fundraising Manager" },
  { name: "Nathan Jeffrey", title: "Call Time Manager" },
  { name: "Sarah Brewer", title: "Call Time Manager" },
  { name: "Erica Henderson", title: "Digital Manager" },
  { name: "Sasha Scott", title: "Organizing Manager" },
];

export const siteStats = [
  { value: "25+", label: "states impacted" },
  { value: "100M+", label: "people reached" },
  { value: "$100M+", label: "raised for campaigns" },
];
