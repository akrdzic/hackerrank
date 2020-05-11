import React from 'react';

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      pagesCount: 1,
      articles: [],
    };
  }

  componentDidMount() {
    this.loadArticles();
  }

  async loadArticles() {
    const { page } = this.state;
    const response = await fetch(`https://jsonmock.hackerrank.com/api/articles?page=${page}`);
    const { data, total_pages } = await response.json();
    this.setState({
      articles: data.filter(a => !!a.title),
      pagesCount: total_pages,
    });
  }

  loadPage = page => {
    this.setState({
      page,
    }, this.loadArticles);
  };

  render() {
    const { articles, pagesCount } = this.state;
    return (
      <React.Fragment>
        <div className="pagination">
          {
            Array.from(Array(pagesCount))
              .map((_, index) => (
                <button
                  data-testid="page-button"
                  key={`page-button-${index}`}
                  onClick={() => this.loadPage(index + 1)}
                >{ index + 1}</button>
                )
              )
          }
        </div>
        <ul className="results">
          {
            articles.map((article, index) => (
              <li
                key={`${article.title}-${index}`}
                data-testid="result-row"
              >{ article.title }</li>
            ))
          }
        </ul>
      </React.Fragment>
    );
  }
}

export default Articles;
