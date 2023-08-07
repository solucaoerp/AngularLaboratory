import { Pipe, PipeTransform } from '@angular/core';
import { DateService } from 'src/app/services/date/date.service';

@Pipe({ name: 'datesPipe' })
export class DatesPipe implements PipeTransform {

    constructor(private dateService: DateService) { }

    transform(value: string, action: 'toDate' | 'toDisplay' = 'toDisplay'): string | Date | null {
        switch (action) {
            case 'toDate':
                return this.dateService.convertStringToDate(value);
            case 'toDisplay':
            default:
                return this.dateService.formatDateForDisplay(value);
        }
    }
}