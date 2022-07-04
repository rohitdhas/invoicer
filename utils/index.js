export function getValue(key) {
  const val = localStorage.getItem(key);
  if (val) {
    return JSON.parse(val);
  } else {
    return null;
  }
}

export function setValue(key, value) {
  const val = getValue(key);
  if (!val) {
    localStorage.setItem(key, JSON.stringify([value]));
  } else {
    let newArr = [...val, value];
    localStorage.setItem(key, JSON.stringify(newArr));
  }
}
