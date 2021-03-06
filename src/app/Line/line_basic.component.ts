import { Component, OnInit } from '@angular/core';
import { LineUtility, LineSeries } from '../EChartsUtility/Series/Line';
import { Bar } from '../EChartsUtility/Series/Bar';
import { ChartColor } from '../EChartsUtility/ChartColor'
import { OptionHelper } from '../EChartsUtility/OptionHelper';
import { MarkLineType, MarkPointType, Direction } from '../EChartsUtility/Enum';
import { AreaStyle } from '../EChartsUtility/Style';
import { Graphic, GraphicGrid} from '../EChartsUtility/Graphic'

@Component({
  templateUrl: './line_basic.component.html'
})
export class Line_BasicComponent implements OnInit {
  title = '折线图-基本';
  category = ['唐三', '戴沐白', "马红俊", "奥斯卡", "小舞", "宁荣荣", "朱竹清"];
  value = [50, 100, 150, 70, 80, 120, 90];
  value2 = [130, 40, 50, 120, 140, 70, 40];
  Sample = LineUtility.CreateLine(this.category, this.value);
  Sample_Smooth = LineUtility.CreateLine(this.category, this.value);
  GradientSample = LineUtility.CreateLine(this.category, this.value);
  GradientSample_H = LineUtility.CreateLine(this.category, this.value);
  GradientSample_Background = LineUtility.CreateLine(this.category, this.value);
  Bar_Line_Mix = LineUtility.CreateLine(this.category, this.value);

  ngOnInit(): void {
    this.Sample.xAxis[0].axisLabel = { interval: 0, rotate: 45 }
    OptionHelper.chart_SetToolBox(this.Sample, true, false, false, false, false, false);
    let imggrid = new GraphicGrid();
    imggrid.height = 50;
    imggrid.width = 50;
    imggrid.top = 0;
    imggrid.left = 0;
    let g = Graphic.CreateGraphic_Image("http://datavisualization.club/upload/2020/06/6pl00l1tp4ichrair393e86071.jpg", imggrid, null)
    this.Sample.graphic = [g];
    (<LineSeries>this.Sample.series[0]).smooth = true; //动态添加，简易写法
    LineUtility.series_SetMarkLine(this.Sample.series[0], MarkLineType.max, "最大");
    LineUtility.series_SetMarkLine(this.Sample.series[0], MarkLineType.min, "最小");
    LineUtility.series_SetMarkLine(this.Sample.series[0], MarkLineType.average, "平均");
    LineUtility.series_SetMarkLine(this.Sample.series[0], MarkLineType.median, "中位数");

    this.Sample_Smooth.xAxis[0].axisLabel = { interval: 0, rotate: 45 };
    (<LineSeries>(this.Sample_Smooth.series[0])).smooth = true; //类型强制转换
    LineUtility.series_SetMarkPoint(this.Sample_Smooth.series[0], MarkPointType.max, "最大");
    LineUtility.series_SetMarkPoint(this.Sample_Smooth.series[0], MarkPointType.min, "最小");
    LineUtility.series_SetMarkPoint(this.Sample_Smooth.series[0], MarkPointType.average, "平均");
    OptionHelper.chart_SetDataZoom(this.Sample_Smooth, 20, 80, Direction.Vertical);
    LineUtility.series_SetMarkArea(this.Sample_Smooth.series[0], "MarkArea-Max", MarkPointType.average, MarkPointType.average, MarkPointType.max, MarkPointType.max);
    LineUtility.series_SetMarkArea(this.Sample_Smooth.series[0], "MarkArea-Min", MarkPointType.average, MarkPointType.average, MarkPointType.min, MarkPointType.min);

    this.GradientSample.xAxis[0].axisLabel = { interval: 0, rotate: 45 }
    this.GradientSample.series[0]["smooth"] = true; //动态添加，简易写法
    this.GradientSample.series[0]["step"] = "end";
    this.GradientSample.series[0]["color"] = ChartColor.geLinearGradient(Direction.Horizontal);

    this.GradientSample_H.xAxis[0].axisLabel = { interval: 0, rotate: 45 }
    Object.assign(this.GradientSample_H.series[0], { smooth: true }); //动态添加标准写法
    this.GradientSample_H.series[0]["color"] = ChartColor.geLinearGradient(Direction.Vertical);

    this.GradientSample_Background.xAxis[0].axisLabel = { interval: 0, rotate: 45 };
    this.GradientSample_Background.series[0]["smooth"] = true;
    let areastyle: AreaStyle = {
      color: ChartColor.geLinearGradient(Direction.Vertical, '#A9F387', '#48D8BF'),
      opacity: 0.15
    }
    LineUtility.series_SetAreaStyle(this.GradientSample_Background.series[0], areastyle);
    this.GradientSample_Background.backgroundColor = ChartColor.geLinearGradient(Direction.Vertical, '#c86589', '#06a7ff');
    this.GradientSample_Background.tooltip['formatter'] = this.SpotToolTip;
    this.GradientSample_Background.tooltip['position'] = "inside";

    this.Bar_Line_Mix.series[0]["smooth"] = true;
    this.Bar_Line_Mix.series.push(Bar.BarUtility.CreateBarItem(this.value2));
    this.Bar_Line_Mix.series[0].itemStyle.color = ChartColor.geLinearGradient(Direction.Vertical, '#32D3EB', '#FCCE10');
    this.Bar_Line_Mix.series[1].itemStyle.color = ChartColor.geLinearGradient(Direction.Vertical, '#c86589', '#06a7ff');
    LineUtility.series_SetAreaStyle(this.Bar_Line_Mix.series[0], areastyle);
    this.Bar_Line_Mix.xAxis[0].axisLabel = { interval: 0, rotate: 45 }
  }

  SpotToolTip(val: any) {
    let url = "assets/image/" + val[0].name + "/头像.jpg";
    return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
      + val[0].name
      + '</div>'
      + '<img src="' + url + '" width="64px" height="64px" />';
  }
}
