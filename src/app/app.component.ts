import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MainComponent } from "./pages/main/main.component";
import { ProductComponent } from './pages/product/product.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, RouterLink, MainComponent, ProductComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-app';
}
