import "./App.css";
import { Form } from "./components/Form";
import Todos from "./components/Todos";
import { useDispatch, useSelector } from "react-redux";
import { deleteAll } from "./redux/todoapp/actions";
import Notes from "./components/Notes";

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.operationsReducer);
  return (
    <div className="wrraper">
      <br></br>
      <h1 className="text-center">CARDS-APP USING REACT-REDUX </h1>
      <Form />
      <div className="wrraperq">
        <div>
          <Todos />
        </div>
        <div>
          <Notes />
        </div>
      </div>

      <div className="wrapper">
        <div>
          {todos.length > 0 && (
            <button
              style={{ textAlign: "center" }}
              className="btn wrraper btn-danger btn-md delete-all"
              onClick={() => dispatch(deleteAll())}
            >
              DELETE ALL
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
