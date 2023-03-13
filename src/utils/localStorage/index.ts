export const setStorageItem = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getStorageItem = (key: string) => {
  return JSON.parse(localStorage.getItem(key)!);
};

export const removeStorageItem = (key: string) => localStorage.removeItem(key);

export const clearStorageItems = () => {
  localStorage.clear();
};
