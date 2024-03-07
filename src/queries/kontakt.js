const query = `
query Query {
	teamModel {
    name
		avatar
		email
    phone
    links {
			url
      text
      icon
    }
  }
}
`;

export default query;
