import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import transform from 'lodash/transform';

import NoteList from '../components/NoteList';

const mapStateToProps = (state) => {
  const notes = transform(
    state.notes,
    (result, value, id) => {
      result.push({ id, ...value });
    },
    [],
  );
  return { notes };
};

export default withRouter(connect(mapStateToProps)(NoteList));
