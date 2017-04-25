import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
      ReactDOM.createElement(Counter),
      document.getElementById('mount')
    );
});