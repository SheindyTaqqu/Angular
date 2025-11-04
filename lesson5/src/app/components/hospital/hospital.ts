import { Component, OnInit } from '@angular/core';
import { Babys } from '../../babys/babys'; 
import { ClassBabys } from '../../moduls/ClassBabys';

@Component({
  selector: 'app-hospital',
  standalone: true,
  imports: [Babys],
  templateUrl: './hospital.html',
})
export class Hospital implements OnInit {
  baby: ClassBabys[] = [];

  ngOnInit(): void {
    const baby1 = new ClassBabys();
    baby1.Id = 123654345;
    baby1.name = 'sari';
    baby1.LastName = 'cohen';
    baby1.birthDate = 'י"ז תמוז';
    this.baby.push(baby1);

    const baby2 = new ClassBabys();
    baby2.Id = 987654321;
    baby2.name = 'rachel';
    baby2.LastName = 'levi';
    baby2.birthDate = 'י"ח ניסן';
    this.baby.push(baby2);

    const baby3 = new ClassBabys();
    baby3.Id = 555666777;
    baby3.name = 'miriam';
    baby3.LastName = 'shalom';
    baby3.birthDate = 'כ"ד תשרי';
    this.baby.push(baby3);

    const baby4 = new ClassBabys();
    baby4.Id = 111222333;
    baby4.name = 'yaakov';
    baby4.LastName = 'baruch';
    baby4.birthDate = 'ח׳ כסלו';
    this.baby.push(baby4);

    const baby5 = new ClassBabys();
    baby5.Id = 444555666;
    baby5.name = 'chaya';
    baby5.LastName = 'avraham';
    baby5.birthDate = 'י״ב אדר';
    this.baby.push(baby5);

    const baby6 = new ClassBabys();
    baby6.Id = 999888777;
    baby6.name = 'moshe';
    baby6.LastName = 'david';
    baby6.birthDate = 'כ״ה ניסן';
    this.baby.push(baby6);

  }

  deleteItemParent(babyToRemove: ClassBabys) {
    this.baby = this.baby.filter(x => x !== babyToRemove);
  }
}
