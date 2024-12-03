import { Injectable } from '@angular/core';

type StorageKeys = {
  email: 'email';
};

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  public get<T>(key: keyof StorageKeys): T {
    return localStorage.getItem(key) as T;
  }

  public getAndConvertToBoolean(key: keyof StorageKeys): boolean {
    const value = this.get(key);

    return value === 'true';
  }

  public getAndConvertToString(key: keyof StorageKeys): string {
    const value = this.get(key);

    return value ? String(value) : '';
  }

  public getAndConvertToNumber(key: keyof StorageKeys): number {
    const value = this.get(key);

    return Number(value);
  }

  public getAndConvertToObject<T>(key: keyof StorageKeys): T | null {
    try {
      return JSON.parse(this.get(key)) as T;
    } catch (error) {
      return null;
    }
  }

  public set(key: keyof StorageKeys, value: any): void {
    return localStorage.setItem(key as string, value);
  }

  public setObject(key: keyof StorageKeys, value: any): void {
    return this.set(key, JSON.stringify(value));
  }

  public remove(key: keyof StorageKeys): void {
    localStorage.removeItem(key as string);
  }

  public removeAll(): void {
    localStorage.clear();
  }
}
