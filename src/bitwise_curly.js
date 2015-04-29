/**
 * Created by student on 08.04.15.
 */
var int1 = 1;
var int2 = 0;

/* exported errors */
function errors() {
    'use strict';

    /* jshint bitwise: false */
    if (int1 & int2) {
        int1 = int1 + 5;
    }

    int2 = int1 + int2;
}
