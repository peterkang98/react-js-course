export const getStringedDate = (targetDate) => {
  let year = targetDate.getFullYear();
  let month = String(targetDate.getMonth() + 1).padStart(2, '0');
  let day = String(targetDate.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};