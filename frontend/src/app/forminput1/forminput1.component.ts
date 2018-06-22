import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-forminput1',
  templateUrl: './forminput1.component.html',
  styleUrls: ['./forminput1.component.css']
})
export class Forminput1Component implements OnInit {

  constructor(private router:Router,private http:HttpService) { }

  ngOnInit() {
  }

  signin(form){
    this.http.setForm(form.value)
    this.router.navigateByUrl('/part2')
  }
}
