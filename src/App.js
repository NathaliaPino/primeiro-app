/*function App() {
  return (
    <div>
      <h1>Bem vindo ao meu projeto</h1>
    </div>
  );
}

export default App;*/

import Nome from "./components/Nome";

function App() {
  return (
    <div>
      <h1>Componente App</h1>
      <Nome aluno="Lucas" idade={30} />
      <br />
      <Nome aluno="Mateus" idade={20} />
    </div>
  );
}

export default App;