import waitTimeForVisible from './waitTimeForVisible';
/**
 * Check if the given element is (not) visible
 * @param  {String}   element   Element selector
 * @param  {String}   falseCase Check for a visible or a hidden element
 */
export default (element, falseCase) => {
  waitTimeForVisible(element, falseCase, 3000);
};
