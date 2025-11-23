// import { Component, OnInit } from '@angular/core';
// import { Driver } from '../../moduls/driver';
// import { ApiCalls } from '../../services/api-calls';

// @Component({
//   selector: 'app-drivers',
//   standalone: true,
//   imports: [],
//   templateUrl: './drivers.html',
//   styleUrl: './drivers.css',
// })
// export class Drivers implements OnInit {
//   drivers: Driver[] = [];

//   constructor(private apiCallService: ApiCalls) { }

//   ngOnInit(): void {
//     this.getDrivers();
//   }

//   getDrivers() {
//     this.apiCallService.get("/drivers").subscribe(
//       {
//         next: (data) => {
//           console.log(data);
//           this.drivers = data;
//         },
//         error: (error) => console.error(error),
//         complete: () => console.log("completed")
//       })
//   }

//   addDriver() {
//     let newDriver = new Driver();
//     newDriver.id = 123;
//     newDriver.name = 'New Driver';

//     this.apiCallService.post("/drivers", newDriver).subscribe(
//       {
//         next: (success) => console.log(success),
//         error: (error) => console.error(error),
//         complete: () => console.log("completed")
//       })
//   }

//   updateDriver() {
//     let newDriver = new Driver();
//     newDriver.id = 123;
//     newDriver.name = 'New Driver';

//     this.apiCallService.put("/drivers", newDriver, newDriver.id).subscribe(
//       {
//         next: (success) => console.log(success),
//         error: (error) => console.error(error),
//         complete: () => console.log("completed")
//       })
//   }

//   deleteDriver() {
//     let newDriver = new Driver();
//     newDriver.id = 123;
//     newDriver.name = 'New Driver';

//     this.apiCallService.delete("/drivers", newDriver.id).subscribe(
//       {
//         next: (success) => console.log(success),
//         error: (error) => console.error(error),
//         complete: () => console.log("completed")
//       }
//     )
//   }
// }
////////////////////////////////הוספה/////////////////////////////////////
import { Component, OnInit } from '@angular/core';
import { Driver } from '../../moduls/driver';
import { ApiCalls } from '../../services/api-calls';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  // ← זה מה שהיה חסר!

@Component({
  selector: 'app-drivers',
  standalone: true,
  imports: [FormsModule, CommonModule],  // ← הוספתי את CommonModule
  templateUrl: './drivers.html',
  styleUrl: './drivers.css',
})
export class Drivers implements OnInit {


  drivers: Driver[] = [];

  // שדות טופס הוספה
  newDriver: Driver = {
    id: 0,
    name: ''
  };

  constructor(private apiCallService: ApiCalls) { }

  ngOnInit(): void {
    this.loadDrivers();
  }

  // טען את כל הנהגים בכניסה למסך
  loadDrivers() {
    this.apiCallService.get("/drivers").subscribe({
      next: (data) => this.drivers = data,
      error: (error) => console.error(error)
    });
  }

  // הוספת נהג
  addDriver() {
    this.apiCallService.post("/drivers", this.newDriver).subscribe({
      next: () => {
        this.loadDrivers(); 
        this.newDriver = { id: 0, name: '' }; // אפס טופס
      },
      error: (error) => console.error(error)
    });
  }

  // מחיקת נהג
  deleteDriver(id: number) {
    this.apiCallService.delete("/drivers", id).subscribe({
      next: () => this.loadDrivers(),
      error: (error) => console.error(error)
    });
  }
}

