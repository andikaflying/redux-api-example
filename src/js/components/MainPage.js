import React from "react"
import { connect } from "react-redux"
import { fetchArticles } from "../actions/articleActions"

//Annotation connect ini mengandung method stateToProps
@connect((store) => {
  return {
    articles: store.articles.content
  };
})

export default class MainPage extends React.Component {

  componentDidMount() {
      this.props.dispatch(fetchArticles());
  }

  render() {
      const { articles } = this.props;
      const mappedArticles = articles.map( article => <li key={article.id}> {article.body} </li> );

      return (
          <div>
            <ul>{mappedArticles}</ul>
          </div>
      );
  }

}
