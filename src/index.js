import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Hello from './components/Hello';

const root = <div>
  <Hello firstName="Boris" lastName="Jambon" />
  <Hello firstName="Garette" lastName="Jambon" />
  </div>;
ReactDOM.render(root, document.getElementById('root'));
registerServiceWorker();