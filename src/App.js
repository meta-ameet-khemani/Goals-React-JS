import { useState, useCallback } from 'react';

import Button from './components/Button';
import Headline from './components/Headline';

// function App() {

//   console.log('App component');

//   const [showPara, updateShowPara] = useState(false);

//   const toggleHandler = useCallback(() => {
//     return updateShowPara( previousState => !previousState );
//   }, []);
//   // though we should add dependencies for useCallback for detecting changes in it
//   // and here dependency can be updateShowPara
//   // but as we know that, Reat always guarantee us that updateMethod in useState never changes
//   // so we can keep dependencies array as blank one

//   return (
//     <div>
//       <h1>Bogus Heading</h1>
//       <Headline show={false} />
//       {/* { showPara && <p>New Paragraph</p> } */}
//       {/* <button onClick={toggleHandler}>Toggle Paragraph</button> */}
//       <Button onClick={toggleHandler} type='button' label='Toggle Paragraph' />
//     </div>
//   );
// }

function App() {

  console.log('App component');

  const [showPara, updateShowPara] = useState(false);
  const [allowToggle, updateAllowToggle] = useState(false);

  // Now in this particular case, at the first time of initializing of this component, toggleHandler
  // will have:
  // () => {
  //   if (allowToggle) {
  //     updateShowPara( previousState => !previousState );
  //   }
  // }
  // where allowToggle will always be set to false, so whenever this is executed i.e whenever Toggle Paragraph
  // is clicked, updateShowPara will not be executed, because allowToggle is always set as false and also we 
  // are not setting any dependency to make this change
  // const toggleHandler = useCallback(() => {
  //   if (allowToggle) {
  //     updateShowPara( previousState => !previousState );
  //   }
  // }, []);

  // but if we set allowToggle as depedency, i.e we say that untill allowToggle is unchanged, use that stored 
  // function, and this all is known as closure
  const toggleHandler = useCallback(() => {
    if (allowToggle) {
      updateShowPara( previousState => !previousState );
    }
  }, [allowToggle]);

  // For function, we have useCallback() hook to store them in memory
  // For data, we have useMemo() hook
  // obviously, we have to decide when to use useMemo(), because it might take some performance out of react as
  // well with memory

  const allowToggleHandler = () => updateAllowToggle(true);

  return (
    <div>
      <h1>Bogus Heading</h1>
      <Headline show={false} />
      <Button onClick={allowToggleHandler} type='button' label='Allow Toggle' />
      <Button onClick={toggleHandler} type='button' label='Toggle Paragraph' />
    </div>
  );
}

export default App;
