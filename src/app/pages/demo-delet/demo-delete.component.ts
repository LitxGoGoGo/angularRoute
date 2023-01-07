import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-demo-delete',
  templateUrl: './demo-delete.component.html',
  styleUrls: ['./demo-delete.component.less']
})
export class DemoDeleteComponent implements OnInit{

  ngOnInit(): void {

  }

  items = [1,2,3,4,5,6,7,8,9,10]

  onDelete(item:any) {
    console.log(`${item} was delete`)
  }
}
