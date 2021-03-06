# 可视化实验室

## 关于技术选型

Angular比较熟悉，所以没有选择国内热门的VUE。做可视化对于前端框架没有什么具体要求。同时这里也是对于标准化和美化echarts的一些实验性的东西，所以没有使用大屏布局，直接使用了AdminLTE这样的后台管理系统。

## 关于Echarts的封装

```ts
import { OptionBase, Axis, Series } from './OptionBase';

export class LineOption extends OptionBase {

    public static CreateLineItem(value: number[]) {
        let item = new Series();
        item.type = 'line';
        item.data = value;
        return item;
    }
    public static CreateLine(category: string[], value: number[]) {
        let o = new LineOption();
        o.tooltip = { trigger: 'axis' };
        o.xAxis = new Axis();
        o.yAxis = new Axis();
        o.xAxis.data = category;
        o.series.push(this.CreateLineItem(value));
        return o;
    }
}
```

## 具体使用方法

```ts
    category = ['唐三', '戴沐白', "马红俊", "奥斯卡", "小舞", "宁荣荣", "朱竹清"];
    value = [50, 100, 150, 70, 80, 120, 90];
    Sample = LineOption.CreateLine(this.category, this.value);
    this.Bar_Line_Mix.series.push(BarOption.CreateBarItem(this.value2));
    this.Bar_Line_Mix.series[0].itemStyle.color = ChartColor.geLinearGradient(Direction.Vertical, '#32D3EB', '#FCCE10');
    this.Bar_Line_Mix.series[1].itemStyle.color = ChartColor.geLinearGradient(Direction.Vertical, '#c86589', '#06a7ff');
    OptionHelper.series_SetAreaStyle(this.Bar_Line_Mix.series[0], areastyle);


```

## 封装进度

### 基础

- 折线图
  - markPoint
  - markLine
  - markArea
- 柱状图
  - 象形柱图
- 极坐标图
- 雷达图
- 散点图
- 地图
- 百度地图
  - 路径图

### 高级

- 组合图
  - 雷达图 - 饼图
  - 饼图 - 折线图
- 时间轴图

### 3D

- 3D散点图
- 3D柱状图

### Demo

- 新冠肺炎：多种图形混合
- 斗罗大陆：Chart组件背景图
- 中国风：全屏背景图，边框修饰

## 特效

![柱状图](image/斗罗大陆.png)

![柱状图](image/柱状图.png)

![折线图](image/折线图.jpg)

![环形图](image/环形图.jpg)

![南丁格尔图](image/南丁格尔图.jpg)

![折线曲线图](image/折线曲线图.jpg)

## 微信公众号：数据可视化俱乐部

![微信公众号：数据可视化俱乐部](qrcode_for_gh_a8991e1cdfec_344.jpg)
