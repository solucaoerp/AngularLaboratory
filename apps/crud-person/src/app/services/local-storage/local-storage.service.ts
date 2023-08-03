import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {

    constructor() { }

    getItem<T>(key: string): T | null {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    }

    setItem<T>(key: string, item: T): void {
        localStorage.setItem(key, JSON.stringify(item));
    }
}
