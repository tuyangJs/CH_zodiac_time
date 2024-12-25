import { GetHours ,Calendar} from './dist/index.js'
console.log(Calendar.solar2lunar(1987, 11, 1));
for (let h = 0; h < 24; h++) {
    const date = new Date();
    date.setHours(h, 59, 0, 0);  // 设置每个小时
    console.log(GetHours(date));
}