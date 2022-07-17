#import <Foundation/Foundation.h>

// Creating object interface (blueprint)
@interface Rectangle : NSObject {
    int width;
    int height;
}
@property int width, height;
- (int) area;
- (int) perimeter;
- (void) setWH : (int) w : (int) h;
@end

// Creating implementation of object (how blueprint be implemented)
@implementation Rectangle
@synthesize width, height;
- (int) area {
    return width * height;
}
- (int) perimeter {
    return 2 * width + 2 * height;
}
- (void) setWH : (int) w : (int) h {
    width = w;
    height = h;
}
@end

// square class
@interface Square : Rectangle
- (void) setSide : (int) s;
- (int) getSide;

@end

@implementation Square 
- (void) setSide : (int) s {
    width = s;
    height = width;
}
- (int) getSide {
    return width;
}
@end

int main (int argc, char * argv[]) {

    NSAutoreleasePool * pool = [[NSAutoreleasePool alloc] init];

    Square * squ = [[Square alloc] init];

    [squ setSide : 3];
    
    NSLog(@"%i", [squ getSide]);
    NSLog(@"%i", [squ area]);
    NSLog(@"%i", [squ perimeter]);

    [pool drain];

    return 0;
}