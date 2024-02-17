
       function setupTypewriter(t) {
           var HTML = t.innerHTML;
           t.innerHTML = "";
           var cursorPosition = 0,
               tag = "",
               writingTag = false,
               tagOpen = false,
               typeSpeed = 100,
               tempTypeSpeed = 0;
           var type = function() {
               if (writingTag === true) {
                   tag += HTML[cursorPosition];
               }
               if (HTML[cursorPosition] === "<") {
                   tempTypeSpeed = 0;
                   if (tagOpen) {
                       tagOpen = false;
                       writingTag = true;
                   } else {
                       tag = "";
                       tagOpen = true;
                       writingTag = true;
                       tag += HTML[cursorPosition];
                   }
               }
               if (!writingTag && tagOpen) {
                   tag.innerHTML += HTML[cursorPosition];
               }
               if (!writingTag && !tagOpen) {
                   if (HTML[cursorPosition] === " ") {
                       tempTypeSpeed = 0;
                   }
                   else {
                       tempTypeSpeed = (Math.random() * typeSpeed) + 50;
                   }
                   t.innerHTML += HTML[cursorPosition];
               }
               if (writingTag === true && HTML[cursorPosition] === ">") {
                   tempTypeSpeed = (Math.random() * typeSpeed) + 50;
                   writingTag = false;
                   if (tagOpen) {
                       var newSpan = document.createElement("span");
                       t.appendChild(newSpan);
                       newSpan.innerHTML = tag;
                       tag = newSpan.firstChild;
                   }
               }
               cursorPosition += 1;
               if (cursorPosition < HTML.length - 1) {
                   setTimeout(type, tempTypeSpeed);
               }
           };
           return {
               type: type
           };
       }
     
       
    //    var typewriter = document.getElementById('typewriter');
    //    var typewriter2 = document.getElementById('typewriter2');
       
    //    typewriter = setupTypewriter(typewriter);
    //    typewriter.type();

       
    //    typewriter2 = setupTypewriter(typewriter2);
    //    typewriter2.type();

    //    var typewriter = document.getElementsByClassName("typewriter")[0];
    //    typewriter = setupTypewriter(typewriter);
    //    typewriter.type();

    const typewriter = document.querySelectorAll(".typewriter");
    typewriter.forEach(element => {
        element = setupTypewriter(element);
        element.type();
    });

let editor = document.querySelector("#editor");

ace.edit(editor, {
  theme: "ace/theme/cobalt",
  mode: "ace/mode/javascript",
});

let editor2 = document.querySelector("#editor2");

ace.edit(editor2, {
  theme: "ace/theme/cobalt",
  mode: "ace/mode/javascript",
});

     




     
       
