export function getPrimaryColor<T>(key: string) {
  const getItem = localStorage.getItem(key);

  return getItem as T;
}
