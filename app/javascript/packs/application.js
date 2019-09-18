import React from 'react';
import { render } from 'react-dom';

import App from '../react/components/App';

document.addEventListener('DOMContentLoaded', () => {
  let reactElement = document.getElementById('app')
  render(<App />, reactElement)
})
