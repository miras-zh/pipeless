import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface DataLogin {
  name:string,
  close:boolean,
  login:boolean
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  nameUser!:string;
  closeStatus!:boolean;


  @Input() title: string = '';
  @Output() onClose:EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onAddName:EventEmitter <DataLogin> = new EventEmitter<DataLogin>();
  dataModal: DataLogin = {
    name: '',
  close: true,
  login: true
  };
  

  constructor() { }

  ngOnInit(): void {
  }

  login(){
    this.closeStatus = false;
    this.dataModal.name  = this.nameUser;
    this.dataModal.login = true;
    this.dataModal.close = false;
    this.onAddName.emit(this.dataModal)
  }
  close(){
    this.closeStatus = true;
    this.onClose.emit(this.closeStatus);
  }
}
