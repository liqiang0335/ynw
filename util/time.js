const distanceInWordsToNow = require("date-fns/distance_in_words_to_now");
const deLocale = require("date-fns/locale/zh_cn");

export const distanceToNow = function(date) {
  const end = new Date(date);
  return distanceInWordsToNow(end, {
    includeSeconds: true,
    locale: deLocale,
    addSuffix: true
  });
};
