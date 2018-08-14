import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NoteListContainer from '../containers/NoteListContainer';
import EmptyState from './EmptyState';
import NotFound from './NotFound';
import NoteViewContainer from '../containers/NoteViewContainer';

import Styles from '../styles.css';

const Application = () => (
  <div className={Styles.container}>
    <header className={Styles.header}>
      <h1 className={Styles.header__title}>Super Important Website of Notes</h1>
    </header>
    <NoteListContainer />
    <Switch>
      <Route exact path="/" component={EmptyState} />
      <Route exact path="/notes" component={EmptyState} />
      <Route path="/notes/:id" component={NoteViewContainer} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default Application;
