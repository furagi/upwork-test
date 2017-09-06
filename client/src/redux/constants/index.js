export * from './posts';

export const START = 'START';
export const SUCCESS = 'SUCCESS';
export const FAIL = 'FAIL';

export const READ = 'READ';

export function join(...stateParts) {
  return stateParts.join('_');
}
