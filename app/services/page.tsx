import type { Metadata } from "next";

import avatar1 from "../assess/imgs/FB_IMG_1718445502672.jpg";
import avatar2 from "../assess/imgs/FB_IMG_1718445386247.jpg";
import avatar3 from "../assess/imgs/FB_IMG_1718445434529.jpg";
import avatar4 from "../assess/imgs/FB_IMG_1718445513140.jpg";
import avatar5 from "../assess/imgs/FB_IMG_1718445535404.jpg";

import Menu from "../components/Menu";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import LandingServicesTabs from "../components/LandingServicesTabs";
import { AGENCY_NAME, servicesPage } from "../data/agency";

export const metadata: Metadata = {
  title: `Services · ${AGENCY_NAME}`,
  description: servicesPage.hero.description,
};

const clientAvatars = [avatar1, avatar2, avatar3, avatar4, avatar5];

export default function ServicesPage() {
  const { hero, services } = servicesPage;

  return (
    <div id="___gatsby">
      <div id="gatsby-focus-wrapper" style={{ outline: "none" }}>
        <Menu />
        <main className="relative min-h-screen pt-32 pb-24">
          <HeroBanner
            heading={hero.heading}
            description={hero.description}
            cta={hero.cta}
            backgroundImage={hero.backgroundImage}
            socialLabel={hero.socialLabel}
            socialLinks={hero.socialLinks}
            clientBadge={{
              ...hero.clientBadge,
              avatars: clientAvatars,
            }}
          />
          <LandingServicesTabs
            heading={services.heading}
            categories={services.categories}
          />
        </main>
        <Footer />
      </div>
    </div>
  );
}
