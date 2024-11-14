// src/components/header.js
/*<Typewriter
style={{ marginTop: 0, paddingTop: 0 }}
options={{
  deleteSpeed: "natural",
}}
onInit={typewriter => {
  typewriter
    .typeString("Web developer")
    .pauseFor(2500)
    .deleteAll()
    .typeString("Web designer")
    .pauseFor(2500)
    .deleteAll()
    .typeString("Software developer")
    .callFunction(() => {
      setIsLoaded(true)
    })
    .start()
}} 
*/

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Hello World!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Strings can be removed')
    .pauseFor(2500)
    .deleteChars(7)
    .typeString('<strong>altered!</strong>')
    .pauseFor(2500)
    .start();