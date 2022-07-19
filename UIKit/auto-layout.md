```
#import <ViewController.h>

@interface ViewController()

@end

@implementation ViewController

-(void)viewDidLoad{
    [super viewDidLoad]

    UIView * orangeView = [[UIView alloc]init];
    [orangeView setBackgroundColor: [UIColor orangeColor]];
    [self.view addSubview:orangeView];


    orangeView.translateAutoresizingMaskIntoConstraints = NO;
    // setting width and height
    NSArray * widthConstraint = [NSLayoutConstraint
        constraintsWithVisualFormat:@"H:[orangeView(100)]"
        options:0
        views:NSDictionaryOfVariableBindings(orangeView)]"
    NSArray * heightConstraint = [NSLayoutConstraint
        constraintsWithVisualFormat:@"V:[orangeView(100)]"
        options:0
        views:NSDictionaryOfVariableBindings(orangeView)]"

    // set boundary constraints
    NSArray * xConstraint = [NSLayoutConstraint
        constraintsWithVisualFormat:@"H:[orangeView(100)]-50-|"
        options:0
        views:NSDictionaryOfVariableBindings(orangeView)]"
    NSArray * yConstraint = [NSLayoutConstraint
        constraintsWithVisualFormat:@"V:[orangeView(100)]-50-|"
        options:0
        views:NSDictionaryOfVariableBindings(orangeView)]"

    [self.view addConstraints:widthConstraint];
    [self.view addConstraints:heightConstraint];
    [self.view addConstraints:xConstraint];
    [self.view addConstraints:yConstraint];
}

@end

```
