type timeFormat = {
    (format?: string, currentTime?: Date): string;  // 普通格式
    (currentTime: Date): string;                    // 只传递时间
};

const GetHours: timeFormat = (format?: string | Date, currentTime: Date = new Date()) => {
    // 判断第一个参数类型
    if (format instanceof Date) {
        currentTime = format; // 如果第一个参数是日期，则将其赋值给 currentTime
        format = "[地支]（[时辰]）[时刻]"; // 如果没有提供格式，则使用默认格式
    } else if (format === undefined) {
        format = "[地支]（[时辰]）[时刻]"; // 如果没有提供格式，则使用默认格式
    }

    const earthlyBranches  = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
    const timeDivisions  = ["夜半", "鸡鸣", "平旦", "日出", "食时", "隅中", "日中", "日昳", "晡时", "日入", "黄昏", "人定"];
    const CNint = ['一', '二', '三', '四', '五', '六', '七', '八'];

    const hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    const i = Math.floor((hours + 1) / 2);

    // 计算是否延长分钟
    minutes = (Math.floor((hours - 1) / 2) === i) ? (60 + minutes) : minutes; 

    // 替换格式中的占位符
    return format
        .replace("[地支]", earthlyBranches[i] + '时')
        .replace("[时辰]", timeDivisions[i])
        .replace("[时刻]", CNint[Math.floor(minutes / 15)] + '刻');
};

console.log(GetHours());

export { GetHours };
export type { timeFormat };