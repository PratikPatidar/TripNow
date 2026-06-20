const fs = require('fs');
const path = require('path');

const appFile = path.join(__dirname, 'frontend/src/App.tsx');
const lines = fs.readFileSync(appFile, 'utf8').split('\n');

const sliceLines = (start, end) => lines.slice(start - 1, end).join('\n');

const createPage = (name, content, addImports = "import { useState } from 'react';\n\n") => {
  fs.writeFileSync(path.join(__dirname, `frontend/src/pages/${name}.tsx`), addImports + content + `\n\nexport default ${name};\n`);
};

const createComponent = (name, content, addImports = "import React from 'react';\n\n") => {
  fs.writeFileSync(path.join(__dirname, `frontend/src/components/${name}.tsx`), addImports + content + `\n\nexport default ${name};\n`);
};

// Extracted from original App.tsx
createComponent('Footer', sliceLines(6, 19), "");
createPage('SignIn', sliceLines(21, 66));
createPage('AboutPage', sliceLines(68, 79), "");
createPage('HotelsPage', sliceLines(81, 102), "");
createPage('OffersPage', sliceLines(104, 125), "");
createPage('SupportPage', sliceLines(127, 148), "");
createPage('BookingSuccess', sliceLines(150, 163), "");
createPage('BookingsPage', sliceLines(165, 223));
createPage('Home', sliceLines(225, 560));

const appContent = `import { useState, useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import HotelsPage from './pages/HotelsPage';
import OffersPage from './pages/OffersPage';
import SupportPage from './pages/SupportPage';
import AboutPage from './pages/AboutPage';
import BookingsPage from './pages/BookingsPage';
import BookingSuccess from './pages/BookingSuccess';
import Footer from './components/Footer';

${sliceLines(563, lines.length)}
`;

fs.writeFileSync(appFile, appContent);

console.log("Refactoring complete.");
