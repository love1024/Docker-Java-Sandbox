import { Component } from '@angular/core';
import { zip } from 'rxjs';
import { ExecuteInput, ExecuteOutput } from './app.model';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  content = `
    class Test {
      public static void main(String args[]) {
        int marks[] = {70, 60, 95, 87, 72, 67};
        float total=0, avg;
        
        for(int i=0; i<6; i++) { 
          total = total + marks[i];
        }

        //Calculating average here
        avg = total/6;
        
        System.out.print("The student Grade is: ");
        if(avg>=80) System.out.print("A");
        else if(avg>=60 && avg<80) System.out.print("B");
        else if(avg>=40 && avg<60) System.out.print("C");
        else System.out.print("D");
      }
    }
  `;

  noOfReq = 1;
  inProgress = false;
  results: ExecuteOutput[] = [];

  constructor(private appService: AppService){}

  executeCode(): void {
    this.inProgress = true;
    this.results = [];
    const input: ExecuteInput = {
      code: this.content,
      language: 8
    }
    const requests = [];
    for(let i = 0; i < this.noOfReq; i++) {
      requests.push(this.appService.executeCode(input));
    }

    const zippedReq = zip(...requests);
    zippedReq.subscribe(results => {
      this.inProgress = false;
      this.results = results;
    });
  }
}
