import { Component, OnInit } from '@angular/core';
import { SumService } from '../services';

@Component({
  selector: 'app-sum',
  templateUrl: './sum.component.html',
  styleUrls: ['./sum.component.css']
})
export class SumComponent implements OnInit {

  constructor(private sumService: SumService) { }

  ngOnInit(): void {
  }

}