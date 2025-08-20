import Button from "./components/button/Button";
import IconButton from "./components/icon-button/IconButton";
import './styles/variables.css';

function App(){
  return (
      <section style={{ height: '90vh', width:'90vw', display: 'flex', flexDirection:'column', gap:'25px'}}>
        <div>
          <Button>Test</Button>
        </div>
        <div>
          <Button variant="secondary">Test</Button>
        </div>
        <div>
          <Button variant="transparent">Test</Button>
        </div>
        <div>
          <Button disabled>Test</Button>
        </div>
        <div>
          <IconButton
            icon={{
              name: 'sun',
              size: 20,
            }}
            variant="primary"
          />
        </div>
        <div>
          <IconButton
            icon={{
              name: 'sun',
              size: 20,
            }}
            variant="secondary"
          />
        </div>
        <div>
          <IconButton
            icon={{
              name: 'sun',
              size: 20,
            }}
            variant="transparent"
          />
        </div>
        <div>
          <IconButton
            icon={{
              name: 'sun',
              size: 20,
            }}
            variant="transparent"
            disabled
          />
        </div>
      </section>
  );
}

export default App;