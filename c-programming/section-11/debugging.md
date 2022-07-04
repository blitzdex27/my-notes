# Debugging

How to:
- Understand the problem
- Reproduce
- Isolate
- Investigate
- Solve
- Test

Techniques and tools
- Tracing (using print statements)
- Debuggers
- Log files
- Monitoring software
- Exception handling (try - catch)
- Static analyzers - analyze source code for specific known problems
    - semantic checker - does not analyze syntax
    - can things like uninitialized variables, memory leaks, unreachable code, deadlocks or race conditions
- Test suites - run a set of comprehensive system end-to-end tests
- Debugging the program after it has crashed
    - analyze the call stack
    - analyze memory dump (core file)

Prevention:
    - write high quality code (follow good design principles and good programming practices)
    - unit tests - automatically execute when compiling
        - helps avoid regression
        - find errors in new code before it is delivered
        - TDD (test driven development)