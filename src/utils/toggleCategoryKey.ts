export const toggleCategoryKey = (current: string[], key: string) => {
  if (current.includes(key)) {
    return current.filter((item) => item !== key);
  }

  if (current.length < 5) {
    return [...current, key];
  }

  return current;
};
