const query = `
query Query {
	faqModel {
		question
		answer
	}
	reviewsModel {
    name
		title
		text
    perex
		service
  }
}
`;

export default query;