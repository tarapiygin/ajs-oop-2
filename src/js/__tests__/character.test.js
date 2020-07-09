import Character from '../character';

test('should return an object', () => {
  const character = {
    name: 'test',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 100,
    defence: 100,
  };
  expect(new Character('test', 'Bowman', 100, 100)).toMatchObject(character);
});

test('should throw an error about a name too long', () => {
  expect(() => new Character('12345678910', 'Bowman', 100, 100)).toThrowError(new Error('The class name must be between 2 and 10 characters long'));
});

test('should throw an error about the wrong type of hero', () => {
  expect(() => new Character('test11', 'test', 100, 100)).toThrowError(new Error('Invalid type value - "test". Valid values: Bowman,Swordsman,Magician,Daemon,Undead,Zombie'));
});

test('should throw an error about the impossibility of raising the level', () => {
  const received = new Character('test', 'Bowman', 100, 100, 0, 1);
  expect(() => received.levelUp()).toThrowError(new Error('You cannot raise the level of the deceased'));
});

test('should return an hero with a higher level', () => {
  const received = new Character('test', 'Bowman', 100, 100, 10, 1);
  received.levelUp();
  const expected = new Character('test', 'Bowman', 120, 120, 100, 2);
  expect(received).toEqual(expected);
});

test('should reduce the health of the hero to 0', () => {
  const received = new Character('test', 'Bowman', 100, 0, 10, 1);
  received.damage(10000);
  expect(received.health).toBe(0);
});

test('should not reduce the hero health', () => {
  const received = new Character('test', 'Bowman', 100, 100, 100, 1);
  received.damage(90);
  expect(received.health).toBe(100);
});

test('should reduce the heros health to 20', () => {
  const received = new Character('test', 'Bowman', 100, 20, 100, 1);
  received.damage(100);
  expect(received.health).toBe(20);
});
