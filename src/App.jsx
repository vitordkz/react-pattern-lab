import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Card from './components/Card/Card';

function App() {
  return (
    <div>
      <Header /> {/* puxa o conteúdo do header */}

      <main>
        <h2>My React Lab</h2>

        <Card title="Props">
          <p>Data sent to components</p>
        </Card>

        <Card title="Children">
          {/* <h3>Children</h3> */}
          <p>Content passed as children to the component.</p>
        </Card>

        <Card title="Composition">
          <p>Building components can be using other components</p>
        </Card>

        <Card title="Components">
          <p>React components are JavaScript functions that return a piece of User Interface (UI) using JSX.</p>
          <p>Hello.</p>
        </Card>

        <Card title="What I Learned">
          <h4>Today I Learned</h4>
          <p>Reusable components are independent building blocks that encapsulate
    UI structure and logic, allowing them to be used in different parts
    of an application.</p>
          <p>Children are the content placed inside a component, while title is
    a prop used to provide a title or name for the component.</p>
        </Card>
      </main>

       <Footer> {/* Children props */}
          <p>Made by Vitor.</p>
        </Footer>
    </div>
  );
}

export default App;

{/* <Card>
   ↓
children
   ↓
Card.jsx
   ↓
{children}
   ↓
conteúdo aparece */}