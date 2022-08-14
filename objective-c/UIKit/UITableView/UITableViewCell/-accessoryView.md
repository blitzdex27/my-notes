# accessoryView

Instance property

The view to use on the right side of the cell, typically as a control, in the table view’s normal state.

## Declaration

```
@property(nonatomic, strong, nullable) UIView *accessoryView;
```

## Summary

- can be set to define a custom view for accessory
- ignores value of the `accesssoryType` property
- if not `nil`, the UITableViewCell uses the given UITableViewCellAccessoryType
- appears in the right side of the cell
- cross-fades between normal and editing states if it set for both states
- use the `editingAccessoryView` property to set the accessory view for the cell during editing mode

## additional

- willTransitionToState:
  Notifies the cell that it’s about to transition to a new cell state.
- didTransitionToState:
  Notifies the cell that it transitioned to a new cell state.
