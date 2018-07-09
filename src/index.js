import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Hello from './components/Hello';

ReactDOM.render(<Hello name="Boris" />, document.getElementById('root'));
// registerServiceWorker();