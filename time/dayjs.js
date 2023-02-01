import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import "dayjs/plugin/updateLocale";

dayjs.locale("zh-cn");
dayjs.updateLocale("zh-cn", { weekStart: 0 });

export default dayjs;
