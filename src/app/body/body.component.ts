import {Component, Input, OnInit} from '@angular/core';
import {MyServiceService} from '../shared/my-service.service';
import {Router, NavigationEnd, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  @Input() DisplayReceived: boolean;
  @Input() titleToLookFor: string;
  currentRoute: number;

  constructor(private myService: MyServiceService, private route: ActivatedRoute) {}

  ngOnInit(): void {
/*    this.titleToLookFor = this.myService.getItemToLookFor();
    console.log('notif 11', this.myService.getItemToLookFor());
    console.log('notif 22', this.titleToLookFor);*/
    // console.log('kamatcho', window.location.href);
   // console.log('khalil', this.route.snapshot.url.length);
    this.currentRoute = this.route.snapshot.url.length;
  }


}
