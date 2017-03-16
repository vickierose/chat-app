import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'ct-chat-list',
  styleUrls: ['./chat-list.component.css'],
  templateUrl: './chat-list.component.html'
})

export class ChatListComponent implements OnInit {

  selectedId: number;

  constructor(private route: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit() {

  }

  select(chat) {
    this.selectedId = chat.id;

    // Navigate with relative link
    this.router.navigate(['chat', chat.id])
  }

}