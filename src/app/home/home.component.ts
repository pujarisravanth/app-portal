import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDetails } from '../User';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user : UserDetails;

  constructor(
    private route: ActivatedRoute,
    private httpService : HttpService
  ) { }

  ngOnInit() {
    const name= this.route.snapshot.paramMap.get('name');
    this.httpService.getUserDetails(name).subscribe(data => console.log(data));
    //this.httpService.getUserDetails(name).subscribe(data => this.user = Object.assign({}, data));
    //console.log(this.user);
  }

}
