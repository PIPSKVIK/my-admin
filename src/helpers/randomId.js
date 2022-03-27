export const generatedRandomId = () => {
  const randomIndex = (Date.now().toString(36));
  return randomIndex;
};