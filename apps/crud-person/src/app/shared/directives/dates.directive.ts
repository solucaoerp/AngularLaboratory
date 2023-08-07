import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { NgControl } from '@angular/forms';
import { DateService } from 'src/app/services/date/date.service';

@Directive({
    selector: '[datesDirective]'
})
export class DatesDirective {

    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer2,
        private ngControl: NgControl,
        private dateService: DateService
    ) { }

    @HostListener('input', ['$event'])
    onInputChange(event: any) {
        const initialValue = this.elementRef.nativeElement.value;
        const formattedValue = this.formatDate(initialValue);

        if (!this.isValidDate(formattedValue)) {
            this.ngControl.control?.setErrors({ 'invalidFormat': true });
        }

        this.elementRef.nativeElement.value = formattedValue;
        if (initialValue !== this.elementRef.nativeElement.value) {
            event.stopPropagation();
        }
    }

    private formatDate(value: string): string {
        if (!value) return '';

        let sanitizedValue = value.replace(/\D/g, '');
        if (sanitizedValue.length <= 2) return sanitizedValue;
        if (sanitizedValue.length <= 4) return `${sanitizedValue.substring(0, 2)}/${sanitizedValue.substring(2)}`;
        return `${sanitizedValue.substring(0, 2)}/${sanitizedValue.substring(2, 4)}/${sanitizedValue.substring(4)}`;
    }

    private isValidDate(value: string): boolean {
        const [day, month, year] = value.split('/');
        const date = new Date(Number(year), Number(month) - 1, Number(day));

        return date && date.getMonth() + 1 == Number(month) && date.getDate() == Number(day);
    }
}
