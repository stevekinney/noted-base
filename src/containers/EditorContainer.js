import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import LoadableEditor from '../components/LoadableEditor';

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  const note = { id, ...state.notes[id] };
  return { ...ownProps, ...note };
};

const mapDispatchToProps = dispatch => ({
  onChange(content, id) {
    dispatch({
      type: 'UPDATE_NOTE_CONTENT',
      content,
      id,
    });
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoadableEditor));
