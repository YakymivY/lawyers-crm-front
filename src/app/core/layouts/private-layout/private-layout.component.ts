import { Component } from '@angular/core';
import { MatDrawer, MatDrawerContainer, MatDrawerContent } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-private-layout',
  imports: [RouterOutlet, MatDrawerContainer, MatDrawer, MatDrawerContent],
  templateUrl: './private-layout.component.html',
  styleUrl: './private-layout.component.scss'
})
export class PrivateLayoutComponent {

}
