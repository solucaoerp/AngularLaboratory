import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DateService {

    constructor() { }

    formatDateForDisplay(date: string): string {
        const [day, month, year] = date.split('/');
        return `${day}/${month}/${year}`;
    }

    formatDateForInput(date: string): string {
        if (date.length === 2 || date.length === 5) {
            return date + '/';
        }
        return date;
    }

    convertStringToDate(date: string): Date | null {
        if (!date) return null;
        const [day, month, year] = date.split('/');
        return new Date(Number(year), Number(month) - 1, Number(day));
    }

    isValidDate(date: string): boolean {
        if (!date) return false;

        const [day, month, year] = date.split('/').map(Number);

        if (month < 1 || month > 12) return false;
        if (day < 1 || day > 31) return false;
        if (month === 2) {
            const isLeapYear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
            return day <= (isLeapYear ? 29 : 28);
        }
        if (['4', '6', '9', '11'].includes(month.toString()) && day > 30) return false;

        return true;
    }
}
