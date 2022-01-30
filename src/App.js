import Counter from './Counter';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <Counter />
    </ErrorBoundary>
  );
}

export default App;
