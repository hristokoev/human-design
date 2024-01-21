/*

TODO: 

*/

import type BlogItemProps from "../../../interfaces/BlogItem";
import type CategoryItemProps from "../../../interfaces/CategoryItem";
import type BlogPageProps from "../../../interfaces/BlogPage";
import convertDate from "../../../lib/convertDate";

interface BlogGridProps {
	posts: BlogItemProps[];
	cats: CategoryItemProps[];
	pageData: BlogPageProps;
}

export default function BlogGrid({ posts, cats, pageData }: BlogGridProps) {

	return (

		<section className="text-petroleum-900">

			<div className="container">

				{/* Category Buttons */}
				{posts.length > 0 && (
					<div className="pb-16 flex justify-center gap-8 flex-wrap">

						<a href="/blog/1" className={`btn ${pageData.url.current === `/blog/${pageData.currentPage}` && 'bg-petroleum-900 text-white'} border-petroleum-900 hover:bg-petroleum-900 hover:text-white`}>Vše</a>

						{
							cats?.map((cat, index) => (
								<a href={"/blog/" + cat.url + "/1"} key={index} className={`btn ${pageData.url.current === `/blog/${cat.url}/${pageData.currentPage}` && 'bg-petroleum-900 text-white'} border-petroleum-900 hover:bg-petroleum-900 hover:text-white`}>{cat.title}</a>
							))
						}

					</div>
				)}

				{/* Blog Posts */}
				{posts.length > 0 ? (
					<div className="grid md:grid-cols-3 gap-x-8 gap-y-16">
						{
							posts.map((post, index) => {
								const cat = cats?.find(cat => cat._id === post?.category._id);
								const created = convertDate(post._created);
								return (
									<a key={index} href={"/blog/" + post._id} className="block border border-petroleum-900/10 shadow-xl shadow-petroleum-900/10 rounded-md group">
										<div className="overflow-hidden">
											<img src={"https://humandesign-admin.occamy.cz/storage/uploads" + post.image.path} alt="" className="w-full max-h-72 object-cover rounded-t-md group-hover:scale-105 transition-all duration-150 ease-in-out" />
										</div>
										<div className="p-4 space-y-2">
											<p className="text-sm font-bold">{cat?.title}</p>
											<h2 className="text-2xl font-bold">{post.title}</h2>
											<p className="text-sm line-clamp-2">{post.perex}</p>
										</div>
										<div className="p-4 flex items-center">
											<img src={"https://humandesign-admin.occamy.cz/storage/uploads" + post.author.photo.path} alt="" className="w-12 h-12 rounded-full object-cover" />
											<div className="ml-4 flex flex-col">
												<span className="font-bold">{post.author.name}</span>
												<span>{created}</span>
											</div>
										</div>
									</a>
								)
							})
						}
					</div>
				) : (
					<div className="text-center text-2xl">
						Žádné příspěvky.
					</div>
				)}

			</div>

		</section>

	)
}