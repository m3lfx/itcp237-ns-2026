console.log('hello world')
var today = new Date();
console.log(today.getDate()); //4
console.log(today.getMonth()); //
console.log(today.getFullYear()); //2020
console.log(today.getHours()); //23
console.log(today.getMinutes()); //13
console.log(today.getSeconds()); //10
//number of milliseconds since January 1, 1970, 00:00:00 UTC
console.log(today.getTime()); //1432748611392
console.log(today.getTimezoneOffset()); //-330 Minutes

// console.log('hello world')
// var today = new Date();
// console.log(today.getDate()); //4
// console.log(today.getMonth()); //
// console.log(today.getFullYear()); //2020
// console.log(today.getHours()); //23
// console.log(today.getMinutes()); //13
// console.log(today.getSeconds()); //10
// //number of milliseconds since January 1, 1970, 00:00:00 UTC
// console.log(today.getTime()); //1432748611392
// console.log(today.getTimezoneOffset()); //-330 Minutes

// var start = Date.now();
// // loop for a long time
// for (var i = 0; i < 1000000; i++);
// var end = Date.now();
// var elapsed = end - start; // elapsed time in milliseconds
// console.log(elapsed); //71

// var s = new String("dummy"); //Creates a String object
// console.log(s); //"dummy"
// console.log(typeof s); //"object"
// var nonObject = "1" + "2"; //Create a String primitive
// console.log(typeof nonObject); //"string"
// var objString = new String("1" + "2").; //Creates a String object
// console.log(typeof objString); //"object"

// console.log("Hello".length); //5
// console.log("Hello".charAt(0)); //"H"
// console.log("Hello".charAt(1)); //"e"
// console.log("Hello".indexOf("e")); //1
// console.log("Hello".lastIndexOf("l")); //3
// console.log("Hello".startsWith("H")); //true
// console.log("Hello".endsWith("o")); //true
// console.log("Hello".includes("X")); //false

var splitStringByWords = "Hello World".split(" ");
console.log(splitStringByWords); //["Hello", "World"]
var splitStringByChars = "Hello World".split("");
console.log(splitStringByChars); //["H", "e", "l", "l", "o", " ","W", "o", "r", "l", "d"]
console.log("lowercasestring".toUpperCase()); //"LOWERCASESTRING"
console.log("UPPPERCASESTRING".toLowerCase());
//"upppercasestring"
console.log("There are no spaces in the end           ".trim());

// var a; //declares a variable but its undefined
// var b = 0;
// console.log(b); //0
// console.log(a); //undefined
// console.log(a + b)

// console.log(true && true); // true AND true returns true
// console.log(true && false);// true AND false returns false
// console.log(false && true);// false AND true returns false
// console.log("Foo" && "Bar" && "bar2");// Foo(true) AND Bar(true) returns Bar
// console.log(false && "Foo");// false && Foo(true) returns false
// console.log("Foo" && false);// Foo(true) && false returns false
// console.log(false && (1 == 2));// false && false(1==2) returns false

// console.log("" && "Foo"); //First operand is falsy - return it
// console.log("Foo" && "Bar"); //First operand is truthy, return the second operand
// console.log(0 || "Foo"); //First operand is falsy - return second operand
// console.log("Foo" || "Bar"); //First operand is truthy, return it
// console.log(function () { } || false);

function greeting(name) {
    // if (name === undefined) {
    //     names = "john"
    // }

    names = name || "John";
    console.log(name);
    // console.log("Hello " + ${names});
    console.log(`Hello ${names}`);
}
// greeting("Johnson"); // alerts "Hi Johnson";
greeting();

// c = add(1, 2);
// function add(a, b) {
//     return a + b;
// }
// console.log(c)

const add = function (a, b) {
    return a + b;
}
c = add(1, 2);

console.log(c);

const obj = {
    name: "mike",
    address: ['address1', "address2"],
    phone: {
        phone1: "9999",
        phone2: "8888",
    },
    zip: function func1() {
        return '1456'
    }
}
// console.log(obj.name)
// console.log(obj.phone.phone2)
// console.log(obj.zip())
console.log(obj.address[1])

ar validateDataForAge = function (data) {
    person = data();
    console.log(person.age);
    if (person.age < 1 || person.age > 99) {
        return true;
    } else {
        return false;
    }
};
var errorHandlerForAge = function (error) {
    // console.log("Error while processing age");
    console.log(error || "Error while processing age")
};
function parseRequest(data, validateData, errorHandler) {
    var error = validateData(data);
    if (!error) {
        console.log("no errors");
    } else {
        errorHandler();
    }
}
var generateDataForScientist = function () {
    return {
        name: "Albert Einstein",
        age: Math.floor(Math.random() * (100 - 1)) + 1,
    };
};
var generateDataForComposer = function () {
    return {
        name: "JS Bach",
        // age: Math.floor(Math.random() * (100)) + 1,
        age: 111
    };
};
parseRequest(generateDataForScientist, validateDataForAge,
    errorHandlerForAge);
