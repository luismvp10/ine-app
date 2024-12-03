import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-options-dropdown',
  standalone: false,

  templateUrl: './options-dropdown.component.html',
  styleUrl: './options-dropdown.component.scss'
})
export class OptionsDropdownComponent {
  public options: Array<string> = ['books', 'map', 'random', 'random2'];
  private readonly router: Router = inject(Router);
  public selectedOption: string = '';


  public onSelect(option: string) {

    const optionIndex = this.options.findIndex((opt) => opt === option);

    if (optionIndex !== -1) {
      const sanitizedOption = option.toLowerCase().replace(/\s+/g, '-');
      console.log(`Índice de la opción seleccionada: ${optionIndex}`); // Solo para depuración
      this.router.navigate([`/welcome/${sanitizedOption}`]);
    } else {
      console.error('Opción no encontrada en el array.');
    }
  }
}
