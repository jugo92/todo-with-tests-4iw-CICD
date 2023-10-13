import User from './user';

test('user is valid', () => {
  const user = new User(
    'tes',
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

test('user is invalid valid when invalid date', () => {
  const user = new User(
    'test@test.com',
    'test',
    'test',
    new Date(),
    'testSAZE1234'
  );
  expect(user.isValid()).toBe(false);
});

test('user is invalid when password is empty or not strong enough', () => {
  const user = new User(
    'test@test.com',
    'test',
    'test',
    new Date(new Date().setFullYear(new Date().getFullYear() - 15)),
    ''
  );
  const user2 = new User(
    'test@test.com',
    'test',
    'test',
    new Date(new Date().setFullYear(new Date().getFullYear() - 15)),
    'test'
  );
  expect(user.isValid()).toBe(false);
  expect(user2.isValid()).toBe(false);
});