parseRequest(generateDataForComposer, validateDataForAge,
    errorHandlerForAge);

var colors = ['red', 'green', 'blue'];
colors.forEach(function (color) {
    console.log(color);
});

var founders = new Map();
founders.set("facebook", "mark");
founders.set("google", "larry");
console.log(founders.size); // 2
console.log(founders.get("twitter")); // undefined
console.log(founders.has("google")); // false
for (var [key, value] of founders) {
    console.log(key + " founded by " + value);
}

var author = {
    firstname: "Douglas",
    lastname: "Crockford",
    book: {
        title: "JavaScript- The Good Parts",
        pages: "172"
    }
};
console.log(author['firstname']); //Douglas
console.log(author.lastname); //Crockford
console.log(author.book.title);

var mySet = new Set();
mySet.add(1);
mySet.add("Howdy");
mySet.add("foo");
console.log(mySet.has(1)); // true
mySet.delete("foo");
console.log(mySet.size); // 2
for (let item of mySet) console.log(item);

test.html
    < !DOCTYPE html >
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>jQuery Version</title>
                <meta charset="utf-8" />
                <script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
                <!-- <script>
                    function writeIt() {
                        document.write("jQuery Version " + $().jquery + " loaded.");
      }
                </script> -->
                <script>
                    function writeIt() {
                        $("#heading").css("font-weight", "bold").html("jQuery");
                    var q = document.getElementById("question");
                    q.innerHTML = "I Prefer jQuery!";
      }
                </script>
            </head>
            <body onload="writeIt()">
                <p id="heading">jQuery or JavaScript</p>
                <p id="question">Which method do you prefer?</p>
            </body>
        </html>


p{
    font - weight: bold;
    font - size: 50px;
    margin: 5px;
    color: blue;
}

span{
    padding: 2px;
    border: 3px ridge blue;
    color: white;
    background: blue;
    cursor: pointer;
}
    .label{
    font - size: 25px;
    margin: 10px;
}

//dom_objects.js
function textChange() {
    var inElement = document.getElementById('textIn');
    var outElements = document.getElementsByTagName('p');
    var headingElements = document.getElementsByClassName('heading');
    for (var i = 0; i < outElements.length; i++) {
        var outItem = outElements[i];
        headingElements[i].innerHTML = 'Updating ' + (i + 1) +
            ' to ' + inElement.value;
        outItem.innerHTML = inElement.value;
    }
}

jquery_Selectors.jquery_Selectors
function setEven() {
    $('li, span').css('font-weight', '');
    var $evenItems = $('li:even');
    $evenItems.css('font-weight', 'bold');
    $('span:contains(Even)').css('font-weight', 'bold');
    $('.label').html('Even');
}
function setOdd() {
    $('li, span').css('font-weight', '');
    var $oddItems = $('li:odd');
    $oddItems.css('font-weight', 'bold');
    $('span:contains(Odd)').css('font-weight', 'bold');
    $('.label').html('Odd');
}
function setFirst4() {
    $('li, span').css('font-weight', '');
    var $first4 = $('li:lt(4)');
    $first4.css('font-weight', 'bold');
    $('span:contains(\'First 4\')').css('font-weight', 'bold');
    $('.label').html('First 4');
}

< !doctype html >
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>DOM Objects</title>
            <meta charset="utf-8" />
            <script type="text/javascript" src="js/dom_objects.js"></script>
            <link rel="stylesheet" type="text/css" href="css/dom_objects.css" />
        </head>
        <body>
            <input id="textIn" type="text" />
            <input type="button" onclick="textChange()" value="Update" /><br />
            <span class="heading"></span>
            <p id="p1"></p>
            <span class="heading"></span>
            <p id="p2"></p>
        </body>
    </html>

<!DOCTYPE html >
    <html lang="en">
        <head>
            <title>jQuery Selectors</title>
            <meta charset="utf-8" />
            <script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
            <script type="text/javascript" src="js/jquery_selectors.js"></script>
            <link rel="stylesheet" type="text/css" href="css/jquery_selectors.css" />
        </head>
        <body>
            <span onclick="setEven()">Even</span>
            <span onclick="setOdd()">Odd</span>
            <span onclick="setFirst4()">First 4</span>
            <p class="label">Planets</p>
            <ul>
                <li>Poseidon</li>
                <li>Ares</li>
                <li>Apollo</li>
                <li>Hermes</li>
                <li>Nike</li>
                <li>Nemesis</li>
                <li>Zeus</li>
                <li>Hades</li>
            </ul>
        </body>
    </html>
