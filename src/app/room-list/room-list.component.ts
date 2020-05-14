import { Component, OnInit } from '@angular/core';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})


export class RoomListComponent implements OnInit {
  public roomDetailsList = ['The Deluxe Room','The Premier Room','The Family Room'];
  public room = [];
  roomList: any[];
  arrayOfImages: any = [];
  array = [];
  arrayList = [];
  constructor( private roomService:RoomService) {

  }
  
  ngOnInit() {
    // this.roomService.storeRoomDetails().subscribe(
    //   (response) => console.log(response),
    //   (error) => console.log(error)
    // )
    this.roomService.getRoomListData().subscribe(res => {
        this.roomList = res.data;
        // this.array = res.data[0].roomCarousal;
        // var a = this.array.keys();
        // for(let ex of a){
        //   this.arrayList.push(ex);
        // }  
        // console.log(this.arrayList);
    });
  }
  selectedRoom(id) {
    this.roomService.roomId(id);
    
    // this.room.push(id);
    // localStorage.setItem('room', id);
    // localStorage.roomItem = JSON.stringify(this.room);
    // this.roomList;
    // for (var i = 0; i < this.roomList.length; i++) {
    //   console.log(this.roomList[i]);
    //   if (this.roomList[i].roomId == this.selectedroomId){
    //     alert(this.roomList[i].roomName + 'was added to list');
    //     localStorage.roomItem = JSON.stringify(this.room);
    //     this.room.push(this.roomList[i]);
    //   }
    // }
  }
}
