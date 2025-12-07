import './App.css';
import Counter from './components/Counter';
import UserCard from './components/UserCard';
import Timer from './components/Timer';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>React Components</h1>
        <p>Stateful vs Stateless</p>
      </header>

      <main className="app-main">
        <Counter />
        <UserCard
          name="John Doe"
          email="john.doe@example.com"
          role="Developer"
        />
        <Timer />
      </main>

      <footer className="app-footer">
        <div className="comparison">
          <h2>Component Comparison</h2>
          <div className="comparison-grid">
            <div className="comparison-item">
              <h3>Stateful (Counter)</h3>
              <ul>
                <li>Uses useState hook</li>
                <li>Manages own state</li>
                <li>Logic inside component</li>
                <li>Functional component</li>
              </ul>
            </div>
            <div className="comparison-item">
              <h3>Stateless (UserCard)</h3>
              <ul>
                <li>Receives props</li>
                <li>No internal state</li>
                <li>Display only</li>
                <li>Easy to test</li>
              </ul>
            </div>
            <div className="comparison-item">
              <h3>Class Component (Timer)</h3>
              <ul>
                <li>Uses this.state</li>
                <li>Lifecycle methods</li>
                <li>Old approach</li>
                <li>More code</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;