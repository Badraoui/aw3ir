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

  constructor(
    private route: ActivatedRoute,
    private meteoService: MeteoService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getMeteo();
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
      this.meteoService.get5daysMeteo(name)
      .then(houssem => this.result = houssem)
      .catch(fail => this.result = fail);
    }
  }

}