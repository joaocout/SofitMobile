export const formatDate = (inputDate: string) => {
  const date = new Date(inputDate);
  return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
};
