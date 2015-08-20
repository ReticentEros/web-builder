describe('Defailt NW Window', function () {
  it('Show Hellow World', function () {
    expect(element(by.id('heading')).getText()).toEqual('Hello World!');
  });
});
