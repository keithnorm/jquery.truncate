describe('$.fn.truncate', function() {
  beforeEach(function() {
    html = '<p>This is a dummy string</p>';
    nestedHtml = '<div><p>this is some text</p><p>this is some other text</p></div>';
  });

  it('truncates text to the specified value', function() {
   var truncate = 9;
   var elipsisLength = 3;
   expect($(html).truncate(truncate).html().length).toEqual(truncate + elipsisLength);
  });

  it('does not truncate text that is shorter than the specified value', function() {
    var truncate = 10;
    var html = '<p>whatever</p>';
    expect($(html).truncate(truncate).html().length).toEqual($(html).html().length);
  });

  it('truncates text containing html to the specified value', function() {
    var truncate = 9;
    var tagsLength = $(nestedHtml).html().length - $(nestedHtml).html().replace(/<\/?[^<>]*\/?>/gi, '').length;
    expect($(nestedHtml).truncate(truncate).html().length).toEqual(truncate + tagsLength);
  });

  it('allows overriding the text for the more link', function() {
    expect($(html).truncate(10, {more: 'MORE LOL'}).parent().find('.more_less').html()).toEqual('MORE LOL');
  });

  it('allows overriding the text for the less link');

  it('appends ellipsis on the end', function() {
    expect(/[\.]{3}$/.test($(html).truncate(10).html())).toBeTruthy();
  });

  it('strips empty html tags from truncated text', function() {
    var emptyTagRegex = /<(\w+)[^>]*>\s*<\/\1>/g;
    expect(emptyTagRegex.test($('<div><p></p><p>this is some more text here</p>').truncate(10).html())).toBeFalsy();
  });

  it('hides the full text', function() {
    expect($(nestedHtml).truncate(10).parent().find('.more').is(':visible')).toBeFalsy();
  });

  it('appends the classes of the element to the container', function() {
    expect($('<div class="stuff"><p>heyo</p></div>').truncate(2).parent().attr('class')).toEqual('stuff');
  });
});
