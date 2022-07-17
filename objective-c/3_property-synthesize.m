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

int main (int argc, char * argv[]) {

    NSAutoreleasePool * pool = [[NSAutoreleasePool alloc] init];

    Rectangle * rec = [[Rectangle alloc] init];

    rec.width = 2;
    rec.height = 3;

    printf("-------------------------------------------\n");
    printf("Rectangle\n");
    // access through dot notation
    NSLog(@"width = %i", rec.width);
    NSLog(@"height = %i", rec.height);
    // access through receiver-message
    NSLog(@"width = %i", [rec width]);
    NSLog(@"width = %i", [rec height]);
    NSLog(@"area = %i", [rec area]);
    NSLog(@"perimeter = %i", [rec perimeter]);

    [pool drain];

    return 0;
}