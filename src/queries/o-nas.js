const query = `
query Query {
	teamModel {
    name
    title
    photo
    quote
		story {
			header
			subheader
			photo
			slides {
				date
				text
			}
		}
		award
    counters {
      number
      text
    }
    certificates {
      title
      text
      image
    }
  }
}
`;

export default query;
