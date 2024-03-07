const query = `
query Query($id: String) {
	blogModel(_id: $id) {
		_created
		title
		text
		tags
		image
		contributors {
			name
			title
			photo
		}
	}
}
`;

export default query;
