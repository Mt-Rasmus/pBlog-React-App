
import { login, logout } from '../../actions/auth';

test('Should generate login action object correctly', () => {
   const uid = 'abc123';
   const action = login(uid);
   expect(action).toEqual({
      type: 'LOGIN',
      uid
   });
});

test('Should generate logout action object correctly', () => {
   const action = logout();
   expect(action).toEqual({
      type: 'LOGOUT'
   });
});