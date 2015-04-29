/**
 * Created by student on 08.04.15.
 */

// JSHint: Too many parameters per function (4).
function logout(data) {
'use strict';
    return data.request+data.isManual+data.whereAmI+data.onSuccess;
}
var data={};
data.request=1;
data.isManual=2;
data.whereAmI=3;
data.onSucces=5;
logout(data);