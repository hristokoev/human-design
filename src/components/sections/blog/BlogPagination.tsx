/*

TODO: 

*/

import type BlogPageProps from "../../../interfaces/BlogPage";

interface BlogPaginationProps {
	pageData: BlogPageProps;
}

export default function BlogPagination({ pageData }: BlogPaginationProps) {

	return (

		<section className="text-petroleum-900">

			<div className="container">

				<div className="py-32">

					<div className="flex flex-col gap-y-4 text-center">

						{/* Pagination */}

						<div className="flex justify-between gap-4 flex-wrap">

							<a href={pageData.url.prev} className={`btn ${pageData.currentPage === 1 ? 'opacity-0' : 'border-petroleum-900 hover:bg-petroleum-900 hover:text-white'}`}>Předchozí</a>

							<a href={pageData.url.next} className={`btn ${pageData.currentPage === pageData.lastPage ? 'opacity-0' : 'border-petroleum-900 hover:bg-petroleum-900 hover:text-white'}`}>Další</a>

						</div>

					</div>

				</div>

			</div>

		</section>

	)
}