import "./App.css";
import Card from "./components/Card";

const firstOne = {
  name: "JD VANCE",
  department: "DEFENCE",
};

const secondOne = {
  name: "KAMALA HARRIS",
};

// const name = "JD VANCE";

function App() {
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind testing
      </h1>
      <Card username={firstOne.name} btnText="click me" />
      <Card username={secondOne.name} />
    </>
  );
}

export default App;
