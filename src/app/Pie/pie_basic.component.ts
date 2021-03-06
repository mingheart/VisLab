import { OnInit, Component } from '@angular/core';
import { PieUtility, } from '../EChartsUtility/Series/Pie';
import { CommonFunction } from '../common'
import { ChartColor } from '../EChartsUtility/ChartColor'
import { OptionBase } from '../EChartsUtility/OptionBase';
@Component({
    templateUrl: './pie_basic.component.html'
})
export class Pie_BasicComponent implements OnInit {
    title = '饼图-基本';
    Sample: OptionBase;
    Sample_Nightingale: OptionBase;
    Sample_Band: OptionBase;
    ngOnInit(): void {
        let dataset = [
            { value: 50, name: '唐三' },
            { value: 100, name: '戴沐白' },
            { value: 150, name: '马红俊' },
            { value: 70, name: '奥斯卡' },
            { value: 80, name: '小舞' },
            { value: 120, name: '宁荣荣' },
            { value: 90, name: '朱竹清' },
        ];

        this.Sample = PieUtility.CreatePie(CommonFunction.clone(dataset), "65%");
        this.Sample.series[0].label.show = true;
        this.Sample.series[0]['color'] = ChartColor.colorlist_7_Baidu;
        this.Sample_Nightingale = PieUtility.CreateNightingale(CommonFunction.clone(dataset), "75%");
        this.Sample_Band = PieUtility.CreatePie(CommonFunction.clone(dataset), [40, 90]);
        this.Sample_Band.series[0]['color'] = ChartColor.colorlist_7_Baidu;
        this.Sample_Band.series[0].itemStyle['normal'] = {
            shadowBlur: 20,
            shadowColor: 'rgba(24,219,159,0.6)',
        };
    }
}