/*

TODO: 

*/

import type BlogItemProps from "../../../interfaces/BlogItem";
import convertDate from "../../../lib/convertDate";

interface PostHeaderProps {
	post: BlogItemProps;
}

export default function PostHeader({ post }: PostHeaderProps) {

	const created = convertDate(post._created);

	return (

		<section className="text-petroleum-900">

			<div className="container">

				<div className="py-16 md:py-32">

					<div className="grid md:grid-cols-5 gap-y-8">

						<div className="col-span-2 flex flex-col gap-8">

							<h2 className="text-gold-400 text-5xl font-bold">
								{post.title}
							</h2>

							<div className="flex gap-2">
								{
									post.tags?.map((tag, index) => (
										<span key={index} className="btn text-sm font-bold rounded-md">{tag}</span>
									))
								}
							</div>

							<span>Publikováno {created}</span>

						</div>

						<div className="col-span-3">
							<img src={"https://humandesign-admin.occamy.cz/storage/uploads" + post.image.path} alt="" className="w-full max-h-96 object-cover" />
						</div>

					</div>

				</div>

			</div>

		</section>

	)

}