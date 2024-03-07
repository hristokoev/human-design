const query = `
query Query($limit: Int, $skip: Int, $sort: JsonType) {
  blogModel(limit: $limit, skip: $skip, sort: $sort) {
		_id
		_created
		title
		perex
		image
		author {
			name
			title
			photo
		}
	}
}
`;

export default query;
