import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @ViewChild('toggleButton')
  toggleButton!: ElementRef;
  
  @ViewChild('menu')
  menu!: ElementRef;

  isMenuOpen = false;

  constructor(private renderer: Renderer2) {
    /**
     * This events get called by all clicks on the page
     */
    this.renderer.listen('window', 'click',(e: Event)=>{
        if(!this.toggleButton.nativeElement.contains(e.target)){
            this.isMenuOpen = false;
        }
    });
  }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
