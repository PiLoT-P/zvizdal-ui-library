import Button from "./components/button/Button";
import './styles/variables.css';
import { ThemaProvider } from "./theme/ThemaProvider";

function App(){
  return (
    <ThemaProvider>
      <section style={{ height: '90vh', width:'90vw'}}>
        <Button>TEST</Button>
        <br />
        <Button variant="secondary">TEST</Button>
        <br />
        <Button variant="transparent">TEST</Button>
        <br />
        <Button disabled>TEST</Button>

      </section>
    </ThemaProvider>
  );
}

export default App;