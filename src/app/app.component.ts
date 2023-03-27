import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prova';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('it');
    translate.use('en');
  }

  switchLanguage(target: EventTarget | null) {
    if (target instanceof HTMLSelectElement) {
      const language = target.value;
      this.translate.use(language);
    }
  }
}
