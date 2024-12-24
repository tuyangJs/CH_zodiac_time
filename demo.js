import { GetHours } from './dist/index.js'
for (let h = 0; h < 24; h++) {
    const date = new Date();
    date.setHours(h, 59, 0, 0);  // 设置每个小时
    console.log(`时间 ${date}: ${GetHours(date)}`);
}