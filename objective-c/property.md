Default attribute of property

```c
@property (atomic, readwrite) int x;
```

## @property

- `@property` offers a way to define the information that a class is intended to encapsulate. If you declare an object/variable using `@property`, then that object/variable will be accessible to other classes importing its class.
- If you declare an object using `@property` in the header file, then you have to synthesize it using @synthesize in the implementation file. This makes the object KVC compliant. By default, compiler will synthesize accessor methods for this object.
- accessor methods are : setter and getter.

Example:

`.h`

```m
@interface XYZClass : NSObject
@property (nonatomic, retain) NSString *name;
@end
```

`.m`

```m
@implementation XYZClass
@synthesize name;
@end
```

Now the compiler will synthesize accessor methods for name.

```c
XYZClass *obj=[[XYZClass alloc]init];
NSString *name1=[obj name]; // get 'name'
[obj setName:@"liza"]; // first letter of 'name' becomes capital in setter method
```

List of attributes of @property

atomic, nonatomic, retain, copy, readonly, readwrite, assign, strong, getter=method, setter=method, unsafe_unretained

- `atomic` is the default behavior. If an object is declared as `atomic` then it becomes thread-safe.
  > Thread-safe means, at a time, only one thread of a particular instance of that class can have the control over that object.

If the thread is performing getter method then other thread cannot perform setter method on that object. It is slow.

```m
@property NSString *name; //by default atomic`
@property (atomic)NSString *name; // explicitly declared atomic`

```

Before you know about the attributes of @property, you should know what is the use of @property.
