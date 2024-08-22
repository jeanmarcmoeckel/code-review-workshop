import { User } from './user.types';

export class UserService {
    public users: User[] = [];

    public addUser(user: User): void {
        this.users.push(user);
    }

    public getUserById(id: number): User | undefined {
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].id === id) {
                return this.users[i];
            }
        }
        return undefined;
    }

    public getUsersByRole(role: 'admin' | 'user'): User[] {
        const usersWithRole: User[] = [];
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].role === role) {
                usersWithRole.push(this.users[i]);
            }
        }
        return usersWithRole;
    }

    public removeUserById(id: number): void {
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].id === id) {
                this.users.splice(i, 1);
                break;
            }
        }
    }

    public updateUserEmail(id: number, newEmail: string): void {
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].id === id) {
                this.users[i].email = newEmail;
                break;
            }
        }
    }
}