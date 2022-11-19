import Input from "./components/Input";
import useTemp from "./hooks/useTemp";

export default function App() {
  const [state, setTemp] = useTemp();

  return (
    <main className="flex gap-x-32 mt-16 justify-center">
      <Input label="celsius" value={state.C} onChange={setTemp} />
      <Input label="fahrenheit" value={state.F} onChange={setTemp} />
    </main>
  );
}
