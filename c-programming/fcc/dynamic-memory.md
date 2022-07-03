# Dynamic memory

## typical memory architecture for c programs

- Code (text)
  - instructions
- Static/Global
  - global variables
- Stack
  - function calls
  - local variables (lifetime is until the function call ends)

The amount of memory for the code, static, and the stack does not grow while the application is running

When the program starts, some reserve space will be allocated for the stack

The actual allocation of stack frame, and local variables happen from stack during runtime

Application cannot request more memory for stack

_Stackoverflow_ is when the reserve space for stack overflows with stack frames

Allocation and deallocation have a set of rules.
