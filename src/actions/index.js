export const SEARCHING = 'SEARCHING';

export function searching( name, target ) {
  return {
    type: SEARCHING,
    name: name,
    target: target
  }
}
