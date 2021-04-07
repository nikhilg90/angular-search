import { Component } from '@angular/core';
import { HttpService } from 'src/shared/http/http.service';
import { catchError, debounceTime, filter, map, switchMap } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { of } from 'rxjs';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent {
   
  searchForm:FormGroup;
  nearByLandmark : FormControl;
  
  constructor(private httpService:HttpService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      nearByLandmark: new FormControl
    });
  }

}
