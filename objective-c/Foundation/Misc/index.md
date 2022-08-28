# Stringifying values from dictionary


Make data turn into string
```

- (NSString *)stringify: (id)data withPlaceholder:(NSString *)placeholder {
    
    if ([data isKindOfClass:[NSString class]]) return data;

    if ([data isKindOfClass:[NSNull class]]) return placeholder;

    return [data description]
}

```


NSObject+Stringify.h
```
@interface NSObject (Stringify)

@end
```

NSObject+Stringify.m
```
@implementation NSObject

- (NSString *)stringify {

    if ([self isKindOfClass:[NSString class]]) return self;

    if ([self isKindOfClass:[NSNull class]]) return @"";

    if ([self isKindOfClass:[NSNumber class]]) return [self description];

    return [[self integerValue] stringValue];
}
@end

```