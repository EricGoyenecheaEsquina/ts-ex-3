export class DnDCharacter {

  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  hitpoints: number;

  constructor() {
    this.strength = DnDCharacter.generateAbilityScore();
    this.dexterity =  DnDCharacter.generateAbilityScore();
    this.constitution =  DnDCharacter.generateAbilityScore();
    this.intelligence =  DnDCharacter.generateAbilityScore();
    this.wisdom =  DnDCharacter.generateAbilityScore();
    this.charisma =  DnDCharacter.generateAbilityScore();
    this.hitpoints = DnDCharacter.getModifierFor(this.constitution)+10;

  }

  public static generateAbilityScore(): number {
    let array: number[] = []
    for (let i: number = 0; i < 4; i++) {
      array.push(Math.floor(Math.random() * 6  + 1));
    }
    array.sort();
    array.pop();
 
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;



  }

  public static getModifierFor(abilityValue: number): number {
    let hitpoints: number = (abilityValue - 10) / 2;
    return Math.floor(hitpoints);
  }
}
