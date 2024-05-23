import ButtonPrimary from "../buttons/button-primary";

export default function CTASection() {
  return (
		<section className="px-[5%] py-12 bg-neutral-silver">
			<div className="flex flex-col items-center gap-8 max-w-[55rem] mx-auto text-center">
				<h2 className="text-7xl font-semibold text-neutral-black">Pellentesque suscipit fringilla libero eu.</h2>
				<div className="">
          <ButtonPrimary label="Get a Demo" icon="/arrow-right-white.svg" />
        </div>
			</div>
		</section>
  );
}