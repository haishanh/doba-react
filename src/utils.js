function loadState() {
  try {
    const serialized = localStorage.getItem('state');
    if (serialized === null) {
      return undefined;
    }
    return JSON.parse(serialized);
  } catch (err) {
    return undefined;
  }
}

function saveState(state) {
  try {
    const serialized = JSON.stringify(state);
    localStorage.setItem('state', serialized);
  } catch (err) {
    // ignore
  }
}

function clearState() {
  try {
    localStorage.removeItem('state');
  } catch (err) {
    // ignore
  }
}

export { loadState, saveState, clearState };
