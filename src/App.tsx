import { gql, useQuery } from "@apollo/client";

const QUERY = gql`
  query {
    getCityByName(name: "Berlin") {
      weather {
        summary {
          title
        }
      }
    }
  }
`;

export default function App() {
  const { loading, data } = useQuery(QUERY);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <h1>Weather in Berlin:</h1>
      <p>{data.getCityByName.weather.summary.title}</p>
    </div>
  );
}
