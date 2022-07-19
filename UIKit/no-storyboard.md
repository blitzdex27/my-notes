AppDelegate.m
```
#import "ViewController.h";

self.window = UIWindow.new;
[self.window makeKeyAndVisible];

self.window.rootViewController = [[UINavigationController alloc]initWithRootViewController:ViewController.new];
```

ViewController.m

```

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];

     self.navigationItem.title = "Courses";
}
```
