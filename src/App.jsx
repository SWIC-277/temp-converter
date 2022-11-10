import Input from "./components/Input";
import useTemp from "./hooks/useTemp";

export default function App() {
  const [state, setTemp] = useTemp();

  return (
    <>
      <Input label="celsius" value={state.C} onChange={setTemp} />
      <Input label="fahrenheit" value={state.F} onChange={setTemp} />
    </>
  );
}
