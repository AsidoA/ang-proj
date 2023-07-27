import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarsService } from './../services/cars.service';
import { Car } from '../models/car';

@Component({
  selector: 'app-dashdoard',
  templateUrl: './dashdoard.component.html',
  styleUrls: ['./dashdoard.component.css']
})
export class DashdoardComponent implements OnInit {

  car:Car

  constructor(private http:HttpClient,private carsservice:CarsService) { }

  ngOnInit(): void {
  }

  addCar(value: string): any {
    this.http.get<ApiResponse>(`https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q=${value}`).subscribe((data)=>{
      // this.carsservice.saveData(JSON.stringify(data.result.records))
      console.log(data.result.records[0])
      this.car = {
        car_name:data.result.records[0].tozeret_nm,
        plate_number : data.result.records[0].mispar_rechev,
        model:data.result.records[0].ramat_gimur,
        engine:data.result.records[0].degem_manoa,
        year:data.result.records[0].shnat_yitzur
      }
      this.carsservice.saveData(this.car)
    })
  }
}
interface ApiResponse {
  result: any;
}