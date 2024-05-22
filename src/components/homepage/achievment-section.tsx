export default function AchievementSection() {
	return (
		<section className="flex py-[2.5rem] px-[5%] bg-[#F5F7FA]">
			<div className="flex max-w-[72rem] mx-auto w-full">
				<div className="flex w-full justify-between items-centeren">
					<div className="flex flex-col w-[50%]">
						<h2 className="text-4xl font-semibold leading-[2.75rem] text-neutral-d-gray">
							Helping a local{"  "}
							<span className="text-brand-primary text-nowrap">
								business reinvent itself
							</span>
						</h2>
						<p className="space-y-2">We reached here with our hard work and dedication</p>
					</div>
					<div className="flex flex-col w-[50%] space-y-2">
						<div className="flex">
              <h2>2,245,341</h2>
              <p>Members</p>
            </div>
					</div>
				</div>
			</div>
		</section>
	);
}
// set username github
// git config --global user.name "username"