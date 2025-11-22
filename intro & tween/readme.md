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


```md
code : 

```html

    <main>
        <!-- <h1>Hey</h1> -->

        <div class="star">

        </div>
        <div class="star">

        </div>
        <div class="star">

        </div>

    </main>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/gsap.min.js"
        integrity="sha512-NcZdtrT77bJr4STcmsGAESr06BYGE8woZdSdEgqnpyqac7sugNO+Tr4bGwGF3MsnEkGKhU2KL2xh6Ec+BqsaHA=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="script.js"></script>

```

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
  duration: 4,
  delay: 2,
  rotation: 360,
  scale: 1.2,
  stagger:1,
  backgroundColor: "pink",
  borderRadius: "150px 80px 30px",
});


```

----

## Timeline

it is a container for multiple tweens
