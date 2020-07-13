import { OnInit, Component } from '@angular/core';
import { BarOption } from '../OptionCreator/BarOption';

@Component({
    templateUrl: './history.component.html'
})
export class History_Component implements OnInit {
    Sample:BarOption;
    ngOnInit(): void {
        let category = ['夏', '商', "周", "秦", "汉", "三国", "两晋"];
        let value = [50, 100, 150, 70, 80, 120, 90];
    
        this.Sample = BarOption.CreatePictorialBar(category, value,true,'image://assets/image/青铜器.png');
        this.Sample.series[0].label.show = false;
        this.Sample.xAxis["axisLabel"] = { interval: 0, rotate: 45 }
    }

}