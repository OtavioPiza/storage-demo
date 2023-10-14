import { useContext } from "react";
import DataContext from "./DataContext";

function App() {
  const { data, setData } = useContext(DataContext);

  // Create an editable textarea that displays the data from the local storage.
  return (
    <textarea
      value={data}
      onChange={(e) => setData(e.target.value)}
    />
  );
}

export default App;
