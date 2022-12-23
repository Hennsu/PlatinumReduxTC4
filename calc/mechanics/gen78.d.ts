import { Generation } from '../data/interface';
import { RawDesc } from '../desc';
import { Field } from '../field';
import { Move } from '../move';
import { Pokemon } from '../pokemon';
import { Result } from '../result';
export declare function calculateSMSS(gen: Generation, attacker: Pokemon, defender: Pokemon, move: Move, field: Field): Result;
export declare function calculateBasePowerSMSS(gen: Generation, attacker: Pokemon, defender: Pokemon, move: Move, field: Field, hasAteAbilityTypeChange: boolean, desc: RawDesc): number;
export declare function calculateBPModsSMSS(gen: Generation, attacker: Pokemon, defender: Pokemon, move: Move, field: Field, desc: RawDesc, basePower: number, hasAteAbilityTypeChange: boolean, turnOrder: string): number[];
export declare function calculateAttackSMSS(gen: Generation, attacker: Pokemon, defender: Pokemon, move: Move, field: Field, desc: RawDesc, isCritical?: boolean): number;
export declare function calculateAtModsSMSS(gen: Generation, attacker: Pokemon, defender: Pokemon, move: Move, field: Field, desc: RawDesc): number[];
export declare function calculateDefenseSMSS(gen: Generation, attacker: Pokemon, defender: Pokemon, move: Move, field: Field, desc: RawDesc, isCritical?: boolean): number;
export declare function calculateDfModsSMSS(gen: Generation, attacker: Pokemon, defender: Pokemon, move: Move, field: Field, desc: RawDesc, isCritical?: boolean, hitsPhysical?: boolean): number[];
export declare function calculateFinalModsSMSS(gen: Generation, attacker: Pokemon, defender: Pokemon, move: Move, field: Field, desc: RawDesc, isCritical: boolean | undefined, typeEffectiveness: number): number[];
