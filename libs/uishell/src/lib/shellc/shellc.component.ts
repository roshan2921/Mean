import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fsa-shellc',
  templateUrl: './shellc.component.html',
  styleUrls: ['./shellc.component.scss']
})
export class ShellcComponent implements OnInit {

  @Input() title!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
