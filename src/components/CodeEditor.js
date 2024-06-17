import React, { useState } from 'react';
import { Highlight, themes } from 'prism-react-renderer';
import './CodeEditor.css';

const CodeEditor = () => {
  const [code, setCode] = useState('// Write your code here\n');

  const handleChange = (newCode) => {
    setCode(newCode);
  };

  return (
    <div className="code-editor">
      <div className="editor-wrapper">
        <Highlight
          code={code}
          language="jsx"
          theme={themes.github}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
        <textarea
          value={code}
          onChange={(e) => handleChange(e.target.value)}
          spellCheck="false"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          className="code-editor-textarea"
        />
      </div>
    </div>
  );
};

export default CodeEditor;
