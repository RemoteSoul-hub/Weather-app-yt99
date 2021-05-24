import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApixuService } from "../../services/apixu.service";
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  public weatherSearchForm!: FormGroup;
  public weatherData: any;
  constructor(private FormBuilder: FormBuilder, private apixuService: ApixuService) { }

  ngOnInit(): void {
    this.weatherSearchForm = this.FormBuilder.group({
      location: ['']
    });
  }

  sendToAPIXU(formValues: any) {
    // console.log(formValues);
    this.apixuService
      .getWeather(formValues.location)
      // .subscribe(data => console.log(data));
      .subscribe(data => this.weatherData = data)
      console.log(this.weatherData);
  }

}
