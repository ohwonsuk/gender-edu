import React from 'react';
import { Route } from 'react-router';

export default function Router() {
  return (
    <Route>
      <Route path="/" />
      <Route path="/about" />
      <Route path="/eduprogram" />
      <Route path="/healingprogram" />
      <Route path="/training" />
      <Route path="/conseling" />
    </Route>
  );
}
