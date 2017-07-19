// html
<div class="bar">
  <div class="loader">

  </div>

</div>

// CSS
.bar {
  width: 300px;
  height: 5px;
  background-color: gray;
}
 .loader {
   width: 90%;
   height: 5px;
   background-color: red;
}

// JS
function setLoaderPercentage(num) {
	var el = document.getElementsByClassName('loader')[0];
	var style = window.getComputedStyle(el);
	var width = parseInt(style.getPropertyValue('width'));

  if (width === 0) {
    var i=0;
    setTimeout(function addLoader() {
      if (i<=num) {
        document.getElementsByClassName('loader')[0].style.width = i + '%';
        i++;
        setTimeout(addLoader);
      }
     })
  } else {
  	var i = width;
		console.log(i);
    setTimeout(function addLoader() {
        if (i > 0) {
          document.getElementsByClassName('loader')[0].style.width = i + '%';
          i--;
          setTimeout(addLoader);
        }
       })
    }
}


setLoaderPercentage(10);


// Second problem:
// CSS
.bg {
  height: 600px;
  width:600px;
  border-radius: 50%;
  background-color: rgba(128, 128, 128, .3);
  position: absolute;
  margin: 0;
}

.box {
  background-color: white;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  text-align: center;
  border: solid black 3px;
}

.box5 {
  position: relative;
  top: 20%;
  left: 25%;
  z-index: 40;
  background-color: red;
}

.box4 {
  position: relative;
  top: 10%;
  left: 35%;
  z-index: 30;
  background-color: green;
}

.box3 {
  position: relative;
  left: 45%;
  z-index: 20;
  background-color: yellow;
}

.box2 {
  position: relative;
  top: -10%;
  left: 55%;
  z-index: 10;
  background-color: orange;
}

.box1 {
  position: relative;
  top: -20%;
  left: 65%;
  z-index: 0;
  background-color: blue;
}

// html
<!-- Recreate: https://s3.amazonaws.com/uploads.hipchat.com/4977/124193/klabl5ln4lnpi81/Screen%20Shot%202013-02-01%20at%209.12.15%20AM.png -->

<body style="background-color: #fff; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAdCAYAAADVV140AAABtElEQVR42sWYWQ6EIBBEOY37ev/DOSkTEpKSPBmJfhBHpZtHNw3lhKZpjmVZjn3fb7V1XY+u6w7ZjeN4tG17tmma0n6nzwvf6hdtZK8+8ie/OHbq+zb4tm3noOrf970Gyj93cD3Xez1Tf9nlnheBU8c0spgJ9ZnnWb911T1FNs0E8DC4Zh9hdLVoAIDscMI8Xjl4ugT8PQMI2AG4pUsHwSF6kMLSxktS7Rm4Zq+IxSgMw3AngqUZkl/5T8d7DB7vVWgxGvr9BJZ8VgG36MT9V+/+jH6aRfkzP/XA3TgWYGYA3Hlkn479ArjvPA6Rn6ztGG+Cc9p5eX0EzoUmQCjoL8B5L5YtnAG1wD21Jce92/vSKTn2U3sAd0Fl9yWRBwFHQsvur8DzAseLSwqvJrj85Yr7kiuC67j1AmLpKiePwGXvkpcLX7zB1lJhSqMNgzt0fgly7QQZZWZKszcwA+f3kOV85sMDfVED/F/dA+BwtNcAZynA4CViqiI4f3cyOOuL+uCsewCcxf0r4Mzg4PCJ9gI4f9IZOKyvt8H5f52gNEBFfwDOO1sA/UFOXDkyuPpDsFjX/AAaVQm/PXemlQAAAABJRU5ErkJggg==); padding: 20px;">
  <div class="bg">
    <div class="box box5">5</div>
    <div class="box box4">4</div>
    <div class="box box3">3</div>
    <div class="box box2">2</div>
    <div class="box box1">1</div>
  </div>
</body>
