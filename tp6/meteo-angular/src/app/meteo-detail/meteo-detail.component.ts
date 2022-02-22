import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {MeteoService} from '../services/meteo.service'
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-meteo-detail',
  templateUrl: './meteo-detail.component.html',
  styleUrls: ['./meteo-detail.component.scss']

})
export class MeteoDetailComponent implements OnInit {

  meteo : any;
  result :any;
  Meteo5dayData: any[]= [];
  constructor(
    private route: ActivatedRoute,
    private meteoService: MeteoService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getMeteo();
    this.get5daysMeteo();
    console.log(this.Meteo5dayData);
  }

  getMeteo(): void {
    const name = this.route.snapshot.paramMap.get('name'); 

    console.log('getmeteo',name);
    if(name)
    {
      this.meteoService.getMeteo(name)
      .then(adem => this.meteo = adem)
      .catch(fail => this.meteo = fail);
    }
  }

  get5daysMeteo(): void {
    const name = this.route.snapshot.paramMap.get('name'); 

    console.log('get5daysMeteo',name);
    if(name)
    {
      this.meteoService.getData(name).subscribe(data =>{
         for ( let i=0 ; i < data["list"].length ; i++ ){
             
          this.Meteo5dayData[i]=data["list"][i]["main"]['temp']-271;

         }
       // console.log(data["list"][0]["main"]['temp']-271);
      })
      //this.meteoService.get5daysMeteo(name)
      //.then(houssem => this.result = houssem)
      //.catch(fail => this.result = fail);
    }
  }
  

}