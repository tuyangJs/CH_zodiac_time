![](s.png)

## 取中国古典时间

**天干地支时辰**‌是中国古代用来纪时的一种方法，将一天分为十二个时辰，每个时辰对应一个地支，共十二个地支：子、丑、寅、卯、辰、巳、午、未、申、酉、戌、亥。每个时辰相当于现在的两个小时。‌12

### 天干地支时辰的具体时间

| 时辰 | 时间范围 |
|------|----------|
| 子时 | 23:00 - 01:00 |
| 丑时 | 01:00 - 03:00 |
| 寅时 | 03:00 - 05:00 |
| 卯时 | 05:00 - 07:00 |
| 辰时 | 07:00 - 09:00 |
| 巳时 | 09:00 - 11:00 |
| 午时 | 11:00 - 13:00 |
| 未时 | 13:00 - 15:00 |
| 申时 | 15:00 - 17:00 |
| 酉时 | 17:00 - 19:00 |
| 戌时 | 19:00 - 21:00 |
| 亥时 | 21:00 - 23:00 |

### 安装

```bash
npm i chinesehours 
```



### 使用例子

```typescript
import { GetHours } from 'chinesehours' 
console.log(GetHours())
//log
{
  hours: 23,
  Dzhi: '子',
  HoursCh: '夜半',
  minutes: 59,
  momentType: '初',
  Amoment: 3,
  momentText: '子初四刻',
  format: '子时（夜半）子初四刻'
}

```

#### 返回说明

- `Object`：包含公历和农历详细信息的对象。
  - `hours`：当前小时数（24小时制）。
  - `Dzhi`：地支名称（如“子时”）。
  - `HoursCh`：时辰中文名称（如“鸡鸣”）。
  - `minutes`：当前分钟数。
  - `momentType`：刻的分类（“初”或“正”）。
  - `Amoment`：刻数（0到3）。
  - `momentText`：完整的时刻描述（如“子初一刻”）。
  - `format`：格式化后的完整时间文本。

#### 自定义时间格式

##### 变量列表：

- `地支`  - 子时
- `时辰`  - 夜半
- `时刻` - 子正 & 子初

```typescript
import { GetHours } from 'chinesehours' 
console.log(GetHours('地支：[地支] 时辰：[时辰] 时刻:[时刻]'))

```

#### 指定时间

```typescript
import { GetHours } from 'chinesehours' 
const customDate = new Date('2024-12-24T14:30:00');
console.log(GetHours(customDate))
```

#### 同时自定义格式和指定时间

```typescript
import { GetHours } from 'chinesehours' 
const customDate = new Date('2024-12-24T14:30:00');
console.log(GetHours('地支：[地支] - 时刻:[时刻]',customDate))
```

## 取中国农历

`Calendar` 模块提供了公历与农历之间的转换、节日查询、节气计算等功能。以下是该模块中导出的各个函数及其使用方法。

------

### 使用例子

```typescript
import { Calendar } from 'chinesehours' 
console.log(Calendar.solar2lunar(1987, 11, 1));
//log
 {
  lunarYear: 1987,
  lunarYearCN: '一九八七',
  lunarMonth: 9,
  lunarDay: 10,
  lunarMonthDays: 29,
  fullLunarMonthString: '九月初十',
  zodiac: '兔',
  IMonthCn: '九月',
  IDayCn: '初十',
  solarYear: 1987,
  solarYearCN: '一九八七',
  solarMonth: 11,
  solarDay: 1,
  solarMonthDays: 30,
  gzYear: '丁卯',
  gzMonth: '庚戌',
  gzDay: '甲寅',
  isToday: false,
  isLeapMonth: false,
  isLeapYear: false,
  nWeek: 7,
  ncWeek: '星期日',
  isTerm: false,
  Term: '',
  constellation: '天蝎座',
  GzNy: '炉中火',
  astroEn: 'Scorpio',
  isFestival: false,
  festivalName: '',
  festivalEnName: '',
  isLunarFestival: false
}

```

