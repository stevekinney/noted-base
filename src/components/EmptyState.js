import React from 'react';

import Styles from '../styles.css';

const EmptyState = () => (
  <article className={Styles.emptystate}>
    <h1>Welcome</h1>
    <p>
      Select a note from the sidebar to get started.
    </p>
  </article>
);

export default EmptyState;
