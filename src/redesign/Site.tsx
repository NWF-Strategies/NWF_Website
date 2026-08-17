import { useEffect, useMemo, useState, type ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import {
  Link,
  NavLink,
  Navigate,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";

import newLogo from "../assets/new_logo.svg";
import orangeLogo from "../assets/orange_logo.svg";
import groupPhoto from "../assets/optimized/nwf-group.jpg";
import careersPhoto from "../assets/optimized/careers-team.jpg";
import {
  bookingHref,
  caseStudies,
  clientLogos,
  services,
  siteStats,
  socialPhotos,
  team,
  type CaseStudy,
} from "./siteData";

const SITE_URL = "https://www.nwfstrategies.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-2026.png`;

type SEOProps = {
  title: string;
  description: string;
  canonical: string;
  type?: "website" | "article";
  image?: string;
  imageAlt?: string;
  robots?: string;
  schema?: Record<string, unknown> | Record<string, unknown>[];
};

const SEO = ({
  title,
  description,
  canonical,
  type = "website",
  image = DEFAULT_OG_IMAGE,
  imageAlt = "NWF Strategies — infrastructure for high-stakes campaigns",
  robots = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  schema,
}: SEOProps) => {
  const fullTitle = title.includes("NWF Strategies") ? title : `${title} | NWF Strategies`;
  const canonicalUrl = `${SITE_URL}${canonical}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <meta name="author" content="NWF Strategies" />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="NWF Strategies" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={imageAlt} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  );
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${SITE_URL}/#organization`,
      name: "NWF Strategies",
      legalName: "New Way Forward Strategies",
      url: SITE_URL,
      logo: `${SITE_URL}/NWF.png`,
      image: DEFAULT_OG_IMAGE,
      description:
        "NWF Strategies builds and operates the strategy, fundraising, research, data, targeting, digital, and direct-outreach infrastructure behind high-stakes political and public-issue campaigns.",
      foundingDate: "2020",
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      founder: [
        { "@type": "Person", name: "Sathvik Kaliyur" },
        { "@type": "Person", name: "Jonathan Li" },
      ],
      sameAs: ["https://www.linkedin.com/company/nwf-strategies/"],
      knowsAbout: [
        "Political campaign strategy",
        "Public affairs",
        "Issue advocacy",
        "Audience intelligence",
        "Campaign fundraising",
        "Political data analytics",
        "Voter contact",
        "Opposition research",
        "Digital fundraising",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "new business",
        url: bookingHref,
        areaServed: "US",
        availableLanguage: "English",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "NWF Strategies",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-US",
    },
  ],
};

const navItems = [
  { label: "Work", to: "/solutions" },
  { label: "Capabilities", to: "/capabilities" },
  { label: "Data & Tech", to: "/data-technology" },
  { label: "Public Affairs", to: "/public-affairs" },
  { label: "About", to: "/about" },
];

const ATTRIBUTION_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
  "li_fat_id",
] as const;

const readAttribution = () => {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(window.sessionStorage.getItem("nwf_attribution") ?? "{}");
  } catch {
    return {};
  }
};

const trackEvent = (event: string, detail: Record<string, unknown> = {}) => {
  if (typeof window === "undefined") return;
  const eventPayload = { event, ...detail, attribution: readAttribution() };
  const analyticsWindow = window as Window & { dataLayer?: Record<string, unknown>[] };
  analyticsWindow.dataLayer = analyticsWindow.dataLayer ?? [];
  analyticsWindow.dataLayer.push(eventPayload);
  window.dispatchEvent(new CustomEvent("nwf:analytics", { detail: eventPayload }));
};

const AttributionTracker = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const current = readAttribution() as Record<string, string>;
    let hasNewAttribution = false;

    ATTRIBUTION_KEYS.forEach((key) => {
      const value = params.get(key);
      if (value) {
        current[key] = value;
        hasNewAttribution = true;
      }
    });

    const requestedIntent = params.get("intent");
    if (requestedIntent) {
      current.requested_intent = requestedIntent;
      hasNewAttribution = true;
    }

    if (!current.landing_page) current.landing_page = `${location.pathname}${location.search}`;
    if (!current.referrer && document.referrer) current.referrer = document.referrer;

    if (hasNewAttribution || !window.sessionStorage.getItem("nwf_attribution")) {
      window.sessionStorage.setItem("nwf_attribution", JSON.stringify(current));
    }

    trackEvent("page_view", {
      page_path: location.pathname,
      page_query: location.search,
    });
  }, [location.pathname, location.search]);

  return null;
};

const Arrow = ({ direction = "forward" }: { direction?: "forward" | "back" }) => (
  <span aria-hidden="true" className="link-arrow">
    {direction === "forward" ? "\u2197\uFE0E" : "\u2190\uFE0E"}
  </span>
);

type ActionLinkProps = {
  children: ReactNode;
  to: string;
  variant?: "primary" | "secondary" | "ghost" | "light";
  className?: string;
  external?: boolean;
};

