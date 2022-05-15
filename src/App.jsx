import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 class="text-3xl text-center text-red-500 font-bold underline">
        Hello world!
      </h1>
    </div>
  );
}

export default App;
