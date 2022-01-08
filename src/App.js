import { useState, useCallback } from 'react';

import Button from './components/Button';
import Headline from './components/Headline';

function App() {

  console.log('App component');

  const [showPara, updateShowPara] = useState(false);

  const toggleHandler = useCallback(() => {
    return updateShowPara( previousState => !previousState );
  }, []);
  // though we should add dependencies for useCallback for detecting changes in it
  // and here dependency can be updateShowPara
  // but as we know that, Reat always guarantee us that updateMethod in useState never changes
  // so we can keep dependencies array as blank one

  return (
    <div>
      <h1>Bogus Heading</h1>
      <Headline show={false} />
      {/* { showPara && <p>New Paragraph</p> } */}
      {/* <button onClick={toggleHandler}>Toggle Paragraph</button> */}
      <Button onClick={toggleHandler} type='button' label='Toggle Paragraph' />
    </div>
  );
}

export default App;
