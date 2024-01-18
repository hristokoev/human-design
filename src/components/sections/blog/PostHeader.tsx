import type BlogItem from "../../../interfaces/BlogItem";
import type CategoryItem from "../../../interfaces/CategoryItem";
import convertDate from "../../../lib/convertDate";

interface PostHeaderProps {
	post: BlogItem;
	cats: CategoryItem[];
}

export default function PostHeader({ post, cats }: PostHeaderProps) {

	const cat = cats?.find(cat => cat._id === post?.category._id);
	const created = convertDate(post._created);

	return (

		<section className="text-black">

			<div className="container">

				<div className="py-16 md:py-32">

					<div className="grid md:grid-cols-5 gap-8">

						<div className="col-span-2 flex flex-col gap-8">

							<div className="flex">
								<span>Blog</span>
								{
									cat &&
									(
										<>
											<svg className="w-6 h-6" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M5.33398 3.61133L9.77843 8.05577L5.33398 12.5002" stroke="black" stroke-width="1.33333" />
											</svg>
											<span className="font-bold">{cat.title}</span>
										</>
									)
								}
							</div>

							<h2 className="text-gold text-5xl font-bold">
								{post.title}
							</h2>

							<div className="flex gap-2">
								{
									post.tags?.map((tag, index) => (
										<span key={index} className="px-4 py-2 bg-black/10 text-sm font-bold rounded-md">{tag}</span>
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

	);

}