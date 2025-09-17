import { Component, OnInit } from '@angular/core';
import { Students } from '../moudls/student';

@Component({
  selector: 'app-student',
  standalone: true, 
   imports: [],
  templateUrl: './student.html',
  styleUrls: ['./student.css']
})
export class Student implements OnInit {

      studentList:Students[]=[];
      bestList: Students[]=[];

      ngOnInit(): void {
        
           let stu1=new Students('sara', 75 , 'h1');
           let stu2=new Students('esti', 100, 'h1');
           let stu3=new Students('tamar', 100, 'h3');
           this.studentList.push(stu1,stu2,stu3);
      }

      out(s :Students){
            this.studentList=this.studentList.filter(x => x!=s);
      }
      best(s : Students){
            this.bestList.push(s);
            s.showButtons = false;

      }
}
