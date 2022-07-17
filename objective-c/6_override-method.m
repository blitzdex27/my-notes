#import <Foundation/Foundation.h>

@interface Mom : NSObject 
- (void) tellSomething;
@end

@implementation Mom 
- (void) tellSomething  {
    NSLog(@"I love my son!");
}
@end

@interface Son : Mom 
@end

@implementation Son
- (void) tellSomething {
    NSLog(@"I love my mom!");
}
@end

int main (int argc, const char * argv[]) {

    NSAutoreleasePool * pool = [[NSAutoreleasePool alloc] init];

    Mom * tess = [[Mom alloc] init];
    [tess tellSomething];

    Son * deks = [[Son alloc] init];
    [deks tellSomething];

    [pool drain];

    return 0;
}