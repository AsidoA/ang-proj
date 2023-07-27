import { Component, OnInit } from '@angular/core';
import { CarsService } from '../services/cars.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  carsArray : any;

  constructor(private cars:CarsService) { }

  ngOnInit(): void {
    this.cars.loadData().subscribe(val =>{
      console.log(val);
      this.carsArray = val;
    })
  }

  onDelete(id){
    this.cars.deleteData(id);
  }

}
