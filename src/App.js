import { useState } from 'react';

import FormModal from './components/FormModal';
import Header from './components/Header';

function App() {

  const [showForm, updateShowForm] = useState(false);

  const showFormHandler = toShow => updateShowForm(toShow);

  return (
    <>
      <Header onLoginClick={showFormHandler} />
      {showForm && <FormModal onClose={showFormHandler}/>}
    </>
  );
}

export default App;
