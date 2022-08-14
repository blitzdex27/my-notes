## Notification without data

Add observer

```
[[NSNotificationCenter defaultCenter] addObserverForName:@"test notification" object:self queue:nil usingBlock:^(NSNotification * notification){
    NSLog(@"received notification");
}];
```

Post notification

```
[[NotificationCenter defaultCenter] postNotificationName:@"test notification" object:self userInfo:nil];
```

Post notification v2

```
NSNotification * notification = [[NSNotification alloc] initWithName:@"test notification" object:self userInfo:nil];

[[NotificationCenter defaultCenter] postNotification:notification];
```

## Notification with data

Add notification (the same)

```
[[NSNotificationCenter defaultCenter] addObserverWithName:@"notification with data" object:self queue:nil usingBlock:^(NSNotification * notification) {
    NSLog(@"data: %@", notification.userData);
}];
```

Post notification

```
NSDictionary * data = @{@"name":@"deks"};

NSNotification * notification = [[NSNotification alloc] initWithName:@"notification with data" object:self userInfo:data];

[[NSNotificationCenter defaultCenter] postNotification:notification];
```
