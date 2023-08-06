export const generateDatetimeOfMonthForward = (): Date => {
  const todayDate: Date = new Date();
  todayDate.setDate(todayDate.getDate() + 30);
  return todayDate;
};
