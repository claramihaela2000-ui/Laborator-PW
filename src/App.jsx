import Card from './Card';
import { useState } from 'react';
import QuickNote from './QuickNote';
import TodoList from './TodoList';

function App() {

  const [count, setCount] = useState(0);



  const projects = [
    { title: "Proiect 1", description: "Pagina personala" },
    { title: "Proiect 2", description: "Calculator buget" },
    { title: "Proiect 3", description: "Dashboard React" },
  ];

  return (
    <div>
      <h1>Majestatea sa</h1>
      <p>Chitu Clara Mihaela </p>
      <Card title="Proiect 1" description="Pagina personala cu HTML si CSS" />
      <Card title="Proiect 2" description="Pagina interactiva cu JavaScript" />
      <Card title="Proiect 3" description="Dashboard cu React" />

      {projects.map(function (item, index) {
        return <Card key={index} title={item.title} description={item.description} />;
      })}

      <button onClick={() => setCount(count + 1)}>Click</button>
      <p>Ai apasat de {count} ori</p>

      <QuickNote />
      <TodoList />

    </div>
  );



}
export default App;
