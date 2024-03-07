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
		serviceText
		serviceUrl
  }
}
`;

export default query;
