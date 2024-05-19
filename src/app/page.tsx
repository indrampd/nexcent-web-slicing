import ClientSection from "@/components/homepage/client-section";
import CommunitySection from "@/components/homepage/community-section";
import HeroSection from "@/components/homepage/hero-section";

export default function Home() {
	return (
		<div>
			<HeroSection />
			<ClientSection />
			<CommunitySection/>
		</div>
	);
}
