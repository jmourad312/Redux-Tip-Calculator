import { createSelector } from 'reselect';

export const selectItems = (state) => state.items;
export const selectTipPercentage = (state) => state.tipPercentage;

export const selectSubTotal = createSelector([selectItems], (items) =>
  items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
);

export const selectTipAmount = createSelector(
  [selectSubTotal, selectTipPercentage],
  (subTotal, tipPercentage) => subTotal * tipPercentage
);

export const selectTotal = createSelector(
  [selectSubTotal, selectTipAmount],
  (subTotal, tipAmount) => subTotal + tipAmount
);
