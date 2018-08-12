import React from 'react';
import Loadable from 'react-loadable';

import Loading from './Loading';

const LoadableEditor = Loadable({
  loader: () => import('./Editor'),
  loading: Loading,
});

export default LoadableEditor;
