import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {OverlayContainer} from '@angular/cdk/overlay';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  title = 'Bambi-Shop';
  @HostBinding('class') className = '';

  constructor(private overlay: OverlayContainer) {
  }
  toggleControl = new FormControl(false);
  // @Input() toggleControl;

  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      const darkClassName = 'darkMode';
      this.className = darkMode ? darkClassName : '';
      if (darkMode) {
        this.overlay.getContainerElement().classList.add(darkClassName);
      } else {
        this.overlay.getContainerElement().classList.remove(darkClassName);
      }
    });
  }

}
