export const sortSign = (data) => {
  if (!data) return;

  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.getMonth() + 1;

  const signs = data.reduce(
    (acc, sign) => {
      const [initDay, initMonth] = sign.init_date.split("-").map(Number);
      const [endDay, endMonth] = sign.end_date.split("-").map(Number);

      const isCurrent =
        (currentMonth === initMonth && currentDay >= initDay) ||
        (currentMonth === endMonth && currentDay <= endDay);

      const isUpcoming =
        currentMonth < initMonth ||
        (currentMonth === initMonth && currentDay < initDay);

      if (isCurrent) acc.currentSign = sign;
      else if (isUpcoming) acc.upcomingSigns.push(sign);
      else acc.pastSigns.push(sign);

      return acc;
    },
    { currentSign: null, upcomingSigns: [], pastSigns: [] }
  );
  signs.upcomingSigns.toSorted(compareDates);
  signs.pastSigns.toSorted(compareDates);

  if (signs.currentSign)
    return [signs.currentSign, ...signs.upcomingSigns, ...signs.pastSigns];
  return [...signs.upcomingSigns, ...signs.pastSigns];
};

const compareDates = (a, b) => {
  const [aDay, aMonth] = a.init_date.split("-").map(Number);
  const [bDay, bMonth] = b.init_date.split("-").map(Number);
  return aMonth - bMonth || aDay - bDay;
};
