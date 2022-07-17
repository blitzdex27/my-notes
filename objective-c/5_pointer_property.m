#import <Foundation/Foundation.h>

@class XYPoint;
@interface Rectangle : NSObject {
    int width;
    int height;
    XYPoint * origin;
}
@property (nonatomic, assign) int width;
@property (nonatomic, assign) int height;
@property (nonatomic, retain) XYPoint * origin;
- (void) setOrigin : (XYPoint *) origin;
- (void) setWH : (int) w : (int) h;
- (int) area;
- (int) perimeter;

@end

@implementation Rectangle
@synthesize width, height, origin;
- (void) setOrigin : (XYPoint *) o {
    origin = o;
}
- (void) setWH : (int) w : (int) h {
    width = w;
    height = h;
}
- (int) area {
    return width * height;
}
- (int) perimeter {
    return 2 * width + 2 * height;
}
@end

@interface XYPoint : NSObject {
    int x;
    int y;
}
@property int x, y;
- (void) setXY : (int) a : (int) b;
@end

@implementation XYPoint
@synthesize x, y;
- (void) setXY : (int) a : (int) b; {
    x = a;
    y = b;
}

@end

int main (int argc, const char * argv [] ) {
    NSAutoreleasePool * pool = [[NSAutoreleasePool alloc] init];

    Rectangle * rec = [[Rectangle alloc] init];
    XYPoint * origin = [[XYPoint alloc] init];

    [origin setXY : 2 : 3];

    [rec setWH : 3 : 4];
    [rec setOrigin : origin];


    NSLog(@"area = %i", [rec area]);
    NSLog(@"perimeter = %i", [rec perimeter]);
    NSLog(@"origin = (%i, %i)", rec.origin.x, rec.origin.y);

    [pool drain];


    return 0;
}