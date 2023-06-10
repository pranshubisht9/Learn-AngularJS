import { Component, Input, OnInit, Output } from '@angular/core';
import { RoomList } from '../rooms';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css']
})
export class RoomsListComponent implements OnInit {

  @Input() rooms: RoomList[] = [];
  @Output() selectedRoom = new EventEmitter<RoomList>();

  constructor() { }

  ngOnInit() {
  }

}
