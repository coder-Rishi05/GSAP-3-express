### Gsap object (Tweening basics)

#### gsap methods

gsap.to()
gsap.from()
gsap.fromTo()

1. tween

- the tween change a single property of a single object over a time.

ex:

```js
gsap.to(".star", {
  x: 500, // it means translateX = 500px
  y: 200,
  duration: 3,
  delay: 3,
});
```

- the tween can change multiple properties of a single object over a time.

```js
gsap.to(".star", {
  x: 500, // it means translateX = 500px
  y: 200,
  duration: 4,
  delay: 2,
  rotation: 360,
  scale: 1.2,
  backgroundColor: "pink",
  borderRadius: "150px 80px 30px",
});
```

- stagger:

- A tween can animate multiple objects with staggered start times
  basically jb hamare pass multiple objects han jinhe hm animate krte han same class se tb hm stagger use kr skte han taki ek bad dusra chale naki ek saath.
  stagger:1 means
  when first object move second will move after 1s then 3rd after 1s of second object.

````md
code :

```html
<main>
  <!-- <h1>Hey</h1> -->

  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
</main>
<script
  src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/gsap.min.js"
  integrity="sha512-NcZdtrT77bJr4STcmsGAESr06BYGE8woZdSdEgqnpyqac7sugNO+Tr4bGwGF3MsnEkGKhU2KL2xh6Ec+BqsaHA=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
></script>
<script src="script.js"></script>
```
````

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}
html,
body {
  height: 100%;
  width: 100%;
}

main {
  height: 100%;
  width: 100%;
  background-color: #222;
}

.star {
  height: 150px;
  width: 150px;
  border-radius: 50%;
  background-color: rgb(92, 255, 74);
  border: 4px solid white;
}
```

```js
gsap.to(".star", {
  x: 500, // it means translateX = 500px
  y: 200,
  duration: 4, // deafult duration is 500ms
  delay: 2,
  rotation: 360,
  scale: 1.2,
  stagger: 1,
  backgroundColor: "pink",
  borderRadius: "150px 80px 30px",
});
```

---

## Timeline

it is a container for multiple tweens

Behind the scenes gsap changes the target’s inline style during the animation.

For best performance animate CSS Transform values and opacity:

x

y

rotation

rotationX

rotationY

skewX and skewY

scaleX, scaleY, or just scale

GSAP can animate any numeric property you throw at it.

width and height

backgroundColor \*hyphenated values need to be camelCase

color

padding

left and top (must set position to relative, absolute, or fixed)

vh and vw

Changing values that are not CSS Transforms or opacity can cause the browser to re-do its layout of the page which in extreme situations can hinder performance. For a few tweens, it’s not the end of the world as some purists make it out to be.

# from and fromto

from() and fromTo()

gsap.from() animates from the values you specify to the object’s natural values.

To animate from x and y values of 400, use:

gsap.from(".fred", {x:400, y:400});
gsap.fromTo() animates from the values you specify to the values you specify.

The 2 objects in the code below are the from vars and to vars.

gsap.fromTo(".fred", {x:400, y:400}, {x:200, y:200});
For best results make sure the from vars and to vars have the same properties.

fromTo() Exercise
1: Open: https://codepen.io/snorkltv/pen/qBBxPme

2: Type the following code:

gsap.fromTo(".fred",
{x:700, y:400, scale:1, opacity:0},
{x:400, y:200, scale:3, opacity:1, duration:3});
3: Experiment with other properties.

### Special Properties: Delay and Repeat

Special properties define how the animation should run and what it should do. Special properties are not animated.

delay: how much time should transpire before animation begins

repeat: how many times the animation should repeat

yoyo: when set to true the animation will play back and forth

repeatDelay: how much time should transpire between each repeat

An animation will repeat indefinitely if you set repeat:-1

### Ease and Using the Ease Visualizer

An ease controls the rate of change as your animation plays.

In simple uses an ease will control whether your animation slows down or speeds up.

An ease can be applied on the way out (default), on the way in, or both directions.

The steeper the curve the faster change is taking place.

ease:”bounce” will bounce on the way out

ease:”bounce.in” will bounce on the way in

ease:”bounce.inOut” will bounce on the way in and out

Some eases can be configured

ease:”back.config(6)” will have a stronger overshoot
