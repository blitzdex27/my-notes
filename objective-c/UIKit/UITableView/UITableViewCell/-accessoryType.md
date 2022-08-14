# accessoryType

Instance Property

The type of standard accessory view for the cell to use in the table view's normal state.

## Declaration

```
    @property(nonatomic) UITableViewCellAccessoryType accessoryType;
```

## Summary

- The accessory view appears in the right side of the cell in the table view’s normal (default) state.
- `accessoryType` constants
  - `UITableViewCellAccessoryNone` - No accessory view.
  - `UITableViewCellAccessoryDisclosureIndicator` - A chevron-shaped control for presenting new content.
  - `UITableViewCellAccessoryDetailDisclosureButton` - An information button and a disclosure (chevron) control.
  - `UITableViewCellAccessoryCheckmark` - A checkmark image.
  - `UITableViewCellAccessoryDetailButton` - An information button.
  - If a custom accessory view is set through the `accessoryView` property

## additional

- willTransitionToState:
  Notifies the cell that it’s about to transition to a new cell state.
- didTransitionToState:
  Notifies the cell that it transitioned to a new cell state.
