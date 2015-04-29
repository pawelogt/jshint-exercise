describe('logout', function() {
    it('should return sum of all params', function() {
        var data = {request:1,isManual:2,whereAmI:3,onSuccess:4}
        expect(logout(data)).toEqual(10);
    })
})