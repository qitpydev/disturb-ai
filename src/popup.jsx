import { useState, useEffect } from 'react';

function Popup() {
  const [focus, setFocus] = useState('');

  useEffect(() => {
    chrome.storage.sync.get('focusGoal', (data) => {
      if (data.focusGoal) {
        setFocus(data.focusGoal);
      }
    });
  }, []);

  const saveFocus = (e) => {
    e.preventDefault();
    if (focus.trim()) {
      chrome.storage.sync.set({ focusGoal: focus.trim() });
    }
  };

  return (
    <form onSubmit={saveFocus}>
      <input
        type="text"
        placeholder="What are you focusing on?"
        value={focus}
        onChange={(e) => setFocus(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
}

export default Popup;
