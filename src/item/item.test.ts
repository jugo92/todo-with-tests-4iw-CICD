import Item from './item';

test('Empty name', () => {
  const item = new Item('', 'Contenu du produit', new Date(), 1);
  expect(item.isValid()).toBe(false);
});

test('Empty content', () => {
  const item = new Item('Stylo', '', new Date(), 1);
  expect(item.isValid()).toBe(false);
});

test('Content ok', () => {
  const item = new Item(
    'Stylo',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sit amet aliquet ultricies, nisl massa consectetur magna, a aliquam nisl nunc vitae sem. Sed euismod, nisl sit amet aliquet ultricies, nisl massa consectetur magna, a aliquam nisl nunc vitae sem.',
    new Date(),
    1
  );
  expect(item.isValid()).toBe(true);
});
