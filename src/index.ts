import { AuthService } from './auth.service';
import { User, Role } from './user.types';

const authService = new AuthService();

const adminRole: Role = { name: 'admin', permissions: ['read', 'write', 'delete'] };
const userRole: Role = { name: 'user', permissions: ['read'] };

const user1: User = { id: 1, username: 'alice', passwordHash: 'hash1', roles: ['user'] };
const user2: User = { id: 2, username: 'bob', passwordHash: 'hash2', roles: ['admin'] };

authService.addRole(adminRole);
authService.addRole(userRole);

authService.addUser(user1);
authService.addUser(user2);

const authenticatedUser = authService.authenticate('alice', 'hash1');
if (authenticatedUser) {
    console.log(`${authenticatedUser.username} is authenticated.`);
}

const hasAccess = authService.hasPermission(2, 'delete');
console.log(`User has delete permission: ${hasAccess}`);