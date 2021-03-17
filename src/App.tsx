import React from 'react';
import Layout from './components/layout/Layout';
import { Todo } from './features/todo/Todo';

function App() {
  return (
    <Layout>
      <Todo />
    </Layout>
  );
}

export default App;
