import { Fragment, useEffect } from "react";
import { Route, useParams, Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

const DUMMY_QUOTES = [
  { id: "p1", author: "LOL", text: "XOXOXOX" },
  { id: "p2", author: "LOL", text: "XOXOXOX" },
  { id: "p3", author: "LOL", text: "XOXOXOX" },
];

const QutoeDetail = () => {
  const match = useRouteMatch();
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote);
  const params = useParams();
  const { quoteId } = params;
  useEffect(() => {
    sendRequest();
  }, [sendRequest, quoteId]);
  if (status === "pending")
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    );
  if (error) return <p className='centered'>{error}</p>;
  if (!loadedQuote.text) return <p>No Quote found!</p>;
  return (
    <Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
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
