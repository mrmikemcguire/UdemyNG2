import {Component} from 'angular2/core';
import {SecondComponent} from './second.component';
import {ThirdComponent} from './third.component';


@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Boilerplate</h1>
        <p>Hello My World!</p>
        <second-component></second-component>
        <third-component></third-component>
    `,
    directives: [SecondComponent, ThirdComponent]
})
export class AppComponent {

}
