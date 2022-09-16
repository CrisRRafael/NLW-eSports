interface ButtonProps {
  title: string;
}

function Button(props: ButtonProps) {
  return <button>{props.title}</button>;
}

function App() {
  return (
    <div>
      <Button title="Cancelar" />
      <Button title="Enviar" />
      <Button title="Mostrar" />
    </div>
  );
}

export default App;
