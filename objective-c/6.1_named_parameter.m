#import <Foundation/Foundation.h>

@interface Mom : NSObject 
- (void) tellSomething;
- (void) howDoYouFeel : (int)age isHappy:(int)isHappy;
@end

@implementation Mom 
- (void) tellSomething{
    NSLog(@"I love my son!");
}
- (void) howDoYouFeel : (int)age isHappy:(int)isHappy {
    NSLog(@"I am %i years old and I am %@!", age, isHappy ? @"happy" : @"not happy");
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
    [tess howDoYouFeel:59 isHappy: 1];

    Son * deks = [[Son alloc] init];
    [deks tellSomething];
    [deks howDoYouFeel:29 isHappy: 1];

    [pool drain];

    return 0;
}