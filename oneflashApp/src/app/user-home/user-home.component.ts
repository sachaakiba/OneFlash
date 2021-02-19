import { Component } from '@angular/core';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent {

    selectedColor = '';
    selectedFont = '';
    selectedColorFont = '';

    colorfonts = [
      {
        id: 1,
        name: 'Choose your Font Color',
        value:''
      },
      {
        id: 2,
        name: 'White',
        value: '#F8F8FF'
      },
      {
        id: 3,
        name: 'Yellow',
        value: '#ffff00'
      },
      {
        id: 4,
        name: 'Red',
        value: '#ff3300'
      }
      
    ]

    fonts = [
      {
        id:1,
        name: 'Choose your Font',
        value: ''
      },
      {
        id:2,
        name: 'Times',
        value: 'Times'
      },      
      {
        id:3,
        name: 'Arial',
        value: 'Arial'
      },
      {
        id:4,
        name: 'Monospace',
        value: 'monospace'
      }
    ]

      colors = [
        {
          id: 1,
          name: 'Choose your background',
          value: '#FFFF'
        },
        {
          id: 2,
          name: 'yellow',
          value: '#ffff00'
        },
        {
          id: 3,
          name: 'red',
          value: '#ff3300'
        },
        {
          id: 4,
          name: 'blue',
          value: '#0000ff'
        }
      ];

  onChange(value:any){
    this.selectedColor = value;
  }

  onChangeFont(value:any){
    this.selectedFont = value;
  }
  
  onChangeColorFont(value:any){
    this.selectedColorFont = value;
  }


}
