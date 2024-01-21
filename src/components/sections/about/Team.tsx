/*

TODO: 

*/

import TeamItem from "../../TeamItem";
import type TeamItemProps from "../../../interfaces/TeamItem";

interface TeamProps {
	teamItems: TeamItemProps[];
}

export default function Team({ teamItems }: TeamProps) {

	return (

		<section className="text-petroleum-900">

			<div className="container">

				<div className="py-24 flex flex-col gap-32">

					{teamItems.map((item, i) => (

						<TeamItem key={i} item={item as TeamItemProps} />

					))}

				</div>

			</div>

		</section>

	)
}