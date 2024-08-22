import { User, Role } from './user.types';

export class AuthService {
    public users: User[] = [];
    public roles: Role[] = [];

    public addUser(user: User): void {
        this.users.push(user);
    }

    public addRole(role: Role): void {
        this.roles.push(role);
    }

    public authenticate(username: string, passwordHash: string): User | null {
        const user = this.users.find(u => u.username === username && u.passwordHash === passwordHash);
        return user || null;
    }

    public hasPermission(userId: number, permission: string): boolean {
        const user = this.users.find(u => u.id === userId);
        if (!user) return false;

        for (let i = 0; i < user.roles.length; i++) {
            const role = this.roles.find(r => r.name === user.roles[i]);
            if (role) {
                if (role.permissions.includes(permission)) {
                    return true;
                }
            }
        }

        return false;
    }
}