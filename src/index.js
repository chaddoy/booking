import React from 'react';
import ReactDOM from 'react-dom';
import './global-styles.js';
import 'antd/dist/antd.css';
import App from 'containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
