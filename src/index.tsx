import moment from 'moment';
import React from 'react';
import ReactDOM from 'react-dom';

import { App } from 'src/app';

import 'moment/locale/en-ie';

moment.locale('en');

ReactDOM.render(<App />, document.getElementById('root'));
