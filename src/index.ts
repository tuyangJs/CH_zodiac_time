
type timeFormat = (format?: string, currentTime?: Date) => string
const GetHours: timeFormat = (format: string = "[地支]（[时辰]）[时刻]", currentTime: Date = new Date()) => {

    // 获取小时和分钟
    const hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();

    const 十二地支 = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"]
    const 十二辰时 = ["夜半", "鸡鸣", "平旦", "日出", "食时", "隅中", "日平", "日昳", "晡时", "日入", "黄昏", "人定"]
    const CNint = ['一', '二', '三', '四', '五', '六', '七', '八']
    const i = TimeIndex(hours)
    minutes = (TimeIndex(hours - 1) === i) ? (60 + minutes) : minutes //计算是否延长分钟大于60
    const 刻 = Math.floor(minutes / 15)  // 每时辰划分为8刻

    format = format.replace("[地支]", 十二地支[i] + '时')
    format = format.replace("[时辰]", 十二辰时[i])
    format = format.replace("[时刻]", CNint[刻] + '刻')
    function TimeIndex(h: number) {
        return Math.floor((h + 1) / 2)
    }
    return format
}
export  { GetHours }
export type { timeFormat }