dom_objects.css
p{
    font - weight: bold;
    font - size: 50px;
    margin: 5px;
    color: blue;
}
jquery_selectors.css
    span{
    padding: 2px;
    border: 3px ridge blue;
    color: white;
    background: blue;
    cursor: pointer;
}
    .label{
    font - size: 25px;
    margin: 10px;
}

    p{ margin: 0px; padding: 0px; }
span{
    display: inline - block;
    color: white;
    text - align: center;
}

$(document).ready(function () {
    $('input:eq(0)').click(function () {
        $('p').each(function () {
            var parts = $(this).html().split(' ');
            $(this).css({ 'font-size': parts[1] + 'px', color: parts[0] });
        });
    });
    $('input:eq(1)').click(function () {
        var items = $('p').map(function () {
            var parts = $(this).html().split(' ');
            return { color: parts[0], size: parts[1] };
        }).get();
        for (var idx in items) {
            var item = items[idx];
            var span = $('<span>' + item.color + '</span>');
            var size = item.size * 5;
            span.css({
                'background-color': item.color, 'font-size': item.size + 'px',
                width: size, height: size
            });
            $('div').prepend(span);
        }
    });
});

< !DOCTYPE html >
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script
      type="text/javascript"
      src="https://code.jquery.com/jquery-2.1.3.min.js"
    ></script>
    <script type="text/javascript" src="js/dom_manipulation.js"></script>
    <link rel="stylesheet" type="text/css" href="css/dom_manipulation.css" />
  </head>
  <body>
    <input type="button" value=".each()" />
    <input type="button" value=".map()" />
    <p>red 10</p>
    <p>orange 15</p>
    <p>yellow 20</p>
    <p>green 25</p>
    <p>blue 30</p>
    <p>indigo 35</p>
    <p>violet 40</p>
    <div></div>
  </body>
</html>

<!DOCTYPE html >
    <html lang="en">

        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
            <script type="text/javascript" src="js/dom_traverse.js"></script>
            <link rel="stylesheet" type="text/css" href="css/traverse_dom.css" />
        </head>

        <body>
            <p>How satisfied are you 1-5</p>
            <div>
                <label>Quality</label>
                <input type='text' onkeyup='update()'></input>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div>
                <label>Taste</label>
                <input type='text' onkeyup='update()'></input>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div>
                <label>Server</label>
                <input type='text' onkeyup='update()'></input>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </body>

    </html>


function update() {
    $('span').css('background-color', 'lightgrey');
    $('div').each(function (i) {
        var $input = $(this).children('input:first');
        var $value = $input.val();
        var filter = 'span:lt(' + $value + ')';
        $input.siblings(filter).css('background-color', 'blue');
    })
} 

span{
    display: inline - block;
    height: 15px;
    width: 10px;
    background - color: lightgrey;
    margin: 1px;
    border - radius: 50 %;
}
    input {
    width: 20px;
}
    label {
    display: inline - block;
    width: 60px;
}


    < !DOCTYPE html >
    <html>
        <head>
            <title></title>
            <script
                src="https://code.jquery.com/jquery-3.5.1.min.js"
                integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
                crossorigin="anonymous"
            ></script>
            <script type="text/javascript">
                function clickHandler(e) {
                    console.log(e)
        $("div").html("clicked at X postion: " + e.screenX);
      }
            </script>
        </head>

        <body>
            <div onclick="clickHandler(event)">Click Here</div>
        </body>
    </html>


div{
    border - radius: 5px;
    margin: 3px;
    padding: 5px;
    background - color: lightgrey;
    font - weight: bold;
    display: inline - block;
    cursor: pointer;
}

function clickHandler(e, objId, num, msg) {
    var obj = document.getElementById(objId);
    obj.innerHTML = 'DIV ' + num + ' says ' + msg + ' at X postion: ' + e.screenX;
}
function yesWrapper(e) {
    console.log(e.target)
    clickHandler(e, 'heading', 1, 'yes');
    e.target.removeEventListener('click', yesWrapper);
}
function noWrapper(e) {
    console.log(e.target)
    clickHandler(e, 'heading', 2, 'no');
    e.target.removeEventListener('mouseover', noWrapper);
}
function onloadHandler() {
    document.getElementById('div1').addEventListener('click', yesWrapper, false);
    document.getElementById('div2').addEventListener('mouseover', noWrapper, false);
    // document.getElementById('div2').addEventListener('mouseout', noWrapper, false);
}

< !DOCTYPE html >
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
            <script
                type="text/javascript"
                src="https://code.jquery.com/jquery-2.1.3.min.js"
            ></script>
            <script type="text/javascript" src="js/broken_event.js"></script>
            <link rel="stylesheet" type="text/css" href="css/broken_event.css" />
        </head>
        <body onload="onloadHandler()">
            <div id="div1">Say Yes</div>
            <div id="div2">Say No</div>
            <h1 id="heading"></h1>
        </body>
    </html>


