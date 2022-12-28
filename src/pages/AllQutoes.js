import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "p1", author: "LOL", text: "XOXOXOX" },
  { id: "p2", author: "LOL", text: "XOXOXOX" },
  { id: "p3", author: "LOL", text: "XOXOXOX" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
