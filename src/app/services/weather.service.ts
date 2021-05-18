import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  //sacar longitud latitud
  locationDataUrl: string = '';
  
  constructor(private httpclient: HttpClient) { 
   this.locationDataUrl = 'https://freegeoip.app/json/';
    
    
  }

  getLocation(): Promise<any>{
    return this.httpclient.get<any>(this.locationDataUrl).toPromise();
  }
  
  //get weather in the location
  async getWeatherData(longitude: string, latitude: string){
    
    const response = await fetch(`http://www.7timer.info/bin/civillight.php?lon=${longitude}&lat=${latitude}&ac=0&unit=metric&output=json`);
    return await response.json();
  }
   
}
