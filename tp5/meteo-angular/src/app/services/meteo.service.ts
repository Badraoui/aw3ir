import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MeteoService {

  constructor(private http : HttpClient) { }





  getMeteo(name: string): Promise<any> {
    console.log('from service', name);

    return fetch('https://api.openweathermap.org/data/2.5/weather/?q=' + name + '&units=metric&lang=fr&appid=0ada432b59deb9716c357092c5f79be6')

      .then(function (response) {
        return response.json();
      })
      .then(function (json) {

        // test du code retour
        // 200 = OK
        // 404 = city not found 
        if (json.cod === 200) {
          return Promise.resolve(json);
        } else {
          console.error('Météo introuvable pour ' + name + ' (' + json.message + ')');

          return Promise.reject('Météo introuvable pour ' + name + ' (' + json.message + ')');
        }

      });

  }

  get5daysMeteo(name: string): Promise<any> {
    console.log('from service', name);




    return fetch('https://api.openweathermap.org/data/2.5/forecast/?q='+ name +'&lang=fr&appid=cf16761d3c10ad23572e697143cac7b5')
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {

        // test du code retour
        // 200 = OK
        // 404 = city not found 
        if (json.cod === 200) {
          return Promise.resolve(json);
        } else {
          console.error('Météo introuvable pour ' + name + ' (' + json.message + ')');

          return Promise.reject('Météo introuvable pour ' + name + ' (' + json.message + ')');
        }

      });

  }


  getData ( name : any ) :Observable <any> {

   return this.http.get<any>('https://api.openweathermap.org/data/2.5/forecast/?q='+ name +'&lang=fr&appid=cf16761d3c10ad23572e697143cac7b5')
  }
}