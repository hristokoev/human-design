import type BlogItemProps from "../../../interfaces/BlogItem";
import type CategoryItemProps from "../../../interfaces/CategoryItem";
import convertDate from "../../../lib/convertDate";

interface PostHeaderProps {
	post: BlogItemProps;
	cats: CategoryItemProps[];
}

export default function PostHeader({ post, cats }: PostHeaderProps) {

	const cat = cats?.find(cat => cat._id === post?.category._id);
	const created = convertDate(post._created);

	return (

		<section className="text-petroleum-900">

			<div className="container">

				<div className="py-16 md:py-32">

					<div className="grid md:grid-cols-5 gap-y-8">

						<div className="col-span-2 flex flex-col gap-8">

							<div className="flex">
								<a href="/blog/1" className="font-bold hover:text-gold-400 transition-all duration-150 ease-in-out">Blog</a>
								{
									cat &&
									(
										<>
											<svg className="w-6 h-6" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M5.33398 3.61133L9.77843 8.05577L5.33398 12.5002" stroke="black" strokeWidth="1.33333" />
											</svg>
											<a href={"/blog/" + cat.url + "/1"} className="font-bold hover:text-gold-400 transition-all duration-150 ease-in-out">{cat.title}</a>
										</>
									)
								}
							</div>

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