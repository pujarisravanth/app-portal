import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../User';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user = new User();

  constructor(
    private route: ActivatedRoute,
    private httpService : HttpService
  ) { }

  ngOnInit() {
    const name= this.route.snapshot.paramMap.get('name');
    this.httpService.getUser(name).subscribe(data => this.user = { ...data });
    /*
    this.httpService.getUser(name).subscribe(data => this.user = { ...data },
    error => console.log(error), () => console.log(this.user.username));
    */
  }

}
