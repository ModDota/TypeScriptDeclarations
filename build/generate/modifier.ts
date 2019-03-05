import modifierProperties from 'dota-data/files/vscripts/modifier-properties';
import * as dom from 'dts-dom';
import _ from 'lodash';
import { emit, withDescription } from './utils';

const argumentMap = new Map<modifierProperties.ArgumentType, dom.Type>([
  ['void', dom.type.void],
  ['unit', dom.create.namedTypeReference('ModifierUnitEvent')],
  ['ability', dom.create.namedTypeReference('ModifierAbilityEvent')],
  ['attack', dom.create.namedTypeReference('ModifierAttackEvent')],
]);

const returnsMap = new Map<Exclude<modifierProperties.ReturnsType, 'void'>, dom.Type>([
  ['number', dom.type.number],
  ['string', dom.type.string],
  ['binary', dom.create.union([dom.type.numberLiteral(0), dom.type.numberLiteral(1)])],
]);

export const generatedModifierProperties = (() => {
  const mainInterface = dom.create.interface('CDOTA_Modifier_Lua');
  mainInterface.members.push(
    ...modifierProperties.map(({ functionName, argument, returns, description }) =>
      withDescription(
        dom.create.method(
          functionName,
          argument !== 'void' ? [dom.create.parameter('event', argumentMap.get(argument)!)] : [],
          returnsMap.get(returns) || dom.create.namedTypeReference(returns),
          dom.DeclarationFlags.Optional,
        ),
        description,
      ),
    ),
  );
  return emit([mainInterface]);
})();
