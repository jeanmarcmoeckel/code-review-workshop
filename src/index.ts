import { UserService } from './user.service';
import { User } from './user.types';

const userService = new UserService();

const user1: User = { id: 1, name: 'Alice', email: 'alice@example.com', role: 'user' };
const user2: User = { id: 2, name: 'Bob', email: 'bob@example.com', role: 'admin' };
const user3: User = { id: 3, name: 'Charlie', email: 'charlie@example.com', role: 'user' };

userService.addUser(user1);
userService.addUser(user2);
userService.addUser(user3);

console.log(userService.getUserById(2));
console.log(userService.getUsersByRole('user'));
userService.removeUserById(1);
userService.updateUserEmail(2, 'bob@newdomain.com');
console.log(userService.getUsersByRole('user'));