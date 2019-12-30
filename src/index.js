import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { FEATURES }  from './data/features_data.js';
import { COMPANY } from './data/features_data.js';


ReactDOM.render(<App features={FEATURES} company={COMPANY} />, document.getElementById('root'));
