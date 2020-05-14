import { Component, OnInit } from '@angular/core';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-room-data',
  templateUrl: './room-data.component.html',
  styleUrls: ['./room-data.component.css']
})
export class RoomDataComponent implements OnInit {
  roomDetails: any[];
  room: any;
  // public room = localStorage.getItem('room')
  data: any[];
  constructor( private roomService:RoomService) {

  }
  ngOnInit() {
    this.room = this.roomService.selectedRoomId;
    this.roomService.getRoomListData().subscribe(res => {
        this.roomDetails = res.roomData;
        this.selectRoomData();
    }); 
  }
  selectRoomData() {
    this.roomDetails.forEach( room => {
      if(room.roomId === this.room){
        this.data =  room;
      }
    })
  }
  
}
