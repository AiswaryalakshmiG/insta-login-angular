import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private storeData = 'users';

  getUsers(): any[] {
    return JSON.parse(localStorage.getItem(this.storeData) || '[]');
  }

  addUser(user: any): void {
    const users = this.getUsers();
    users.push(user);
    localStorage.setItem(this.storeData, JSON.stringify(users));
  }

  findUser(email: string, password: string): any {
    const users = this.getUsers();
    return users.find(
      (user: any) => user.email === email && user.password === password
    );
  }

  forgot(email: string): any {
    return this.getUsers().find((user: any) => user.email === email);
  }
}


