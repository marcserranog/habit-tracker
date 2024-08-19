import React from 'react';
import { ThemeProvider } from './theme/ThemeContext';
import AppContent from './components/AppComponent';
import './index.css';

const App = () => (
  <ThemeProvider>
    <AppContent />
  </ThemeProvider>
);

export default App;
