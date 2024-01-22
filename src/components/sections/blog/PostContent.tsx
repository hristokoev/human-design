/*

TODO: 

*/

import type BlogItemProps from "../../../interfaces/BlogItem";

interface PostHeaderProps {
	post: BlogItemProps;
}

export default function PostContent({ post }: PostHeaderProps) {

	const sanitizedHtml = post.text.replace(/\/storage\/uploads/g, "https://humandesign-admin.occamy.cz/storage/uploads")
		.replace(/<h1/g, '<h1 class="text-5xl font-bold"')
		.replace(/<h2/g, '<h2 class="text-4xl font-bold"')
		.replace(/<h3/g, '<h3 class="text-3xl font-bold"')
		.replace(/<h4/g, '<h4 class="text-2xl font-bold"')
		.replace(/<h5/g, '<h5 class="text-xl font-bold"')
		.replace(/<h6/g, '<h6 class="text-lg font-bold"')
		.replace(/<ul/g, '<ul class="list-disc"')
		.replace(/<ol/g, '<ol class="list-decimal"')
		.replace(/<a/g, '<a class="underline hover:no-underline"')


	return (

		<section className="text-petroleum-900">

			<div className="container">

				<div className="pb-16 md:pb-32">

					<div className="grid md:grid-cols-5">


						<div className="col-span-2 space-y-8">

							{post.contributors && post.contributors.length > 0 && (
								<>
									<span className="font-bold">Přispěvatelé</span>

									<div className="flex flex-col gap-y-4">

										{
											post.contributors?.map((contributor, index) => (
												<div className="flex items-center" key={index}>
													<img src={"https://humandesign-admin.occamy.cz/storage/uploads" + contributor.photo.path} alt="" className="w-16 h-16 rounded-full object-cover" />
													<div className="ml-4 flex flex-col">
														<span className="font-bold">{contributor.name}</span>
														<span>{contributor.title}</span>
													</div>
												</div>
											))
										}

									</div>
								</>

							)}

						</div>

						<div className="col-span-3">

							<div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} className="space-y-3" />

						</div>

					</div>

				</div>

			</div>

		</section>

	)

}