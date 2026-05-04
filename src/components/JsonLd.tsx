import { Helmet } from "react-helmet-async";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NWF Strategies",
  legalName: "New Way Forward Strategies",
  url: "https://nwfstrategies.com",
  logo: "https://nwfstrategies.com/NWF.png",
  founder: {
    "@type": "Person",
    name: "Jonathan Li",
  },
  description:
    "NWF Strategies deploys pioneering technologies and strategies, providing change-makers the tools to operate cutting-edge, winning campaigns. We revolutionize political campaigns through data-driven technology and innovative outreach methodologies.",
  sameAs: [
    "https://www.linkedin.com/company/nwf-strategies/",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@nwfstrategies.com",
    contactType: "customer service",
  },
};

const JsonLd: React.FC = () => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  );
};

export default JsonLd;
