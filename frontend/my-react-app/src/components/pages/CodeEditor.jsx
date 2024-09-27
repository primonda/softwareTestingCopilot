// src/App.js
import React from 'react';
import MonacoEditor from 'react-monaco-editor';

export function CodeEditor() {
  return (
    <div className="App">
      <h1>Code Execution App</h1>
      <MonacoEditor
        width="100%"
        height="400"
        language="javascript"
        theme="vs-dark"
        value="// Start coding here..."
      />
    </div>
  );
}
