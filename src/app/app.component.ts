import { PeopleService } from './shared/services/people.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  count = 0;
  nome = 'Luiz HP';
  text= '';

  pessoas = [
    {
      firstName: "",
      lastName: "",
      age: 0
    },
  ];

  constructor(private PeopleService: PeopleService) {

  }
  ngOnInit() {
    this.getPeople();
      let interval = setInterval(() => {
        this.count++;
        if(this.count === 10){
          clearInterval(interval)
        }
      }, 1000)
      
  }

  clicou(nome: String): void {
    console.log('Clicou em mim', nome);
  }

  getPeople(){
    this.PeopleService.getPeople().subscribe(people =>{
      this.pessoas = people;
    })
  }

}
