import moment from 'moment';
import React from 'react';
import ReactDOM from 'react-dom';

import { App } from 'src/app';

import 'moment/locale/en-ie';

moment.locale('en');

if ((module as any).hot) {
    (module as any).hot.accept('./app', () => ReactDOM.render(<App />, document.getElementById('root')));
} else {
    ReactDOM.render(<App />, document.getElementById('root'));
}