div{
    border - radius: 5px;
    margin: 3px;
    padding: 5px;
    background - color: lightgrey;
    font - weight: bold;
    display: inline - block;
    cursor: pointer;
}

function clickHandler(e) {
    console.log(e)
    console.log(e.data, e.target.id)
    $('#' + e.data.objId).html(e.target.id + ' says ' + e.data.answer +
        ' at X postion: ' + e.screenX);
}
$(document).ready(function () {
    $('#div1').on({ 'click': clickHandler },
        { 'objId': 'heading', 'answer': 'yes' });
    $(document).on('click', '#div2', { 'objId': 'heading', 'answer': 'no' }, clickHandler);
});

< !DOCTYPE html >
    <html>
        <head>
            <title>Working Events</title>
            <meta charset='utf-8' />
            <script type='text/javascript' src='https://code.jquery.com/jquery-2.1.3.min.js'></script>
            <script type='text/javascript' src='js/working_event.js'></script>
            <link rel='stylesheet' type='text/css' href='css/working_event.css'>
        </head>
        <body>
            <div id='div1'>Say Yes</div>
            <div id='div2'>Say No</div>
            <h1 id='heading'></h1>
        </body>
    </html>

    <!DOCTYPE html >
    <html>
        <head>
            <title>Web Element Manipulation</title>
            <meta charset="utf-8" />
            <script
                type="text/javascript"
                src="https://code.jquery.com/jquery-2.1.3.min.js"
            ></script>
            <script
                type="text/javascript"
                src="js/web_element_manipulation.js"
            ></script>
            <link rel="stylesheet" type="text/css" href="css/web_manipulation.css" />
        </head>
        <body>
            <div id="container">
                <div id="menu" class="menu">
                    <span id="lessons" class="menuItem">lessons</span>
                    <span id="docs" class="menuItem">Docs</span>
                    <span id="fade" class="menuItem">Fade</span>
                </div>
                <div id="content"></div>
            </div>
            <div id="docMenu">
                <span onclick='setDoc("http://api.jquery.com/")'>jQuery</span>
                <span onclick='setDoc("http://api.jqueryui.com/")'>jQueryUI</span>
                <span onclick='setDoc("http://jquerymobile.com/demos/1.4.0/")'
                >jQueryMobile</span
                >
            </div>
        </body>
    </html>

$(document).ready(function () {
    $('#docMenu').hide();
    $('#lessons').click(setHourNav);
    $('#docs').click(setDocNav);
    $('#fade').click(fade);
});
function setHour(e) {
    var hour = $('#lessonSelect').val();
    $('#content p').html('Lesson ' + hour);
}
function setHourNav() {
    $('#docMenu').hide();
    $('span').removeClass('active');
    $('#lessons').addClass('active');
    var select = $('<select id=\"lessonSelect\"></select>');
    select.change(setHour);
    for (var x = 1; x < 41; x++) {
        var option = $('<option></option');
        option.val(x);
        option.html('Lesson ' + x);
        select.append(option);
    }
    $('#content').html('');
    $('#content').append(select).append('<br><p></p>');
}
function setDocNav() {
    $('#docMenu').show();
    $('span').removeClass('active');
    $('#docs').addClass('active');
}
function setDoc(doc) {
    var frame = $('<iframe></iframe>');
    frame.attr('src', doc);
    $('#content').html(frame);
}
function fade() {
    var opacity = $('#content').css('opacity');
    if (opacity < 1) {
        $('#content').css('opacity', 1);
    }
    else {
        $('#content').css('opacity', .5);
    }
}

#banner{
    height: 100px;
    color: white; background - color: blue;
    font - size: 40px; text - align: center;
}
#menu, #docMenu{
    background - color: black;
    padding: 6px 4px 9px 4px;
}
    .menuItem, #docMenu span{
    padding: 2px;
    background - image: -moz - linear - gradient(top, #2244ff 0 %, #AACCFF 85 %, #0022ff 100 %);
    background - image: -webkit - linear - gradient(top, #2244ff 0 %, #AACCFF 85 %, #0022ff 100 %);
    background - image: -ms - linear - gradient(top, #2244ff 0 %, #AACCFF 85 %, #0022ff 100 %);
    font: 20px bold;
    cursor: pointer;
}
    .active{ border: 5px groove; }
#docMenu span{ display: block; margin - top: 1px; }
#content, iframe{
    display: inline - block;
    width: 700px; height: 500px;
}
#container{ width: 800px; background - color: #C0C0C0 }
#docMenu{
    position: fixed; right: 60px; top: 60px;
}
#content{
    padding: 2px;
    color: blue;
    font - size: 20px;
}

