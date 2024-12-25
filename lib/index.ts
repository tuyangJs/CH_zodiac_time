import Calendar from "./CalendarCode/index.js"
import { Zhi, Hours } from "./CalendarCode/mod/ChineseEra.js";
type back = {
    hours: number;
    Dzhi: string;
    HoursCh: string;
    minutes: number;
    momentType: string;
    Amoment: number;
    momentText: string;
    format: string
}
type timeFormat = {
    (format?: string, currentTime?: Date): back
    (currentTime: Date): back
};

/**
 * 传入农历年月日以及传入的月份是否闰月获得详细的公历、农历o
 * @param format string  时间格式：[地支] [时辰] [时刻]
 * @param currentTime Date  时间格式
 * @return 时间文本："子时（鸡鸣）子初一刻"
 * @eg:console.log(GetHours());
 */
const GetHours: timeFormat = (format?: string | Date, currentTime: Date = new Date()) => {
    // 判断传入的第一个参数类型
    if (format instanceof Date) {
        currentTime = format; // 如果第一个参数是日期，则将其赋值给 currentTime
        format = "[地支]（[时辰]）[时刻]"; // 如果没有提供格式，则使用默认格式
    }
    // 如果 format 是 undefined，设置默认值
    if (!format) {
        format = "[地支]（[时辰]）[时刻]";
    }
    // 获取小时和分钟
    const hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    const CNint = ['一', '二', '三', '四',];
    const i = TimeIndex(hours) === 12 ? 0 : TimeIndex(hours);

    minutes = (TimeIndex(hours - 1) === i) ? (60 + minutes) : minutes //计算是否延长分钟大于60
    const moment = Math.floor(minutes / 15)  // 每时辰划分为8刻
    // 刻的分类：初刻和正刻
    let momentType = (moment < 4) ? "初" : "正";
    let Amoment = (moment % 4);  // 刻数从1到4，确保刻数正确
    // 替换格式中的占位符
    const momentText = `子${momentType}${CNint[Amoment]}刻`
    format = format!.replace("[地支]", Zhi[i] + '时');
    format = format.replace("[时辰]", Hours[i]);
    format = format.replace("[时刻]", momentText);

    // 时间索引函数
    function TimeIndex(h: number) {
        return Math.floor((h + 1) / 2);
    }

    return {
        hours,
        minutes,
        Dzhi: Zhi[i],
        HoursCh: Hours[i],
        momentType,
        Amoment,
        momentText,
        format,
    }
};

export { GetHours, Calendar };
export type { timeFormat };