[返回数据结构说明](#18-solar2lunaryear-number--string--date--dayjs-month-number--string-day-number--string)

### 1. `getYearCN(year: number)`

**功能描述**：将年份转换为中文表示形式（如：1989 -> 一九八九）。

**参数**：

- `year` (`number`)：年份数字，范围为1900-2099。

**返回值**：

- `string`：年份的中文表示形式。

**示例**：

```typescript
console.log(Calendar.getYearCN(1989)); // 输出：一九八九
```

------

### 2. `lunarYearDays(y: number)`

**功能描述**：返回农历y年的总天数。

**参数**：

- `y` (`number`)：年份数字，范围为1900-2099。

**返回值**：

- `number`：该年农历的总天数。

**示例**：

```typescript
console.log(Calendar.lunarYearDays(1987)); // 输出：387
```

------

### 3. `leapMonth(y: number)`

**功能描述**：返回农历y年是否有闰月，若有则返回闰月是哪个月（1-12），否则返回0。

**参数**：

- `y` (`number`)：年份数字，范围为1900-2099。

**返回值**：

- `number`：闰月是哪个月（1-12），若无闰月则返回0。

**示例**：

```typescript
console.log(Calendar.leapMonth(1987)); // 输出：6
```

------

### 4. `leapDays(y: number)`

**功能描述**：返回农历y年闰月的天数，若该年没有闰月则返回0。

**参数**：

- `y` (`number`)：年份数字，范围为1900-2099。

**返回值**：

- `number`：闰月的天数（0, 29 或 30）。

**示例**：

```typescript
console.log(Calendar.leapDays(1987)); // 输出：29
```

------

### 5. `monthDays(y: number, m: number)`

**功能描述**：返回农历y年m月（非闰月）的总天数。

**参数**：

- `y` (`number`)：年份数字，范围为1900-2099。
- `m` (`number`)：月份数字，范围为1-12。

**返回值**：

- `number`：该月的天数（29 或 30），若月份参数错误则返回-1。

**示例**：

```typescript
console.log(Calendar.monthDays(1987, 9)); // 输出：29
```

------

### 6. `solarDays(y: number, m: number)`

**功能描述**：返回公历y年m月的天数。

**参数**：

- `y` (`number`)：年份数字，范围为1900-2099。
- `m` (`number`)：月份数字，范围为1-12。

**返回值**：

- `number`：该月的天数（28, 29, 30 或 31），若月份参数错误则返回-1。

**示例**：

```typescript
console.log(Calendar.solarDays(1987, 2)); // 输出：28
```

------

### 7. `totianGandiZhiYear(lYear: number)`

**功能描述**：将农历年份转换为干支纪年。

**参数**：

- `lYear` (`number`)：农历年份数字，范围为1900-2099。

**返回值**：

- `string`：干支纪年字符串。

**示例**：

```typescript
console.log(Calendar.totianGandiZhiYear(1987)); // 输出：丁卯年
```

------

### 8. `getConstellation(cMonth: number, cDay: number)`

**功能描述**：根据公历月和日判断所属星座。

**参数**：

- `cMonth` (`number`)：公历月份，范围为1-12。
- `cDay` (`number`)：公历日期，范围为1-31。

**返回值**：

- `string`：星座的中文名称。

**示例**：

```typescript
console.log(Calendar.getConstellation(3, 21)); // 输出：白羊座
```

------

### 9. `getFestival(solarMonth: number, solarDay: number, lunarMonth: number, lunarDay: number, isTerm: boolean, term: string | undefined, lunarYear: number)`

**功能描述**：根据公历月份、公历日期、农历月份、农历日期、节气判断是否为节日，并返回节日对象。

**参数**：

- `solarMonth` (`number`)：公历月份，范围为1-12。
- `solarDay` (`number`)：公历日期，范围为1-31。
- `lunarMonth` (`number`)：农历月份，范围为1-12。
- `lunarDay` (`number`)：农历日期，范围为1-30。
- `isTerm` (`boolean`)：是否为节气。
- `term` (`string | undefined`)：节气名称。
- `lunarYear` (`number`)：农历年份数字，范围为1900-2099。

**返回值**：

- `Festival`：节日对象，包含节日信息。

**示例**：

```typescript
const festival = Calendar.getFestival(1, 1, 11, 1, false, undefined, 1987);
console.log(festival); // 输出：{ ... }
```

------

### 10. `totianGandiZhi(offset: number)`

**功能描述**：根据偏移量返回对应的干支。

**参数**：

- `offset` (`number`)：相对甲子的偏移量。

**返回值**：

- `string`：干支字符串。

**示例**：

```typescript
console.log(Calendar.totianGandiZhi(1)); // 输出：乙丑
```

------

### 11. `getTerm(y: number, n: number)`

**功能描述**：获取公历y年第n个节气的日期。

**参数**：

- `y` (`number`)：年份数字，范围为1900-2099。
- `n` (`number`)：节气序号，范围为1-24。

**返回值**：

- `number`：节气的日期。

**示例**：

```typescript
console.log(Calendar.getTerm(1987, 3)); // 输出：4
```

------

### 12. `toChinaMonth(m: number)`

**功能描述**：将农历月份转换为中文表示形式。

**参数**：

- `m` (`number`)：月份数字，范围为1-12。

**返回值**：

- `string`：农历月份的中文表示形式。

**示例**：

```typescript
console.log(Calendar.toChinaMonth(12)); // 输出：腊月
```

------

### 13. `toChinaDay(d: number)`

**功能描述**：将农历日期转换为中文表示形式。

**参数**：

- `d` (`number`)：日期数字，范围为1-30。

**返回值**：

- `string`：农历日期的中文表示形式。

**示例**：

```typescript
console.log(Calendar.toChinaDay(21)); // 输出：廿一
```

------

### 14. `getAnimal(y: number)`

**功能描述**：根据年份返回生肖。

**参数**：

- `y` (`number`)：年份数字，范围为1900-2099。

**返回值**：

- `string`：生肖的中文名称。

**示例**：

```typescript
console.log(Calendar.getAnimal(1987)); // 输出：兔
```

------

### 15. `isLeapYear(solarYear: number): boolean | string`

**功能描述**：判断公历年份是否为闰年。

**参数**：

- `solarYear` (`number`)：公历年份数字，范围为1901-2099。

**返回值**：

- `boolean | string`：如果是闰年返回 `true`，否则返回 `false`；如果年份不在合法范围内则返回提示字符串。

**示例**：

```typescript
console.log(Calendar.isLeapYear(1987)); // 输出：false
```

------

### 16. `countSolarMonthDays(solarYear: number, solarMonth: number): number | string`

**功能描述**：返回公历某年某月的天数。

**参数**：

- `solarYear` (`number`)：公历年份数字，范围为1900-2099。
- `solarMonth` (`number`)：公历月份数字，范围为1-12。

**返回值**：

- `number | string`：该月的天数；如果输入参数不合法则返回提示字符串。

**示例**：

```typescript

console.log(Calendar.countSolarMonthDays(1987, 7)); // 输出：31
```

------

### 17. `getAllFestival(solarYear: number | string)`

**功能描述**：获取某年所有的节日列表。

**参数**：

- `solarYear` (`number | string`)：公历年份数字或字符串，范围为1901-2099。

**返回值**：

- `Array<Festival>`：节日对象数组。

**示例**：

```typescript
console.log(Calendar.getAllFestival(1987));
```

------

### 18. `solar2lunar(Year?: number | string | Date | Dayjs, Month?: number | string, Day?: number | string)`

**功能描述**：将公历日期转换为农历日期，并返回详细的农历信息。

**参数**：

- `Year` (`number | string | Date | Dayjs`)：年份，可以是数字、字符串、Date 对象或 Dayjs 对象。
- `Month` (`number | string`)：月份，可以是数字或字符串。
- `Day` (`number | string`)：日期，可以是数字或字符串。

**返回值**：

- `Object`：包含公历和农历详细信息的对象。
  - `lunarYear`: 农历年份
  - `lunarYearCN`:农历年份的中文表示，即将数字1987分开并用汉字表示：一九八七。
  - `lunarMonth`: 农历月份。
  - `lunarDay`: 10 农历日期，这个日期是农历的初十，即九月十日。
  - `lunarMonthDays`: 农历月份的天数，农历的九月有29天。
  - `fullLunarMonthString`: 完整的农历日期字符串。
  - `zodiac`: 生肖
  - `IMonthCn`: 农历月份的中文名称
  - `IDayCn`: 农历日期的中文名称，即初十。
  -  `solarYear`: 1987 公历年份，1987年是公历年份。
  -  `solarYearCN`: 公历年份的中文表示，即一九八七。
  -  `solarMonth`: 公历月份。
  -  `solarDay`: 公历日期。
  -  `solarMonthDays`: 公历月份的天数
  -  `gzYear`: 地支年份
  -  `gzMonth`: 天干地支月份
  -  `gzDay`: 天干地支日期。
  -  `isToday`: 是否是今天。
  -  `isLeapMonth`: 是否是闰月。
  -  `isLeapYear`: 是否是闰年。
  -  `nWeek`: 星期几的数字表示，7表示星期天。
  -  `ncWeek`: 星期几的中文表示，即星期日。
  -  `isTerm`: 是否是节气。
  -  `Term`: 节气名称。
  -  `constellation`: 星座，根据公历日期。
  -  `GzNy`: 五行，此日期的五行是炉中火。
  -  `astroEn`: 星座的英文表示。
  -  `isFestival`: 是否是节日。
  -  `festivalName`: 节日名称。
  -  `festivalEnName`: 节日的英文名称。
  -  `isLunarFestival`: 是否是农历节日。

```typescript
console.log(Calendar.solar2lunar(1987, 11, 1));
```

------

### 19. `lunar2solar(year: number, month: number, date: number, isLeapM: boolean)`

**功能描述**：将农历日期转换为公历日期，并返回详细的公历信息。

**参数**：

- `year` (`number`)：年份数字，范围为1901-2099。
- `month` (`number`)：月份数字，范围为1-12。
- `date` (`number`)：日期数字，范围为1-30。
- `isLeapM` (`boolean`)：是否为闰月。

**返回值**：

- `Object`：包含公历和农历详细信息的对象。

**示例**：

```typescript
console.log(Calendar.lunar2solar(1987, 9, 10, false));
```
