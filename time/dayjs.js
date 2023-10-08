import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import "dayjs/plugin/updateLocale";

dayjs.locale("zh-cn");
dayjs.updateLocale("zh-cn", { weekStart: 0 });

var customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat);

export const isValidTime = (v) => dayjs(v, "YYYY-MM-DD HH:mm:ss", true).isValid();
export const isValidDate = (v) => dayjs(v, "YYYY-MM-DD", true).isValid();

export default dayjs;
