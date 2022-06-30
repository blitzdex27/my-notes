#include <stdio.h>

int main () {
    
    enum Company { GOOGLE, FACEBOOK, XEROX, YAHOO, EBAY, MICROSOFT };
    
    enum Company myXeroxCo = XEROX;
    enum Company myGoogleCo = GOOGLE;
    enum Company myEbayCo = EBAY;
    
    printf("%i\n%i\n%i", myXeroxCo, myGoogleCo, myEbayCo);
    return 0;
}