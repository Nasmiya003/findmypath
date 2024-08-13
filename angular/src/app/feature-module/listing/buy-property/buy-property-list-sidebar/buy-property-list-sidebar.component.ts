import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';

@Component({
  selector: 'app-buy-property-list-sidebar',
  templateUrl: './buy-property-list-sidebar.component.html',
  styleUrl: './buy-property-list-sidebar.component.scss'
})
export class BuyPropertyListSidebarComponent {
  public routes = routes
  public isCollapsed = true;
  isClassAdded: boolean[] = [false];
  toggleClass(index: number) {
    this.isClassAdded[index] = !this.isClassAdded[index];
  }
  showLess: boolean = false;
  showAmenitiesLess:boolean = false;
  toggleShowLess() {
    this.showLess = !this.showLess;
  }
  toggleAmenitiesShowLess() {
    this.showAmenitiesLess = !this.showAmenitiesLess;
  }
  
  sliderValue1: number = 0;
  sliderValue2: number = 700;
  updateSliderValues() {
   
    if (this.sliderValue1 > this.sliderValue2) {
      this.sliderValue1 = this.sliderValue2;
    }
  }
}
