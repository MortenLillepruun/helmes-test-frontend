import { Component } from '@angular/core';
import {SectorService} from './services/sector.service';
import {Sector} from './models/sector.interface';
import {UserData} from './models/user.data.interface';
import {UserDataService} from './services/user.data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'helmest-test-frontend';
  sectors: Sector[];
  model = new UserData();
  nameValid = true;
  sectorsValid = true;
  termsValid = true;
  userData: UserData;

  constructor(private sectorService: SectorService,
              private userDataService: UserDataService) {
    sectorService.getSectors().subscribe(result => {
        this.sectors = result;
      }
    );
  }

  save(): void {
    let formValid = true;

    if (!this.model.name || this.model.name === '') {
      this.nameValid = false;
      formValid = false;
    } else {
      this.nameValid = true;
    }

    if (!this.model.sectors) {
      this.sectorsValid = false;
      formValid = false;
    } else {
      this.sectorsValid = true;
    }

    if (!this.model.termsAgreement) {
      this.termsValid = false;
      formValid = false;
    } else {
      this.termsValid = true;
    }

    if (formValid) {
      let id: number;
      if (this.userData) {
        id = this.userData.id;
      } else {
        id = null;
      }
      this.userDataService.saveUserData(
        id,
        this.model.name,
        this.model.sectors,
        this.model.termsAgreement)
        .subscribe((value) => {
          this.userData = value;
        });

      alert('User data saved!');
    }
  }
}
