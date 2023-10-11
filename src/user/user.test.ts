import User from './user';

test('user is valid', () => {
  const user = new User(
    'test@test.com',
    'test',
    'test',
    new Date(new Date().setFullYear(new Date().getFullYear() - 15)),
    'testSAZE1234'
  );
  expect(user.isValid()).toBe(true);
});

test('user is invalid without email', () => {
  const user = new User(
    '',
    'test',
    'test',
    new Date(new Date().setFullYear(new Date().getFullYear() - 15)),
    'testSAZE1234'
  );

  expect(user.isValid()).toBe(false);
});

test('user is invalid without firstName', () => {
  const user = new User(
    'test@test.com',
    '',
    'test',
    new Date(new Date().setFullYear(new Date().getFullYear() - 15)),
    'testSAZE1234'
  );
  expect(user.isValid()).toBe(false);
});
