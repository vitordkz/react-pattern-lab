import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Card from './components/Card/Card';

function App() {
  return (
    <div>
      <Header /> {/* puxa o conteúdo do header */}

      <main>
        <h2>My React Lab</h2>

        <Card>
          <h3>Props</h3>
          <p>Data sent to components</p>
        </Card>

        <Card>
          <h3>Children</h3>
          <p>Content passed as children to the component</p>
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