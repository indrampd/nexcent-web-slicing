import Image from "next/image";
import ButtonPrimary from "../buttons/button-primary";

export default function UnlockSection() {
  return (
		<section className="flex py-[2.5rem] px-[5%]">
			<div className="flex w-full max-w-[72rem] mx-auto justify-between items-center">
				<figure className="flex">
					<Image
						src={"/pana.svg"}
						alt="Illustration"
						width={442}
						height={329}
					/>
				</figure>
				<div className="flex flex-col gap-8 max-w-[661px]">
					<div className="flex flex-col gap-4 pr-16">
						<h2 className="text-4xl font-semibold leading-[2.75rem] text-neutral-d-gray">
							How to design your site footer like we did
						</h2>
						<p>
							Donec a eros justo. Fusce egestas tristique
							ultrices. Nam tempor, augue nec tincidunt molestie,
							massa nunc varius arcu, at scelerisque elit erat a
							magna. Donec quis erat at libero ultrices mollis. In
							hac habitasse platea dictumst. Vivamus vehicula leo
							dui, at porta nisi facilisis finibus. In euismod
							augue vitae nisi ultricies, non aliquet urna
							tincidunt. Integer in nisi eget nulla commodo
							faucibus efficitur quis massa. Praesent felis est,
							finibus et nisi ac, hendrerit venenatis libero.
							Donec consectetur faucibus ipsum id gravida.
						</p>
					</div>
					<div className="inline-flex">
						<ButtonPrimary label="Learn More" />
					</div>
				</div>
			</div>
		</section>
  );
}