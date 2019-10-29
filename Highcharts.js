import * as Highcharts from "highcharts";
import * as Exporting from "highcharts/modules/exporting";
Exporting(Highcharts);

Highcharts.setOptions({
  global: {
    useUTC: true,
    timezoneOffset: 60 * -8
  },
  lang: {
    rangeSelectorZoom: "范围：",
    rangeSelectorFrom: "从",
    rangeSelectorTo: "至",
    months: [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12"
    ],
    shortMonths: [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12"
    ],
    weekdays: [
      "星期日",
      "星期一",
      "星期二",
      "星期三",
      "星期四",
      "星期五",
      "星期六"
    ]
  }
});

export default Highcharts;
