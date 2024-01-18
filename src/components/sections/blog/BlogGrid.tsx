import type BlogItem from "../../../interfaces/BlogItem";
import type CategoryItem from "../../../interfaces/CategoryItem";
import convertDate from "../../../lib/convertDate";

interface BlogGridProps {
	posts: BlogItem[];
	cats: CategoryItem[];
}

export default function BlogGrid({ posts, cats }: BlogGridProps) {

	return (

		<section className="text-black">

			<div className="container">

				<div className="pb-16 flex justify-center gap-8 flex-wrap">

					<a href="/blog" className="px-4 py-2 text-lg font-bold border border-black">Vše</a>

					{
						cats?.map((cat, index) => (
							<a href={"/blog/" + cat.url + "/1"} key={index} className="px-4 py-2 text-lg font-bold border border-black">{cat.title}</a>
						))
					}

				</div>

				<div className="grid md:grid-cols-3 gap-x-8 gap-y-16">
					{
						posts.map((post, index) => {
							const cat = cats?.find(cat => cat._id === post?.category._id);
							const created = convertDate(post._created);
							return (
								<div key={index}>
									<a href={"/blog/" + post._id} className="block">
										<img src={"https://humandesign-admin.occamy.cz/storage/uploads" + post.image.path} alt="" className="w-full max-h-72 object-cover" />
									</a>
									<div className="mt-2 space-y-2">
										<a href={"/blog/" + cat?.url + "/1"} className="text-sm font-bold">{cat?.title}</a>
										<h2 className="text-2xl font-bold">{post.title}</h2>
										<p className="text-sm line-clamp-2">{post.perex}</p>
									</div>
									<div className="mt-4 flex items-center">
										<img src={"https://humandesign-admin.occamy.cz/storage/uploads" + post.author.photo.path} alt="" className="w-12 h-12 rounded-full object-cover" />
										<div className="ml-4 flex flex-col">
											<span className="font-bold">{post.author.name}</span>
											<span>{created}</span>
										</div>
									</div>
								</div>
							)
						})
					}
				</div>

			</div>

		</section>

	);
}