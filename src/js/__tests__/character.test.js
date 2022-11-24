import Magician from '../magician';
import Daemon from '../daemon';

test('setting up new player', () => {
  const daemon = new Daemon('666');
  const magician = new Magician('999');
  expect(daemon).toEqual({
    defence: 40, distance: 1, health: 100, name: '666', stonedState: false, type: 'Daemon', attackPower: 50,
  });
  expect(magician).toEqual({
    defence: 40, distance: 1, health: 100, name: '999', stonedState: false, type: 'Magician', attackPower: 50,
  });
});

test('return players attack power', () => {
  const player = new Magician('Magi');
  expect(player.attack).toBe(45);
  player.distance = 3;
  expect(player.attack).toBe(35);
  player.stoned = true;
  expect(player.stoned).toBe(true);
  expect(player.attack).toBe(27);
  player.distance = 7;
  expect(player.attack).toBe(0);
});
