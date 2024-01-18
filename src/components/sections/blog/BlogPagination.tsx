export default function BlogPagination() {

	return (

		<section className="text-black">

			<div className="container">

				<div className="py-32">

					<div className="flex flex-col gap-y-4 text-center">

						{/* Pagination */}

						<div className="flex justify-center gap-4 flex-wrap">

							<a href="#" className="px-4 py-2 text-lg font-bold border border-black">Předchozí</a>

							<a href="#" className="px-4 py-2 text-lg font-bold border border-black">1</a>

							<a href="#" className="px-4 py-2 text-lg font-bold border border-black">2</a>

							<a href="#" className="px-4 py-2 text-lg font-bold border border-black">3</a>

							<a href="#" className="px-4 py-2 text-lg font-bold border border-black">4</a>

							<a href="#" className="px-4 py-2 text-lg font-bold border border-black">5</a>

							<a href="#" className="px-4 py-2 text-lg font-bold border border-black">Další</a>

						</div>

					</div>

				</div>

			</div>

		</section>

	);
}