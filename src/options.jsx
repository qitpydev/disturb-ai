import { useState, useEffect } from 'react';

function Options() {
  const [apiKey, setApiKey] = useState('');
  const [threshold, setThreshold] = useState(5);

  useEffect(() => {
    chrome.storage.sync.get(['apiKey', 'threshold'], (data) => {
      if (data.apiKey) setApiKey(data.apiKey);
      if (data.threshold) setThreshold(data.threshold);
    });
  }, []);

  const saveOptions = (e) => {
    e.preventDefault();
    chrome.storage.sync.set({ apiKey, threshold: Number(threshold) });
  };

  return (
    <form onSubmit={saveOptions}>
      <label>
        OpenAI API Key
        <input type="password" value={apiKey} onChange={(e) => setApiKey(e.target.value)} />
      </label>
      <label>
        Distraction Threshold
        <input type="number" min="1" value={threshold} onChange={(e) => setThreshold(e.target.value)} />
      </label>
      <button type="submit">Save</button>
    </form>
  );
}

export default Options;
