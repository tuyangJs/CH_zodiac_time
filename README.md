![](s.png)

## 中国古典时间

**天干地支时辰**‌是中国古代用来纪时的一种方法，将一天分为十二个时辰，每个时辰对应一个地支，共十二个地支：子、丑、寅、卯、辰、巳、午、未、申、酉、戌、亥。每个时辰相当于现在的两个小时。‌12

### 天干地支时辰的具体时间

- ‌**子时**‌：`23:00`至`1:00`
- ‌**丑时**‌：`1:00`至`3:00`
- ‌**寅时**‌：`3:00`至`5:00`
- ‌**卯时**‌：`5:00`至`7:00`
- ‌**辰时**‌：`7:00`至`9:00`
- ‌**巳时**‌：`9:00`至`11:00`
- ‌**午时**‌：`11:00`至`13:00`
- ‌**未时**‌：`13:00`至`15:00`
- ‌**申时**‌：`15:00`至`17:00`
- ‌**酉时**‌：`17:00`至`19:00`
- ‌**戌时**‌：`19:00`至`21:00`
- ‌**亥时**‌：`21:00`至`23:00`

### 安装

```bash
npm i chinesehours 
```



### 使用例子

```javascript
import { GetHours } from 'chinesehours' 
console.log(GetHours())
//log 戌时（黄昏）子正三刻

```

#### 自定义时间格式

##### 变量列表：

- `地支`  - 子时
- `时辰`  - 夜半
- `时刻` - 子正 & 子初

```javascript
import { GetHours } from 'chinesehours' 
console.log(GetHours('地支：[地支] 时辰：[时辰] 时刻:[时刻]'))
//log 地支：戌时 时辰：黄昏 时刻:子初一刻

```

#### 指定时间

```javascript
import { GetHours } from 'chinesehours' 
const customDate = new Date('2024-12-24T14:30:00');
console.log(GetHours(customDate))
//log 未时（日昳）子正三刻
```

#### 同时自定义格式和指定时间

```javascript
import { GetHours } from 'chinesehours' 
const customDate = new Date('2024-12-24T14:30:00');
console.log(GetHours('地支：[地支] - 时刻:[时刻]',customDate))
//log 地支：未时 - 时刻:子正三刻
```

