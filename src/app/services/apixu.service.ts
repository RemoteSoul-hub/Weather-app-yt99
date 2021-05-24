import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApixuService {
  constructor(private http: HttpClient) {}

  getWeather(location: any) {
    return this.http.get(
      "http://api.weatherstack.com/current?access_key=ff56dc42f3fee9bbcc2e9d08a5cd1d31&query=" +
        location
    );
  }
}