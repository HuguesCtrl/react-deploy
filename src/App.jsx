import { useContext } from "react";
import Content from "./Content";
import { getAPIresult } from "./theme/UseCallAPI";
import Spinner from "./Spinner.svg";

function App() {
  const { loading, error, data } = useContext(getAPIresult);
  let content;
  if (loading) {
    content = <img src={Spinner} alt="Chargement..." />;
  } else if (error) {
    content = <p>Une erreur est survenue...</p>;
  } else if (data?.length > 0) {
    content = data?.map((item) => {
      return (
        <div key={item.id} className="user-content">
          <h2>{item.name}</h2>
          <p>{item.company.name}</p>
          <p>{item.email}</p>
        </div>
      );
    });
  } else if (data?.length === 0) {
    content = <p>La requête est vide</p>;
  }
  return (
    <div>
      <h1>Appel API</h1>
      {content}
      <Content />
    </div>
  );
}
export default App;
