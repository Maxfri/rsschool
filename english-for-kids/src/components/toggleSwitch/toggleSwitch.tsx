import React from 'react';
import './toggleSwitch.css';

function ToggleSwitch({ setMode, mode }): JSX.Element {
  const handelSwitch = () => {
    if (mode === 'train') {
      setMode('game');
    } else {
      setMode('train');
    }
  };
  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        className="toggle-switch-checkbox"
        name="toggleSwitch"
        id="toggleSwitch"
        onClick={handelSwitch}
      />
      <label className="toggle-switch-label" htmlFor="toggleSwitch">
        <span className="toggle-switch-inner" />
        <span className="toggle-switch-switch" />
      </label>
    </div>
  );
}

export default ToggleSwitch;
