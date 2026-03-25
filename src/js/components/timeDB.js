"use strick"
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
const getMonthName = (index) => {
    return months[index]
};
const getFormatMonth = (month, start, end) => {
    return month.substring(start, end);
}
export {getMonthName, getFormatMonth};