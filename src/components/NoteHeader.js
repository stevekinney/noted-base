import React from 'react';
import { Route, Link } from 'react-router-dom';

import Styles from '../styles.css';

const EditButton = ({ match }) => (
  <Link className={Styles.noteheader__button} to={`${match.params.id}/edit`}>
    Edit
  </Link>
);

const ViewButton = ({ match }) => (
  <Link className={Styles.noteheader__button} to={`/${match.params.id}`}>
    View
  </Link>
);

const NoteHeader = ({ title, match }) => (
  <header className={Styles.noteheader}>
    <h2 className={Styles.noteheader__title}>{title}</h2>
    <div>
      <Route exact path="/:id" component={EditButton} />
      <Route path="/:id/edit" component={ViewButton} />
      <Link className={Styles.noteheader__button} to="/">Close</Link>
    </div>
  </header>
);

export default NoteHeader;
