import {AfterContentChecked, Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements AfterContentChecked {
  subjectId: string;

  constructor(
    private route: ActivatedRoute) {
  }

  ngAfterContentChecked(): void {
    this.subjectId = this.route.snapshot.params['id'];
  }

}
