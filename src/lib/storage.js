const appName = 'doba-react';

export function loadState() {
  try {
    const serialized = localStorage.getItem(appName);
    if (serialized === null) return undefined;
    return JSON.parse(serialized);
  } catch (err) {
    return undefined;
  }
}

export function saveState(state) {
  try {
    const serialized = JSON.stringify(state);
    localStorage.setItem(appName, serialized);
  } catch (err) {
    // ignore
  }
}

export function clearState() {
  try {
    localStorage.removeItem(appName);
  } catch (err) {
    // ignore
  }
}
