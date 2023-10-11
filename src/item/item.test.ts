import Item from "./item";

test('Empty name', () => {
    const item = new Item("", "Contenu du produit", new Date(), 1);
    expect(item.isValid()).toBe(false);
  });

  test('Empty content', () => {
    const item = new Item("Stylo", "", new Date(), 1);
    expect(item.isValid()).toBe(false);
  });
  