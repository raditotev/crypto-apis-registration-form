import { useState } from 'react';
import ListUsers from './components/ListUsers';

import RegistrationForm from './components/RegistrationForm';

function App() {
  const [users, setUsers] = useState([]);
  return (
    <>
      <RegistrationForm onRegister={setUsers} />
      <ListUsers users={users} />
    </>
  );
}

export default App;