const ActionLink = ({
  children,
  to,
  variant = "primary",
  className = "",
  external = false,
}: ActionLinkProps) => {
  const classes = `action-link action-link--${variant} ${className}`.trim();
  const content = (
    <>
      <span>{children}</span>
      <Arrow />
    </>
  );

  const isExternal = external || to.startsWith("http://") || to.startsWith("https://");

  if (isExternal || to.startsWith("mailto:")) {
    return (
      <a
        className={classes}
        href={to}
        onClick={() => trackEvent("cta_click", { destination: to })}
        {...(isExternal ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <Link className={classes} to={to} onClick={() => trackEvent("cta_click", { destination: to })}>
      {content}
    </Link>
  );
};

const Eyebrow = ({ children, light = false }: { children: ReactNode; light?: boolean }) => (
  <p className={`eyebrow ${light ? "eyebrow--light" : ""}`}>{children}</p>
);

const SectionHeading = ({
  eyebrow,
  title,
  copy,
  light = false,
}: {
  eyebrow: string;
  title: ReactNode;
  copy?: ReactNode;
  light?: boolean;
}) => (
  <div className={`section-heading ${light ? "section-heading--light" : ""}`} data-reveal>
    <Eyebrow light={light}>{eyebrow}</Eyebrow>
    <h2>{title}</h2>
    {copy && <p className="section-heading__copy">{copy}</p>}
  </div>
);

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <div className="site-header__inner">
        <Link className="site-logo" to="/" aria-label="NWF Strategies home">
          <span className="site-logo__mark" aria-hidden="true">
            <i />
            <i />
          </span>
          <span>NWF Strategies</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              className={({ isActive }) => (isActive ? "is-active" : "")}
              to={item.to}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link
          className="header-cta"
          to="/contact"
          onClick={() => trackEvent("cta_click", { destination: "/contact", placement: "header" })}
        >
          <span>Start a conversation</span>
          <Arrow />
        </Link>

        <button
          type="button"
          className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`mobile-nav ${menuOpen ? "is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile navigation">
          {navItems.map((item, index) => (
            <NavLink key={item.to} to={item.to} tabIndex={menuOpen ? 0 : -1}>
              <span>0{index + 1}</span>
              {item.label}
              <Arrow />
            </NavLink>
          ))}
          <Link
            to="/contact"
            tabIndex={menuOpen ? 0 : -1}
            onClick={() => trackEvent("cta_click", { destination: "/contact", placement: "mobile_navigation" })}
          >
            <span>{String(navItems.length + 1).padStart(2, "0")}</span>
            Start a conversation
            <Arrow />
          </Link>
        </nav>
        <p>
          Infrastructure for high-stakes campaigns.
          <br />
          Strategy · Data · Execution
        </p>
      </div>
    </header>
  );
};

const Footer = () => (
  <footer className="site-footer">
    <div className="site-footer__cta">
      <div data-reveal>
        <Eyebrow light>Start with the problem</Eyebrow>
        <h2>
          What kind of campaign
          <br />
          are you building?
        </h2>
      </div>
      <div className="site-footer__cta-action" data-reveal>
        <ActionLink to="/contact" variant="light">
          Start a conversation
        </ActionLink>
        <p>
          Choose the right path.
          <br />
          We&apos;ll route it from there.
        </p>
      </div>
    </div>

    <div className="site-footer__main">
      <div className="site-footer__brand">
        <img
          src={newLogo}
          alt="NWF Strategies"
          width="324"
          height="42"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
        />
        <p>
          Strategy, data, and execution for high-stakes political campaigns,
          public issues, and advocacy organizations across the United States.
        </p>
      </div>

      <div className="site-footer__links">
        <div>
          <p className="footer-label">Explore</p>
          <Link to="/solutions">Work</Link>
          <Link to="/capabilities">Capabilities</Link>
          <Link to="/data-technology">Data &amp; Technology</Link>
          <Link to="/public-affairs">Public Affairs</Link>
          <Link to="/about">About</Link>
          <Link to="/careers">Careers</Link>
        </div>
        <div>
          <p className="footer-label">Connect</p>
          <Link to="/contact">Contact</Link>
          <a href="mailto:info@nwfstrategies.com?subject=Press%20inquiry">Press inquiry</a>
          <a
            href="https://www.linkedin.com/company/nwf-strategies/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>

    <div className="site-footer__bottom">
      <p>© {new Date().getFullYear()} New Way Forward Strategies</p>
      <p>Built for consequential campaigns.</p>
    </div>
  </footer>
);

const ScrollAndReveal = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      requestAnimationFrame(() => {
        document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: "auto", block: "start" });
      });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
    document.documentElement.classList.remove("custom-cursor-active");

    const root = document.querySelector<HTMLElement>(".nwf-site");
    const revealItems = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    if (!root || revealItems.length === 0) return;

    if (!("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -7% 0px" },
    );

    revealItems.forEach((item) => observer.observe(item));
    requestAnimationFrame(() => root.classList.add("reveal-ready"));

    return () => observer.disconnect();
  }, [location.pathname, location.hash]);

  return null;
};

const LogoCloud = () => (
  <section className="logo-cloud" aria-labelledby="logo-cloud-title">
    <div className="page-shell logo-cloud__heading" data-reveal>
      <p id="logo-cloud-title">Trusted by leaders, challengers, parties, and movements</p>
      <span>Selected partners</span>
    </div>
    <div className="logo-marquee">
      <div className="logo-marquee__track">
        {[...clientLogos, ...clientLogos].map((logo, index) => (
          <div
            className="logo-marquee__item"
            key={`${logo.name}-${index}`}
            aria-hidden={index >= clientLogos.length}
          >
            <img
              src={logo.src}
              alt={index < clientLogos.length ? `${logo.name} logo` : ""}
              width="260"
              height="108"
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CaseCard = ({ study, featured = false }: { study: CaseStudy; featured?: boolean }) => {
  const image = study.cardImage ?? study.image;
  const imageAlt = study.cardImageAlt ?? study.imageAlt;
  const imageFit = study.cardImageFit ?? study.imageFit;
  const clientType = study.name.includes("Party") ? "Organization" : "Candidate";

  return (
    <Link
      className={`case-card case-card--${study.tone} ${featured ? "case-card--featured" : ""}`}
      to={`/solutions/${study.slug}`}
      data-reveal
    >
      <div className={`case-card__media ${imageFit === "contain" ? "is-contain" : ""}`}>
        <img
          src={image}
          alt={imageAlt}
          style={imageFit === "contain" ? undefined : { objectPosition: study.imagePosition }}
          width="1600"
          height="1000"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
        />
        <span className="case-card__index">NWF / {study.year}</span>
      </div>
      <div className="case-card__body">
        <div className="case-card__identity">
          <span>{clientType}</span>
          <strong>{study.shortName}</strong>
        </div>
        <p className="case-card__service">{study.service}</p>
        <h3>{study.headline}</h3>
        <p className="case-card__summary">{study.summary}</p>
        <div className="case-card__footer">
          <span>{study.year} campaign</span>
          <span className="case-card__read">
            Read case study <Arrow />
          </span>
        </div>
      </div>
    </Link>
  );
};

const MetricStrip = ({ dark = false }: { dark?: boolean }) => (
  <section className={`metric-strip ${dark ? "metric-strip--dark" : ""}`}>
    <div className="metric-strip__inner page-shell">
      {siteStats.map((stat, index) => (
        <div className="metric-strip__item" key={stat.label} data-reveal>
          <span className="metric-strip__index">0{index + 1}</span>
          <strong>{stat.value}</strong>
          <p>{stat.label}</p>
        </div>
      ))}
    </div>
  </section>
);

const KineticBand = () => (
  <div className="kinetic-band" aria-hidden="true">
    <div className="kinetic-band__items">
      <span>Strategy</span><i>✦</i>
      <span>Intelligence</span><i>✦</i>
      <span>Data</span><i>✦</i>
      <span>Activation</span><i>✦</i>
      <span>Measurement</span>
    </div>
  </div>
);

const systemStages = [
  {
    number: "01",
    title: "Segment",
    copy: "Build voter and donor audiences around likelihood, affinity, giving or contact history, geography, and the campaign’s objective.",
    output: "Ranked, reachable audiences",
    visual: ["Propensity", "Affinity", "Contactability"],
  },
  {
    number: "02",
    title: "Message test",
    copy: "Use past conversation data to form a hypothesis, then compare which message, ask, or script produces a meaningful response inside each segment.",
    output: "Segment-message fit",
    visual: ["Message A", "Message B"],
  },
  {
    number: "03",
    title: "Optimize spend",
    copy: "Move dollars and operator time toward the audience-message combinations most likely to mobilize a voter or donor before the deadline.",
    output: "The next-dollar decision",
    visual: ["Increase", "Hold", "Reduce"],
  },
] as const;

const CampaignIntelligenceSystem = ({ compact = false }: { compact?: boolean }) => (
  <div
    className={`intelligence-system ${compact ? "intelligence-system--compact" : ""}`}
    aria-label="NWF campaign intelligence workflow: segment audiences, test messages, and optimize campaign spending"
    data-reveal
  >
    <div className="intelligence-system__topline">
      <span>NWF / Campaign intelligence</span>
      <span><i /> Illustrative operating view</span>
    </div>
    <div className="intelligence-system__workspace">
      <aside className="intelligence-system__inputs">
        <span>Live inputs</span>
        <ul>
          <li>Voter &amp; donor files</li>
          <li>Past conversations</li>
          <li>Contribution history</li>
          <li>Contact outcomes</li>
          <li>Live response data</li>
        </ul>
      </aside>
      <ol className="intelligence-system__pipeline">
        {systemStages.map((stage, stageIndex) => (
          <li key={stage.number}>
            <div className="intelligence-system__stage-title">
              <span>{stage.number}</span>
              <h3>{stage.title}</h3>
            </div>
            <p>{stage.copy}</p>
            <div className={`intelligence-system__visual intelligence-system__visual--${stageIndex + 1}`} aria-hidden="true">
              {stage.visual.map((label, index) => (
                <div key={label}>
                  <span>{label}</span>
                  <i style={{ width: `${88 - index * 19}%` }} />
                </div>
              ))}
            </div>
            <strong><span>Output</span>{stage.output}</strong>
          </li>
        ))}
      </ol>
    </div>
    <div className="intelligence-system__feedback">
      <span>Feedback loop</span>
      <p>Every call, contribution, click, and contact outcome becomes new evidence for the next round.</p>
    </div>
  </div>
);

const PublicCampaignMethod = () => (
  <ol className="public-method">
    <li data-reveal><span>01</span><h3>Understand</h3><p>Map the issue, stakeholders, audiences, and decision window.</p></li>
    <li data-reveal><span>02</span><h3>Test</h3><p>Segment the audience and learn which message moves which constituency.</p></li>
    <li data-reveal><span>03</span><h3>Activate</h3><p>Deploy outreach, measure response, and concentrate resources where they can change the outcome.</p></li>
  </ol>
);

const HomePage = () => {
  const featuredSlugs = ["abdul-el-sayed-2026", "analilia-mejia-2026", "donavan-mckinney-2026"];
  const featured = featuredSlugs
    .map((slug) => caseStudies.find((study) => study.slug === slug))
    .filter((study): study is CaseStudy => Boolean(study));
  const homeSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "NWF Strategies campaign services",
      itemListElement: services.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Service",
          name: service.title,
          description: service.description,
          provider: { "@id": `${SITE_URL}/#organization` },
          areaServed: "United States",
        },
      })),
    };

  return (
    <>
      <SEO
        title="NWF Strategies — Infrastructure for High-Stakes Campaigns"
        description="NWF Strategies builds and operates the strategy, fundraising, research, data, targeting, digital, and direct-outreach infrastructure behind high-stakes political and public-issue campaigns."
        canonical="/"
        schema={homeSchema}
      />

      <section className="home-hero">
        <div className="home-hero__grid" aria-hidden="true" />
        <div className="page-shell home-hero__inner">
          <div className="home-hero__content">
            <Eyebrow light>Strategy · Data · Execution</Eyebrow>
            <h1>
              Infrastructure for <em>high-stakes campaigns.</em>
            </h1>
            <p className="home-hero__lede">
              NWF connects research, data, fundraising, and direct outreach so teams
              can identify the right audiences, test what moves them, and put resources
              where they matter.
            </p>
            <div className="home-hero__actions">
              <ActionLink to="/solutions" variant="light">
                Political campaigns
              </ActionLink>
              <ActionLink to="/public-affairs" variant="ghost">
                Public affairs &amp; advocacy
              </ActionLink>
            </div>
            <div className="home-hero__proof" role="list" aria-label="NWF campaign reach">
              {siteStats.map((stat) => (
                <div key={stat.label} role="listitem">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-collage" aria-label="NWF campaign work in action">
            <div className="hero-collage__main">
              <img
                src={socialPhotos.abdul.src}
                alt="Abdul El-Sayed speaking at a Michigan campaign rally"
                width="2000"
                height="1334"
                loading="eager"
                decoding="async"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="hero-collage__portrait">
              <img
                src={socialPhotos.zohran.src}
                alt="Zohran Mamdani speaking at a community gathering"
                width="1282"
                height="1709"
                loading="eager"
                decoding="async"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="hero-collage__small">
              <img
                src={socialPhotos.mary.src}
                alt="Mary Peltola in an official outdoor portrait"
                width="1080"
                height="1080"
                loading="eager"
                decoding="async"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="hero-collage__sticker">
              <span>THE</span>
              <strong>NEW WAY</strong>
              <span>FORWARD</span>
            </div>
          </div>
        </div>
      </section>

      <KineticBand />
      <LogoCloud />

      <section className="work-preview section-pad">
        <div className="page-shell">
          <div className="work-preview__heading-row">
            <SectionHeading
              eyebrow="Selected work"
              title={<>Proof, not promises.</>}
              copy="We join the hard races, build the missing infrastructure, and stay accountable to the result."
            />
            <ActionLink to="/solutions" variant="secondary">
              Explore all work
            </ActionLink>
          </div>
          <div className="featured-work-grid">
            {featured.map((study, index) => (
              <CaseCard key={study.slug} study={study} featured={index === 0} />
            ))}
          </div>
        </div>
      </section>

      <section className="home-services section-pad section-pad--dark" id="home-capabilities">
        <div className="page-shell">
          <div className="home-services__intro">
            <SectionHeading
              eyebrow="What we do"
              title={<>One operating picture. Four connected capabilities.</>}
              copy="Strategy gets sharper when research, data, fundraising, and activation learn from the same work."
              light
            />
            <div
              className="home-services__system-map"
              aria-label="Strategy, data, activation, and fundraising connected through one operating picture"
              data-reveal
            >
              <div className="home-services__system-ring" aria-hidden="true" />
              <Link className="home-services__system-core" to="/capabilities">
                <span>One operating picture</span>
                <strong>
                  Decide.
                  <br />
                  Deploy.
                  <br />
                  Learn.
                </strong>
                <small>Explore the system <Arrow /></small>
              </Link>
              <ol>
                {services.map((service) => (
                  <li key={service.number}>
                    <span>{service.number}</span>
                    <strong>{service.title}</strong>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div className="service-list">
            {services.map((service) => (
              <Link className="service-row" to={service.href} key={service.title} data-reveal>
                <span className="service-row__number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.short}</p>
                <Arrow />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="system-preview section-pad section-pad--paper-dark">
        <div className="page-shell">
          <div className="system-preview__heading">
            <SectionHeading
              eyebrow="The decision system"
              title={<>Segment the audience. Test the message. Move the spend.</>}
              copy="NWF combines voter and donor data with past conversations and live response so each round of outreach improves the next allocation decision."
            />
            <ActionLink to="/data-technology" variant="secondary">
              Explore Data &amp; Technology
            </ActionLink>
          </div>
          <CampaignIntelligenceSystem compact />
        </div>
      </section>

      <section className="market-bridge section-pad section-pad--dark">
        <div className="page-shell">
          <SectionHeading
            eyebrow="One class of problem"
            title={<>Proven in elections. Built for high-stakes public issues.</>}
            copy="Political campaigns are the proving ground: fixed deadlines, adversarial competition, large audiences, and measurable outcomes. The same operating discipline applies when an organization faces a consequential public issue."
            light
          />
          <div className="market-bridge__grid">
            <article className="market-card market-card--political" data-reveal>
              <span>01 / Political campaigns</span>
              <h3>Win the race in front of you.</h3>
              <p>Integrated strategy, fundraising, research, data, targeting, digital, and direct voter contact—built around the constraint that matters most.</p>
              <Link to="/solutions">See campaign work <Arrow /></Link>
            </article>
            <article className="market-card market-card--public" data-reveal>
              <span>02 / Public affairs &amp; advocacy</span>
              <h3>Build a campaign around the issue.</h3>
              <p>Audience intelligence, message testing, stakeholder outreach, advocacy activation, and measurement for companies, associations, and organizations.</p>
              <Link to="/public-affairs">Explore public affairs <Arrow /></Link>
            </article>
          </div>
        </div>
      </section>

      <section className="operator-section section-pad">
        <div className="page-shell">
          <div className="operator-feature" data-reveal>
            <img
              src={groupPhoto}
              alt="NWF Strategies team and campaign partners together"
              width="1800"
              height="1350"
              loading="lazy"
              decoding="async"
            />
            <div className="operator-feature__shade" />
            <div className="operator-feature__copy">
              <Eyebrow light>Built by operators</Eyebrow>
              <h2>We build from inside the work.</h2>
              <p>
                Political judgment, research, data, technology, and execution work as
                one system under a real deadline.
              </p>
              <ActionLink to="/about" variant="light">Meet NWF</ActionLink>
            </div>
          </div>
        </div>
      </section>

      <section className="process-section section-pad">
        <div className="page-shell">
          <SectionHeading
            eyebrow="How we work"
            title={<>Find the leverage. Build the system. Keep learning.</>}
          />
          <div className="process-grid">
            {[
              {
                number: "01",
                title: "Find the leverage",
                copy: "We diagnose the environment, identify the constraint, and agree on what success actually requires.",
              },
              {
                number: "02",
                title: "Build the system",
                copy: "The plan becomes people, process, technology, reporting, and a calendar operators can execute.",
              },
              {
                number: "03",
                title: "Move and improve",
                copy: "We launch quickly, read the signal, and sharpen the program as the environment changes.",
              },
            ].map((step) => (
              <article key={step.number} data-reveal>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const WorkPage = () => (
  <>
      <SEO
      title="Political Campaign Work and Case Studies"
      description="Explore how NWF Strategies applies fundraising, research, data, targeting, technology, digital strategy, and direct outreach in consequential political campaigns."
      canonical="/solutions"
      schema={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "NWF Strategies campaign case studies",
        description:
          "A collection of political campaign fundraising, data, field, and operations case studies.",
        url: `${SITE_URL}/solutions`,
        isPartOf: { "@id": `${SITE_URL}/#website` },
      }}
    />

    <section className="page-hero page-hero--work">
      <div className="page-shell page-hero__inner">
        <div>
          <Eyebrow light>Politics is the proving ground</Eyebrow>
          <h1>
            Proof from
            <br />
            <em>the proving ground.</em>
          </h1>
        </div>
        <div className="page-hero__aside">
          <p>
            Difficult races. Fixed deadlines. Systems built under pressure. See the
            environment, NWF&apos;s scope, the execution, and the result.
          </p>
          <span>{caseStudies.length} documented engagements</span>
        </div>
      </div>
      <div className="page-hero__type" aria-hidden="true">WORK / WORK / WORK</div>
    </section>

    <section className="work-index section-pad">
      <div className="page-shell">
        <div className="work-index__header" data-reveal>
          <h2>All case studies</h2>
          <p>Fundraising · Data · Field · Digital · Operations</p>
        </div>
        <div className="work-index__grid">
          {caseStudies.map((study, index) => (
            <CaseCard key={study.slug} study={study} featured={index === 0} />
          ))}
        </div>
      </div>
    </section>

    <section className="work-proof section-pad section-pad--dark">
      <div className="page-shell work-proof__grid">
        <SectionHeading
          eyebrow="Across the map"
          title={<>Local knowledge. National capacity.</>}
          copy="From city council to Congress, we scale the operating system to the race—not the other way around."
          light
        />
        <div className="work-proof__stats">
          {siteStats.slice(0, 3).map((stat) => (
            <div key={stat.label} data-reveal>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

const CapabilitiesPage = () => {
  const capabilityDetails = [
    {
      question: "What is actually true about the race, the audience, and the argument we need to win?",
      proofClient: "Kansas Democratic Party",
      proof:
        "A statewide support system that turned scattered campaign questions into usable answers at campaign speed.",
      proofHref: "/solutions/kansas-democratic-party-2024",
    },
    {
      question: "Which voters or donors matter now, and where will the next dollar change the outcome?",
      proofClient: "Mary Peltola for Congress",
      proof:
        "Turnout modeling and branched voter education built for a ranked-choice electorate with little room for error.",
      proofHref: "/solutions/mary-peltola-2022",
    },
    {
      question: "How do we turn the priority audience into measurable conversations, commitments, and votes?",
      proofClient: "Alaska Democratic Party",
      proof:
        "Localized voter universes and cross-channel programs focused organizing capacity on the districts that could move.",
      proofHref: "/solutions/alaska-democratic-party-2024",
    },
    {
      question: "How do we build durable revenue without treating call time, events, email, and SMS as separate programs?",
      proofClient: "Summer Lee for Congress",
      proof:
        "A rebuilt finance and digital program grew from $89,989 in Q2 2023 to $1.02 million in Q4 2023.",
      proofHref: "/solutions/summer-lee-2024",
    },
  ];

  const capabilityCombinations = [
    {
      number: "01",
      title: "Find the audience worth moving",
      mix: "Strategy + data",
      copy:
        "Define the persuasion, turnout, or donor universe; identify the messages most likely to work; and establish the baseline the campaign will measure against.",
    },
    {
      number: "02",
      title: "Turn signal into contact",
      mix: "Data + activation",
      copy:
        "Translate scores and segments into scripts, channel plans, and prioritized outreach—then feed response data back into the next allocation decision.",
    },
    {
      number: "03",
      title: "Build capacity that compounds",
      mix: "Fundraising + acquisition",
      copy:
        "Coordinate call time, events, donor research, email, and SMS so each new relationship strengthens the next ask instead of disappearing into a silo.",
    },
  ];

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "NWF Strategies campaign capabilities",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: "United States",
      },
    })),
  };

  return (
    <>
      <SEO
        title="Campaign Strategy, Data and Execution Capabilities"
        description="NWF integrates strategy and intelligence, data and modeling, campaign activation, and fundraising to build high-stakes political and public-issue campaigns."
        canonical="/capabilities"
        schema={servicesSchema}
      />

      <section className="page-hero page-hero--services">
        <div className="page-shell services-hero__grid">
          <div>
            <Eyebrow light>Integrated capabilities</Eyebrow>
            <h1>
              Strategy, data, and execution
              <br />
              <em>in one operating picture.</em>
            </h1>
          </div>
          <div className="services-hero__stats">
            <div className="services-hero__stat" aria-label="100 million dollars raised">
              <strong>$100M+</strong>
              <span>raised through fundraising programs we helped build and run</span>
            </div>
            <div className="services-hero__stat services-hero__stat--reach" aria-label="100 million people reached">
              <strong>100M+</strong>
              <span>people reached through campaign programs</span>
            </div>
          </div>
        </div>
      </section>

      <section className="services-detail section-pad" id="capabilities-overview">
        <div className="page-shell">
          <div className="services-detail__intro" data-reveal>
            <div className="services-detail__intro-heading">
              <Eyebrow>One operating model</Eyebrow>
              <h2>
                Four disciplines.
                <br />
                <em>One accountable system.</em>
              </h2>
            </div>
            <div className="services-detail__intro-copy">
              <p>
                A campaign does not experience research, data, fundraising, and
                activation as separate departments. Neither should the strategy.
              </p>
              <p>
                NWF assembles the right combination of people, systems, and execution
                around the decision or constraint that matters most—whether the work
                is electoral, issue-based, or advocacy-led.
              </p>
              <ol className="services-detail__loop" aria-label="NWF operating loop">
                {["Signal", "Decide", "Deploy", "Learn"].map((step, index) => (
                  <li key={step}>
                    <span>0{index + 1}</span>
                    <strong>{step}</strong>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <nav
            className="capabilities-jump"
            id="capabilities-jump"
            aria-label="Capabilities on this page"
            data-reveal
          >
            {services.map((service) => (
              <a
                href={`#${service.title.toLowerCase().replace(/\s*&\s*/g, "-").replace(/\s+/g, "-")}`}
                key={service.title}
              >
                <span>{service.number}</span>
                <Arrow />
                <div>
                  <strong>{service.title}</strong>
                  <small>{service.short}</small>
                </div>
              </a>
            ))}
          </nav>

          <div className="service-detail-list">
            {services.map((service, index) => {
              const detail = capabilityDetails[index];

              return (
                <article
                  className="service-detail"
                  id={service.title.toLowerCase().replace(/\s*&\s*/g, "-").replace(/\s+/g, "-")}
                  key={service.title}
                  data-reveal
                >
                  <div className="service-detail__topline">
                    <span>{service.number}</span>
                    <p>{service.short}</p>
                  </div>
                  <div className="service-detail__body">
                    <h2>{service.title}</h2>
                    <div className="service-detail__content">
                      <p>{service.description}</p>
                      <div className="service-detail__question">
                        <span>Built to answer</span>
                        <strong>{detail.question}</strong>
                      </div>
                      <ul aria-label={`${service.title} deliverables`}>
                        {service.capabilities.map((capability) => (
                          <li key={capability}>{capability}</li>
                        ))}
                      </ul>
                      <Link className="service-detail__proof" to={detail.proofHref}>
                        <span>Proof in practice</span>
                        <div>
                          <strong>{detail.proofClient}</strong>
                          <p>{detail.proof}</p>
                        </div>
                        <Arrow />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="capability-combinations section-pad section-pad--dark">
        <div className="page-shell">
          <div className="capability-combinations__heading">
            <SectionHeading
              eyebrow="Built around the pressure point"
              title={<>The right team is a combination, not a menu.</>}
              copy="Most consequential campaign problems cross functional lines. We assemble the smallest integrated system that can produce a better decision and carry it through execution."
              light
            />
          </div>
          <div className="capability-combinations__grid">
            {capabilityCombinations.map((combination) => (
              <article key={combination.number} data-reveal>
                <div>
                  <span>{combination.number}</span>
                  <small>{combination.mix}</small>
                </div>
                <h3>{combination.title}</h3>
                <p>{combination.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="engagement-model section-pad section-pad--paper-dark">
        <div className="page-shell engagement-model__grid">
          <SectionHeading
            eyebrow="Our engagement model"
            title={<>Senior attention. Clear ownership. Fast feedback.</>}
          />
          <div className="engagement-model__items">
            {[
              ["01", "One integrated plan", "Priorities, owners, timing, and success measures live in the same operating picture."],
              ["02", "Operators in the room", "The people advising the work stay close to execution and the realities of the race."],
              ["03", "A live read on progress", "Useful reporting shows what changed, what it means, and what the team should do next."],
            ].map(([number, title, copy]) => (
              <article key={number} data-reveal>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="capability-link section-pad section-pad--dark">
        <div className="page-shell capability-link__grid">
          <SectionHeading
            eyebrow="How the system connects"
            title={<>See what turns information into an operating decision.</>}
            copy="Our Data & Technology page shows the loop from input and analysis through deployment, measurement, and feedback."
            light
          />
          <ActionLink to="/data-technology" variant="light">
            Explore Data &amp; Technology
          </ActionLink>
        </div>
      </section>
    </>
  );
};

const DataTechnologyPage = () => {
  const evidenceSlugs = [
    "mary-peltola-2022",
    "alaska-democratic-party-2024",
    "kansas-democratic-party-2024",
  ];
  const evidence = evidenceSlugs
    .map((slug) => caseStudies.find((study) => study.slug === slug))
    .filter((study): study is CaseStudy => Boolean(study));

  return (
    <>
      <SEO
        title="Data and Technology for Campaigns and Advocacy"
        description="See how NWF Strategies connects audience data, research, targeting, models, dashboards, deployment, measurement, and feedback to improve high-stakes campaign decisions."
        canonical="/data-technology"
        schema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "NWF Strategies Data and Technology",
          url: `${SITE_URL}/data-technology`,
          description:
            "Data, modeling, measurement, and campaign technology built around high-stakes operating decisions.",
          isPartOf: { "@id": `${SITE_URL}/#website` },
        }}
      />

      <section className="page-hero page-hero--data">
        <div className="page-shell page-hero__inner">
          <div>
            <Eyebrow light>Data &amp; Technology</Eyebrow>
            <h1>
              Systems built for
              <br />
              <em>the next decision.</em>
            </h1>
          </div>
          <div className="page-hero__aside">
            <p>
              Our tooling helps operators decide which voters or donors to prioritize,
              what to say to each segment, and where the next dollar should go.
            </p>
            <span>Segment → test → optimize</span>
          </div>
        </div>
        <div className="page-hero__type" aria-hidden="true">AUDIENCE / MESSAGE / SPEND</div>
      </section>

      <section className="data-system section-pad">
        <div className="page-shell">
          <div className="data-system__intro">
            <SectionHeading
              eyebrow="The campaign intelligence system"
              title={<>Identify who matters. Learn what moves them. Spend accordingly.</>}
              copy="The system starts with a voter or donor audience—not a dashboard. It uses past conversations and live outcomes to improve who enters the next outreach universe, which message they receive, and how resources are allocated."
            />
            <div className="data-system__note" data-reveal>
              <span>Built around the audience</span>
              <p>Voter and donor files, contribution history, contact outcomes, and prior conversations become usable segments.</p>
              <span>Built for an allocation</span>
              <p>The output is a practical choice about audience, message, channel, spend, or operator time—not another report to read.</p>
            </div>
          </div>
          <CampaignIntelligenceSystem />
        </div>
      </section>

      <section className="operator-views section-pad section-pad--dark">
        <div className="page-shell operator-views__grid">
          <SectionHeading
            eyebrow="Three decisions"
            title={<>The model is only useful if it changes the plan.</>}
            copy="NWF organizes the system around recurring operating choices rather than abstract model outputs."
            light
          />
          <div className="operator-views__list">
            {[
              ["01", "Who enters the next universe?", "Prioritize voters or donors by propensity, affinity, history, geography, and contactability."],
              ["02", "Which message fits the segment?", "Use prior conversation patterns to form the test, then compare real response by audience."],
              ["03", "Where should the next dollar go?", "Shift outreach and operator time toward the combinations producing the strongest mobilization signal."],
            ].map(([number, title, copy]) => (
              <article key={number} data-reveal>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="system-evidence section-pad section-pad--paper-dark">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Evidence from the work"
            title={<>The system shows up in the case studies.</>}
            copy="These engagements document targeting, feedback, automation, and operating infrastructure in political campaigns. Program metrics reflect NWF campaign data and require the stated engagement context."
          />
          <div className="system-evidence__grid">
            {evidence.map((study, index) => (
              <Link to={`/solutions/${study.slug}`} key={study.slug} data-reveal>
                <span>0{index + 1} / {study.service}</span>
                <h3>{study.shortName}</h3>
                <p>{study.headline}</p>
                <strong>Read the case <Arrow /></strong>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const PublicAffairsPage = () => {
  const publicAffairsServices = [
    {
      number: "01",
      title: "Issue campaigns",
      copy: "For organizations facing legislation, regulation, ballot measures, public-policy debates, or another consequential public-facing issue.",
      capabilities: ["Landscape research", "Audience identification", "Message testing", "Targeting", "Communications", "Measurement"],
    },
    {
      number: "02",
      title: "Stakeholder & audience intelligence",
      copy: "Understand who matters, what audiences believe, where support or opposition sits, which messages move which constituencies, and how the environment is changing.",
      capabilities: ["Stakeholder mapping", "Audience construction", "Segmentation", "Issue research", "Message analysis", "Live reporting"],
    },
    {
      number: "03",
      title: "Advocacy & public mobilization",
      copy: "Apply direct-response and voter-contact infrastructure to lawful grassroots advocacy, supporter activation, coalition outreach, and constituent communication.",
      capabilities: ["Supporter activation", "Phones", "Peer-to-peer text", "Coalition outreach", "Scripting", "Performance analysis"],
    },
  ];

  return (
    <>
      <SEO
        title="Public Affairs and Issue Advocacy"
        description="NWF applies campaign strategy, audience intelligence, message testing, targeting, activation, and measurement to high-stakes public issues and advocacy campaigns."
        canonical="/public-affairs"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Public affairs and issue advocacy campaigns",
          description:
            "Campaign strategy, audience intelligence, activation, and measurement for high-stakes public issues.",
          provider: { "@id": `${SITE_URL}/#organization` },
          areaServed: "United States",
        }}
      />

      <section className="page-hero page-hero--public-affairs">
        <div className="page-shell page-hero__inner">
          <div>
            <Eyebrow light>Public affairs &amp; issue advocacy</Eyebrow>
            <h1>
              Campaign infrastructure for
              <br />
              <em>high-stakes public issues.</em>
            </h1>
          </div>
          <div className="page-hero__aside">
            <p>
              NWF applies the strategy, audience intelligence, testing, and
              activation capabilities built in elections to issues facing companies,
              associations, and advocacy organizations.
            </p>
            <ActionLink to="/contact?intent=public-affairs" variant="light">
              Discuss a public issue
            </ActionLink>
          </div>
        </div>
        <div className="page-hero__type" aria-hidden="true">ISSUE / AUDIENCE / ACTION</div>
      </section>

      <section className="public-bridge section-pad">
        <div className="page-shell public-bridge__grid">
          <SectionHeading
            eyebrow="The bridge"
            title={<>Different arena. The same class of operating problem.</>}
            copy="Political campaigns require teams to understand an environment, identify the audiences that matter, test a message, persuade or mobilize people, communicate at scale, measure response, and adapt quickly. Public issues often demand the same sequence."
          />
          <div className="public-bridge__comparison" data-reveal>
            <div><span>In an election</span><strong>Voters</strong><p>Build the universe, understand belief and propensity, deliver the message, measure response.</p></div>
            <div><span>On a public issue</span><strong>Stakeholders</strong><p>Map the audience, understand position and influence, activate the right channel, measure movement.</p></div>
          </div>
        </div>
      </section>

      <section className="public-engagements section-pad section-pad--paper-dark">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Engagements"
            title={<>Build around a defined public outcome.</>}
            copy="NWF scopes the campaign around the issue, audience, operating window, and decision that matters—not a generic hourly consulting retainer."
          />
          <div className="public-engagements__grid">
            {publicAffairsServices.map((service) => (
              <article key={service.number} data-reveal>
                <span>{service.number}</span>
                <h2>{service.title}</h2>
                <p>{service.copy}</p>
                <ul>{service.capabilities.map((capability) => <li key={capability}>{capability}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="public-process section-pad section-pad--dark">
        <div className="page-shell">
          <SectionHeading
            eyebrow="How the work moves"
            title={<>Understand the environment. Test the message. Activate the audience.</>}
            copy="The campaign layer complements legal, policy, government-relations, and communications teams. NWF does not claim lobbying relationships or replace specialist counsel."
            light
          />
          <PublicCampaignMethod />
          <div className="public-process__cta" data-reveal>
            <p>Have a defined issue, audience, or public deadline?</p>
            <ActionLink to="/contact?intent=public-affairs" variant="light">
              Start a public-affairs conversation
            </ActionLink>
          </div>
        </div>
      </section>
    </>
  );
};

const AboutPage = () => (
  <>
    <SEO
      title="About NWF Strategies"
      description="NWF Strategies was built in electoral politics, where fixed deadlines, scarce resources, adversarial competition, large audiences, and measurable outcomes demand systems that work."
      canonical="/about"
      schema={{
        "@context": "https://schema.org",
        "@type": "AboutPage",
        name: "About NWF Strategies",
        url: `${SITE_URL}/about`,
        mainEntity: { "@id": `${SITE_URL}/#organization` },
      }}
    />

    <section className="about-hero">
      <div className="page-shell about-hero__grid about-hero__grid--solo">
        <div className="about-hero__copy">
          <Eyebrow light>Built under pressure</Eyebrow>
          <h1>
            Built in the least forgiving
            <br />
            <em>operating environment.</em>
          </h1>
          <p>
            Electoral campaigns forced NWF to learn how to build systems under fixed
            deadlines, scarce resources, adversarial competition, rapidly changing
            information, and measurable outcomes.
          </p>
        </div>
      </div>
    </section>

    <MetricStrip />

    <section className="about-story section-pad">
      <div className="page-shell about-story__grid">
        <div className="about-story__label" data-reveal>
          <Eyebrow>Our story</Eyebrow>
          <p>Founded 2020</p>
        </div>
        <div className="about-story__copy" data-reveal>
          <h2>Politics was the starting point. Systems became the company.</h2>
          <p>
            NWF began with a simple frustration: serious campaigns were paying for
            disconnected tools and advice while getting too little clarity about what
            to do next.
          </p>
          <p>
            Our founders brought together experience from political campaigns,
            quantitative research, field operations, fundraising, and technology. The
            result is an organization built to connect judgment with execution—so
            research can shape the audience, the audience can sharpen activation, and
            every result can improve the next decision.
          </p>
          <p>
            Today, NWF applies that operating discipline across candidates, parties,
            causes, advocacy, and high-stakes public campaigns with one standard: make
            the work useful, measurable, and accountable to the outcome.
          </p>
        </div>
      </div>
    </section>

    <section className="timeline-section section-pad section-pad--paper-dark">
      <div className="page-shell timeline-section__grid">
        <SectionHeading
          eyebrow="Capability accumulated"
          title={<>The work compounds.</>}
          copy="Each cycle added operating knowledge, infrastructure, and a larger set of problems the team could solve."
        />
        <ol className="company-timeline">
          {[
            ["2020", "NWF founded", "Campaign operations, quantitative research, fundraising, field, and technology brought into one accountable model."],
            ["2022", "Precision at scale", "Alaska targeting and rapid outreach, plus large direct-contact programs in Illinois and Washington, D.C., expanded the data-to-execution system."],
            ["2024", "Statewide infrastructure", "Party programs in Alaska and Kansas applied targeting, automation, resource systems, and rapid support across many races."],
            ["2026", "A broader operating platform", "Current Senate and congressional work combines major-donor and digital fundraising, events, audience growth, data, and campaign execution across competitive primaries and general-election programs."],
          ].map(([year, title, copy]) => (
            <li key={year} data-reveal>
              <span>{year}</span>
              <div><h3>{title}</h3><p>{copy}</p></div>
            </li>
          ))}
        </ol>
      </div>
    </section>

    <section className="values-section section-pad section-pad--dark">
      <div className="page-shell">
        <SectionHeading eyebrow="What guides us" title={<>Values you can feel in the work.</>} light />
        <div className="values-grid">
          {[
            ["01", "Access is strategy", "More voices can compete when strong tools and honest counsel are not reserved for the best-connected campaigns."],
            ["02", "Evidence earns trust", "We bring a point of view, show our work, and update the plan when the signal changes."],
            ["03", "People stay central", "Voters are not rows in a database. Staff are not interchangeable. Good systems make human judgment stronger."],
            ["04", "Ownership beats theater", "We care less about looking busy and more about moving the number, solving the constraint, and leaving the campaign stronger."],
          ].map(([number, title, copy]) => (
            <article key={number} data-reveal>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="team-section section-pad">
      <div className="page-shell">
        <div className="team-section__heading">
          <SectionHeading
            eyebrow="Our team"
            title={<>Different disciplines. One operating standard.</>}
            copy="Campaign operators, fundraisers, researchers, data specialists, digital staff, and organizers working around the same outcome."
          />
        </div>
        <div className="team-grid">
          {team.map((member, index) => (
            <article key={member.name} data-reveal>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{member.name}</h3>
              <p>{member.title}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  </>
);

const CareersPage = () => (
  <>
    <SEO
      title="Political Campaign Careers"
      description="Build high-stakes campaign systems at NWF Strategies across fundraising, research, data, technology, digital strategy, organizing, and direct outreach."
      canonical="/careers"
    />

    <section className="careers-hero">
      <img
        src={careersPhoto}
        alt="NWF Strategies team gathering"
        width="1440"
        height="835"
        loading="eager"
        decoding="async"
      />
      <div className="careers-hero__overlay" />
      <div className="page-shell careers-hero__content">
        <Eyebrow light>Careers at NWF</Eyebrow>
        <h1>
          Build systems that have to work
          <br />
          <em>on deadline.</em>
        </h1>
        <p>
          Join campaign operators, builders, researchers, fundraisers, data people,
          digital staff, and organizers who stay accountable to real outcomes.
        </p>
        <ActionLink
          to="https://www.indeed.com/cmp/Nwf-Strategies/jobs"
          variant="light"
          external
        >
          View open roles
        </ActionLink>
      </div>
    </section>

    <section className="career-teams section-pad">
      <div className="page-shell">
        <SectionHeading
          eyebrow="Find your lane"
          title={<>Specialized craft. Shared operating discipline.</>}
          copy="We build cross-functional teams around the work a high-stakes campaign actually needs."
        />
        <div className="career-teams__grid">
          {[
            ["01", "Fundraising", "Finance strategy, call time, donor research, events, email, and SMS."],
            ["02", "Research & data", "Message research, rapid response, modeling, targeting, and analytics."],
            ["03", "Digital & technology", "Campaign tools, digital programs, automations, dashboards, and creative problem-solving."],
            ["04", "Organizing & voter contact", "Field strategy, scripts, training, quality control, phones, and text."],
          ].map(([number, title, copy]) => (
            <article key={number} data-reveal>
              <span>{number}</span>
              <h2>{title}</h2>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="intern-section section-pad section-pad--paper-dark">
      <div className="page-shell intern-section__grid">
        <div data-reveal>
          <Eyebrow>Early-career path</Eyebrow>
          <h2>Learn inside active work.</h2>
          <p>
            Interns support active campaigns and develop practical skills in
            research, communication, leadership, and campaign operations.
          </p>
        </div>
        <div className="intern-section__details" data-reveal>
          <h3>What we look for</h3>
          <ul>
            <li>Currently enrolled in high school or above</li>
            <li>Strong verbal communication skills in English</li>
            <li>Intellectual curiosity and a desire to keep learning</li>
            <li>Strong analytical, problem-solving, and critical-thinking skills</li>
            <li>Comfort working across teams and deadlines</li>
            <li>Availability for 10–15 hours each week</li>
          </ul>
          <p className="intern-section__note">
            The internship is unpaid and includes a performance-based bonus program
            for outstanding work.
          </p>
          <div className="intern-section__actions">
            <ActionLink
              to="https://www.indeed.com/cmp/Nwf-Strategies"
              variant="primary"
              external
            >
              Visit NWF on Indeed
            </ActionLink>
            <a href="mailto:info@nwfstrategies.com">Questions? Email the team ↗</a>
          </div>
        </div>
      </div>
    </section>
  </>
);

const ContactPage = () => {
  const location = useLocation();
  const requestedIntent = new URLSearchParams(location.search).get("intent");
  const intentRoutes = [
    {
      id: "political-campaign",
      number: "01",
      title: "Political campaign",
      copy: "Candidate, party, PAC, or political organization with a defined race and deadline.",
      href: bookingHref,
      action: "Choose a time",
    },
    {
      id: "public-affairs",
      number: "02",
      title: "Public affairs / advocacy",
      copy: "Company, association, or advocacy organization facing a consequential public issue.",
      href: "mailto:info@nwfstrategies.com?subject=Public%20affairs%20or%20advocacy%20inquiry",
      action: "Email the team",
    },
    {
      id: "data-research",
      number: "03",
      title: "Data / research",
      copy: "Audience, targeting, modeling, measurement, research, or reporting problem.",
      href: "mailto:info@nwfstrategies.com?subject=Data%20or%20research%20inquiry",
      action: "Email the team",
    },
    {
      id: "partnership",
      number: "04",
      title: "Partnership",
      copy: "Technology, communications, public-affairs, data, or delivery partner exploring a fit.",
      href: "mailto:info@nwfstrategies.com?subject=Partnership%20inquiry",
      action: "Email the team",
    },
    {
      id: "press",
      number: "05",
      title: "Press",
      copy: "Reporter, producer, researcher, or event organizer looking for context or a source.",
      href: "mailto:info@nwfstrategies.com?subject=Press%20inquiry",
      action: "Contact press",
    },
    {
      id: "careers",
      number: "06",
      title: "Careers",
      copy: "Experienced operators, specialists, and early-career applicants looking to join NWF.",
      href: "/careers",
      action: "Explore careers",
    },
  ];

  const faqItems = [
    {
      question: "What kinds of work does NWF support?",
      answer:
        "NWF supports candidates, campaigns, parties, political organizations, advocacy organizations, associations, and companies facing high-stakes public issues across the United States.",
    },
    {
      question: "What can NWF Strategies help with?",
      answer:
        "Our core work connects strategy and intelligence, data and modeling, fundraising and acquisition, campaign activation, direct outreach, and measurement.",
    },
    {
      question: "How do we start a conversation?",
      answer: "Choose the route that best matches the work. Political campaign inquiries can book directly; public affairs, data, partnerships, press, and careers route to a more specific first step.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <SEO
        title="Contact NWF Strategies"
        description="Contact NWF Strategies about a political campaign, public affairs or issue advocacy, data and research, partnerships, press, or careers."
        canonical="/contact"
        schema={faqSchema}
      />

      <section className="contact-hero">
        <div className="page-shell contact-hero__grid">
          <div className="contact-hero__copy">
            <Eyebrow light>Contact</Eyebrow>
            <h1>
              Bring us the problem.
              <br />
              <em>We’ll build the campaign.</em>
            </h1>
            <p>
              Tell us what you are building, the audience or issue in front of you,
              when the window closes, and where the campaign needs leverage.
            </p>
          </div>

          <div className="contact-card" data-reveal>
            <div className="contact-card__topline">
              <img src={orangeLogo} alt="NWF Strategies" width="324" height="42" />
            </div>
            <div className="contact-card__person">
              <h2>Talk with NWF.</h2>
              <p>Choose the kind of work below or book a short introduction.</p>
            </div>
            <a
              className="contact-card__email"
              href={bookingHref}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent("contact_intent", { intent: "political-campaign", placement: "contact_card" })}
            >
              <span>Book an introduction</span>
              <Arrow />
            </a>
          </div>
        </div>
      </section>

      <section className="intent-routing section-pad section-pad--paper-dark">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Choose a route"
            title={<>Get to the right first conversation.</>}
            copy="Choose the kind of work you want to discuss and we’ll route the conversation from there."
          />
          <div className="intent-grid">
            {intentRoutes.map((intent) => {
              const isInternal = intent.href.startsWith("/");
              const className = `intent-card ${requestedIntent === intent.id ? "is-requested" : ""}`;
              const content = (
                <>
                  <span>{intent.number}</span>
                  <h2>{intent.title}</h2>
                  <p>{intent.copy}</p>
                  <strong>{intent.action} <Arrow /></strong>
                </>
              );

              if (isInternal) {
                return (
                  <Link
                    className={className}
                    to={intent.href}
                    key={intent.id}
                    data-reveal
                    onClick={() => trackEvent("contact_intent", { intent: intent.id })}
                  >
                    {content}
                  </Link>
                );
              }

              return (
                <a
                  className={className}
                  href={intent.href}
                  key={intent.id}
                  data-reveal
                  onClick={() => trackEvent("contact_intent", { intent: intent.id })}
                  {...(intent.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                >
                  {content}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="contact-prep section-pad">
        <div className="page-shell contact-prep__grid">
          <SectionHeading
            eyebrow="Make the first call useful"
            title={<>Three things that make the first conversation useful.</>}
          />
          <ol>
            {[
              ["01", "The campaign or issue", "What you are running for, building, defending, or trying to change."],
              ["02", "The real timeline", "Election day, launch date, filing deadline, public decision, or the moment your window closes."],
              ["03", "The constraint", "The audience, number, system, team, or strategic question currently holding the work back."],
            ].map(([number, title, copy]) => (
              <li key={number} data-reveal>
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="faq-section section-pad section-pad--paper-dark">
        <div className="page-shell faq-section__grid">
          <div>
            <Eyebrow>Quick answers</Eyebrow>
            <h2>Before we talk.</h2>
          </div>
          <div className="faq-list">
            {faqItems.map((item) => (
              <details key={item.question} data-reveal>
                <summary>{item.question}<span aria-hidden="true">+</span></summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const CaseStudyPage = () => {
  const { slug } = useParams();
  const study = caseStudies.find((item) => item.slug === slug);

  const related = useMemo(() => {
    if (!study) return [];
    return caseStudies
      .filter((item) => item.slug !== study.slug)
      .sort((a, b) => {
        const aMatch = a.service.split(" ")[0] === study.service.split(" ")[0] ? -1 : 0;
        const bMatch = b.service.split(" ")[0] === study.service.split(" ")[0] ? -1 : 0;
        return aMatch - bMatch;
      })
      .slice(0, 3);
  }, [study]);

  if (!study) return <NotFoundPage />;

  const serviceKey = study.service.toLowerCase();
  const capabilityProof = serviceKey.includes("fundraising")
    ? {
        title: "A fundraising system that compounds relationships and learning.",
        copy: "The reusable capability is the operating pattern: connect audience and donor research, candidate time, events, digital channels, and reporting so each interaction improves the next ask and the next decision.",
      }
    : serviceKey.includes("data") || serviceKey.includes("technology") || serviceKey.includes("operations")
      ? {
          title: "An operating system that turns information into action.",
          copy: "The reusable capability is the workflow: define the audience, build a live view of performance, route information to operators, and use what happens in the field to improve the next deployment.",
        }
      : {
          title: "A direct-contact system built to learn while it moves.",
          copy: "The reusable capability is the discipline: precise audiences, relevant scripts, trained operators, live quality control, and feedback that sharpens the next round of outreach.",
        };

  const canonical = `/solutions/${study.slug}`;
  const subjectType = study.name.includes("Party") ? "Organization" : "Person";
  const roleSummary = `${study.approachIntro} The documented work includes ${study.tactics.map((tactic) => tactic.title.toLowerCase()).join(", ")}.`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.headline,
    description: study.seoDescription,
    image: DEFAULT_OG_IMAGE,
    mainEntityOfPage: `${SITE_URL}${canonical}`,
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    about: { "@type": subjectType, name: study.name },
    mentions: { "@type": subjectType, name: study.shortName },
    keywords: `${study.shortName}, NWF Strategies, ${study.service}, political campaign consultants, campaign case study`,
    dateModified: "2026-08-16",
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Work", item: `${SITE_URL}/solutions` },
      { "@type": "ListItem", position: 3, name: study.shortName, item: `${SITE_URL}${canonical}` },
    ],
  };
  const roleFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What did NWF Strategies work on for ${study.shortName}?`,
        acceptedAnswer: { "@type": "Answer", text: roleSummary },
      },
    ],
  };

  return (
    <article className={`case-study case-study--${study.tone}`}>
      <SEO
        title={`NWF Strategies’ Work for ${study.shortName}`}
        description={study.seoDescription}
        canonical={canonical}
        type="article"
        schema={[articleSchema, breadcrumbSchema, roleFaqSchema]}
      />

      <header className="case-study-hero">
        <div className="page-shell">
          <div className="case-study-hero__breadcrumbs">
            <Link to="/solutions"><Arrow direction="back" /> All work</Link>
            <span>{study.year}</span>
          </div>
          <div className="case-study-hero__grid">
            <div className="case-study-hero__copy">
              <Eyebrow light>{study.service}</Eyebrow>
              <h1>{study.headline}</h1>
              <p>{study.summary}</p>
              <div className="case-study-hero__client">
                <div className="case-study-hero__logo">
                  <img
                    src={study.logo}
                    alt={`${study.shortName} campaign logo`}
                    decoding="async"
                  />
                </div>
                <span>{study.name}</span>
              </div>
            </div>
            <div className={`case-study-hero__media ${study.imageFit === "contain" ? "is-contain" : ""}`}>
              <img
                src={study.image}
                alt={study.imageAlt}
                style={study.imageFit === "contain" ? undefined : { objectPosition: study.imagePosition }}
                width="1600"
                height="1000"
                loading="eager"
                decoding="async"
                referrerPolicy="no-referrer"
              />
              {study.imageSourceUrl ? (
                <a href={study.imageSourceUrl} target="_blank" rel="noreferrer">
                  Official social photo ↗
                </a>
              ) : (
                <span>Case study / {study.year}</span>
              )}
            </div>
          </div>
          <div className="case-study-hero__metrics">
            {study.metrics.map((metric, index) => (
              <div key={metric.label}>
                <span>0{index + 1}</span>
                <strong>{metric.value}</strong>
                <p>{metric.label}</p>
              </div>
            ))}
          </div>
          <p className="case-study-hero__source">
            Election outcomes are public results. Program metrics are based on NWF campaign data and should be read within the engagement scope described below.
          </p>
        </div>
      </header>

      <section className="case-narrative section-pad">
        <div className="page-shell case-narrative__grid">
          <aside data-reveal>
            <span>01</span>
            <p>Environment + problem</p>
          </aside>
          <div data-reveal>
            <h2>The constraint that defined the work.</h2>
            <p>{study.challenge}</p>
          </div>
        </div>
      </section>

      <section className="case-approach section-pad section-pad--paper-dark">
        <div className="page-shell">
          <div className="case-approach__heading" data-reveal>
            <div><span>02</span><p>NWF scope + system</p></div>
            <div className="case-approach__summary">
              <h2>What NWF Strategies worked on for {study.shortName}.</h2>
              <p>{study.approachIntro}</p>
            </div>
          </div>
          <div className="case-tactics">
            {study.tactics.map((tactic, index) => (
              <article key={tactic.title} data-reveal>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{tactic.title}</h3>
                <p>{tactic.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="case-outcome section-pad section-pad--dark">
        <div className="page-shell case-outcome__grid">
          <div className="case-outcome__label" data-reveal>
            <span>03</span>
            <p>Execution + result</p>
          </div>
          <div className="case-outcome__copy" data-reveal>
            <h2>{study.metrics[0].value}</h2>
            <p>{study.outcome}</p>
          </div>
        </div>
      </section>

      <section className="case-capability section-pad">
        <div className="page-shell case-capability__grid">
          <div data-reveal>
            <span>04</span>
            <p>Capability demonstrated</p>
          </div>
          <div data-reveal>
            <h2>{capabilityProof.title}</h2>
            <p>{capabilityProof.copy}</p>
            <div className="case-capability__links">
              <ActionLink to="/capabilities" variant="secondary">Explore capabilities</ActionLink>
              <ActionLink to="/data-technology" variant="secondary">See the operating loop</ActionLink>
            </div>
          </div>
        </div>
      </section>

      {study.publicSources && study.publicSources.length > 0 && (
        <section className="case-sources section-pad section-pad--paper-dark">
          <div className="page-shell case-sources__grid">
            <div data-reveal>
              <Eyebrow>Public record</Eyebrow>
              <h2>Sources for the campaign result.</h2>
            </div>
            <ul data-reveal>
              {study.publicSources.map((source) => (
                <li key={source.href}>
                  <a href={source.href} target="_blank" rel="noreferrer">
                    {source.label} <Arrow />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="related-work section-pad">
        <div className="page-shell">
          <div className="related-work__heading">
            <SectionHeading eyebrow="Keep reading" title={<>More proof from the field.</>} />
            <ActionLink to="/solutions" variant="secondary">All case studies</ActionLink>
          </div>
          <div className="related-work__grid">
            {related.map((item) => <CaseCard key={item.slug} study={item} />)}
          </div>
        </div>
      </section>
    </article>
  );
};

const NotFoundPage = () => (
  <>
    <SEO
      title="404 — Page Not Found"
      description="The page you requested could not be found. Explore NWF Strategies campaign work and capabilities."
      canonical="/404"
      robots="noindex, follow"
    />
    <section className="not-found">
      <div className="page-shell not-found__inner">
        <span>404</span>
        <h1>
          Wrong turn.
          <br />
          <em>New way forward.</em>
        </h1>
        <p>The page moved, the link broke, or the race changed. We can still get you where you need to go.</p>
        <div>
          <ActionLink to="/" variant="light">Back home</ActionLink>
          <ActionLink to="/solutions" variant="ghost">See our work</ActionLink>
        </div>
      </div>
    </section>
  </>
);

const Site = () => (
  <div className="nwf-site">
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
    </Helmet>
    <a className="skip-link" href="#main-content">Skip to main content</a>
    <Header />
    <AttributionTracker />
    <ScrollAndReveal />
    <main id="main-content">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/solutions" element={<WorkPage />} />
        <Route path="/work" element={<Navigate to="/solutions" replace />} />
        <Route path="/capabilities" element={<CapabilitiesPage />} />
        <Route path="/services" element={<Navigate to="/capabilities" replace />} />
        <Route path="/data-technology" element={<DataTechnologyPage />} />
        <Route path="/public-affairs" element={<PublicAffairsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/contactus" element={<Navigate to="/contact" replace />} />
        <Route path="/solutions/zohran-mamdani-2025" element={<Navigate to="/solutions" replace />} />
        <Route path="/solutions/:slug" element={<CaseStudyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
    <Footer />
  </div>
);

export default Site;
