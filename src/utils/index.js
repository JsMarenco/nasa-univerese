export const returnDate = (objDate = "") => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let stringdate = String(objDate);

  let finalDate;

  let arrayDate = stringdate.split(" ");

  let rawMonth = Number(months.indexOf(arrayDate[1]));

  let newMonth = rawMonth + 1;

  let month = newMonth < 10 ? `0${newMonth}` : newMonth;

  let day = arrayDate[2];

  let year = arrayDate[3];

  finalDate = `${year}-${month}-${day}`;

  return finalDate;
};

export const changeWindowTitle = (new_title) => {
  document.title = new_title;
};

export const getScreenWith = () => {
  let width = window.screen.width;

  if (width < 500) {
    return true;
  } else {
    return false;
  }
};
