export default class Character {
  constructor(name, type, attack, defence, health = 100, level = 1) {
    if (name.length >= 2 && name.length <= 10) this.name = name;
    else throw new Error('The class name must be between 2 and 10 characters long');
    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (types.includes(type)) this.type = type;
    else throw new Error(`Invalid type value - "${type}". Valid values: ${types}`);
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }

  levelUp() {
    if (this.health > 0) {
      const levelMultiplier = 0.2;
      this.level += 1;
      this.attack += this.attack * levelMultiplier;
      this.defence += this.defence * levelMultiplier;
      this.health = 100;
    } else {
      throw new Error('You cannot raise the level of the deceased');
    }
  }

  damage(points) {
    const currentHealth = this.health - points * (1 - this.defence / 100);
    if (currentHealth >= 0) this.health = currentHealth;
    else this.health = 0;
  }
}
