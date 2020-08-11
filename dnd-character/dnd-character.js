//
// This is only a SKELETON file for the 'D&D Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const decreasing = (first, second) => second - first

const rollDiceOnce = () => Math.round((Math.random() * 5) + 1)

export const abilityModifier = (score) => {
  if (score < 3) throw Error("Ability scores must be at least 3")
  if (score > 18) throw Error("Ability scores can be at most 18")
  return Math.floor((score - 10) / 2)
}

export class Character {

  static rollAbility() {
    return [...Array(4)]
      .map(rollDiceOnce)
      .sort(decreasing)
      .slice(0, 3)
      .reduce((sum, nextNumber) => sum += nextNumber, 0)
  }

  get strength() {
    if (!this._strength) this._strength = Character.rollAbility()
    return this._strength
  }

  get dexterity() {
    if (!this._dexterity) this._dexterity = Character.rollAbility()
    return this._dexterity
  }

  get constitution() {
    if (!this._constitution) this._constitution = Character.rollAbility()
    return this._constitution
  }

  get intelligence() {
    if (!this._intelligence) this._intelligence = Character.rollAbility()
    return this._intelligence
  }

  get wisdom() {
    if (!this._wisdom) this._wisdom = Character.rollAbility()
    return this._wisdom
  }

  get charisma() {
    if (!this._charisma) this._charisma = Character.rollAbility()
    return this._charisma
  }

  get hitpoints() {
    return 10 + abilityModifier(this.constitution)
  }
}
