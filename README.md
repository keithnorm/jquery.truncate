# jQuery Truncate plugin
Truncates html of elements containing text nodes or a combination of text nodes and html nodes.

## Why?
Truncating nodes containing HTML is hard because you don't want to break the markup. There are some existing plugins that claim to do this properly, but they either didn't work or just seemed overly complex.

## How?
    $('.long_text').truncate(100, {
      more: 'View More',
      less: 'View Less'
    });

The final markup will take something like this: 

    <div class="long_text">
      <p>this is some text</p>
      <p>long winded text</p>
    </div>

And turn it into this:

    <div class="long_text">
      <div class="less">
        <p>this is some...</p>
      </div>
      <div class="more">
        <p>this is some text</p>
        <p>long winded text</p>
      </div>
      <p><a href="#" class="more_less">more</a></p>
    </div>
      
