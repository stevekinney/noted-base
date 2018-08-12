import React from 'react';
import { connect } from 'react-redux';

import NoteView from '../components/NoteView';

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  const note = { id, ...state.notes[id] };
  return { ...ownProps, ...note };
};

export default connect(mapStateToProps)(NoteView);
