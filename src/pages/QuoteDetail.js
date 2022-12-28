import { Fragment } from "react";
import { Route, useParams, Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "p1", author: "LOL", text: "XOXOXOX" },
  { id: "p2", author: "LOL", text: "XOXOXOX" },
  { id: "p3", author: "LOL", text: "XOXOXOX" },
];

const QutoeDetail = () => {
  const match = useRouteMatch();
  console.log(match);
  const params = useParams();
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  if (!quote) return <p>No Quote found</p>;
  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
        <div className='centered'>
          <Link className='btn--flat' to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <p>{params.quoteId}</p>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QutoeDetail;
