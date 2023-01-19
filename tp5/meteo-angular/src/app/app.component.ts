import { Component, ViewChild } from '@angular/core';
import { MeteoComponent } from './meteo/meteo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  @ViewChild(MeteoComponent)
  public meteo : MeteoComponent | undefined ;

  title = '⛅ Weather webapp @Master 3ir²';


  onSubmit() {

    this.meteo?.onSubmit()
  }

}
