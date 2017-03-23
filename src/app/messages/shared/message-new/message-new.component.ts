import { Component, OnInit } from '@angular/core';
import { Message } from './message-new.interface';

@Component({
  selector: 'ct-message-new',
  styleUrls: ['./message-new.component.scss'],
  templateUrl: './message-new.component.html'
})

export class MessageNewComponent implements OnInit {
  message: Message = {
    text: ''
  }
  
  constructor() {}

  onSubmit (form){
    console.log (form.value);
  }

  ngOnInit() {}

}