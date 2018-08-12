import React from 'react';
import NoteListItem from './NoteListItem';

import Styles from '../styles.css';

const NoteList = ({ notes }) => {
  return (
    <section className={Styles.notelist}>
      { notes.map(note => <NoteListItem {...note} key={note.id} />) }
    </section>
  );
};

export default NoteList;
