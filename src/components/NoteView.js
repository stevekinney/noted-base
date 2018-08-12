import React from 'react';
import { Route } from 'react-router-dom';

import Markdown from 'react-markdown';

import NoteHeader from './NoteHeader';
import Editor from '../containers/EditorContainer';

import Styles from '../styles.css';

export default (props) => {
  const {
    title, body, id, match
  } = props;
  return (
    <article className={Styles.content}>
      <NoteHeader title={title} match={match} />
      <div className={Styles.content__panes}>
        <Markdown className={Styles.content__pane} source={body} />
        <Route path="/:id/edit" component={Editor} />
      </div>
    </article>
  );
};
