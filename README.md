# ElementPositioning

ElementPositioning is a very small jQuery plugin which allows you to specify the horizontal & vertical alignment of any elements within its parent container.

### How to use it

1. Include the latest version of jQuery library and the jQuery ElementPositioning plugin's script on the html page.

```
<script src="//code.jquery.com/jquery.min.js"></script>
<script src="build/js/elementpositioning.js"></script>
```

2. Call the function on the target element and pass the alignment argument, this will determine whether an element should be aligned vertically, horizontally or both ways to the parent container.

```
> top-center
> top-left
> top-right
> middle-center
> middle-left
> middle-right
> bottom-left
```

```
<div class="container">
  <div id="elem">Position this element</div>
</div>
```

```
$("#elem").positionElement({
  alignment: 'middle-center'
});
```
