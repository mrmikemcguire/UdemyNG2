import {Component} from 'angular2/core';

@Component({
    selector: 'third-component',
    template: `
        <h3>Third Component</h3>
    Hello, we attend <span [style.color] = "inputElement.value === 'yes' ? 'blue' : ''">{{school}}</span>.  <span [class.isAwesome] = 'inputElement.value === "yes"'>It is an awesome school!</span> 
    <br><br>
    Do you think {{school}} is awesome?
    <input type = 'text' #inputElement (keyup) = '0'> 
    <br><br>
    <button [disabled] = 'inputElement.value !== "yes"'>Only enabled if 'yes' was entered</button>
    `,
    styleUrls: ['src/css/myThirdComponent.css']
})
export class ThirdComponent {
    school = 'Mullen';

}