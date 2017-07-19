# JavaScript Events Interview Question
Junior/Mid, 20 Minutes, Whiteboard

Event handling and optimization in the browser.

## Hints
Extending the Question
- Do the exercise in addition to the discussion questions. 

Red Flags
- In the exercise portion, the candidate attaches a listener for every element of the type. 

## Exercise: 
Given you have a form like the below with 100 questions that are radio button groups. Whenever a user answers a question, you want to give an alert that looks like the following: "Please check your answer against your W2 before submitting.", write the most efficient way to handle the event. 

### Here is the markup for the form: 
```
<h2>Monstrous Government Form</h2>
<form id="myForm" name="myForm">
  <fieldset>
    <legend>Do you live in an:</legend>
    <p><input type="radio" name="home" value="apartment" id="apartment"/> <label for="apartment">Apartment</label></p>
    <p><input type="radio" name="home" value="house" id="house"/> <label for="house">House</label></p>
    <p><input type="radio" name="home" value="mobile" id="mobile"/> <label for="mobile">Mobile Home/Trailer</label></p>
    <p><input type="radio" name="home" value="coop" id="coop"/> <label for="coop">Co-op</label></p>
    <p><input type="radio" name="home" value="none" id="none"/> <label for="none">None</label></p>
  </fieldset>
  <fieldset>
    <legend>Your income is:</legend>
    <p><input type="radio" name="inc" value="0-50K" id="0-50K"/> <label for="0-50K">$0-50,000 USD</label></p>
    <p><input type="radio" name="inc" value="50-100K" id="50-100K"/> <label for="50-100K">$50,000-100,000 USD</label></p>
    <p><input type="radio" name="inc" value="100K+" id="100K+"/> <label for="100K+">$100,000+ USD</label></p>
  </fieldset>
  <fieldset>
    <legend>Your status is:</legend>
    <p><input type="radio" name="status" value="single" id="single"/> <label for="single">single</label></p>
    <p><input type="radio" name="status" value="married" id="married"/> <label for="married">married</label></p>
    <p><input type="radio" name="status" value="partner" id="partner"/> <label for="partner">domestic partner</label></p>
  </fieldset>
  <p>This form goes one with another 97 questions....</p>
  <input type="submit" value="Submit"/>
</form>
```

## Questions:
1. On a web page, how does a browser process/handle an event?

  Things to look for:
  - Candidate mentions that the event starts at the outer-most element, and propagates to the inner-most element (capturing), then propagates back to the outer-most element (bubbling).
  - Candidate mentions that an event captures first, then bubbles (must be in that order).
  - Bonus points for mentioning that IE8 and below only support bubbling.

  Red flags:
  - Only mentions calling jQuery.on() or some equivalent method.
  - If the candidate has trouble answering, give an example (ex. "When someone clicks on an element on the page, how does JavaScript or the browser handle that event?")

2. How is this knowledge of how events work even useful?
  Things to look for:
	- Candidate mentions how code to set up event handling can be executed much quicker.

3. When you are sure you've set an event listener, and it doesn't seem to be firing, can you describe how you go about debugging something like that?
  Things to look for:
	- Use of console.log
	- Specific event listener (as targeted as possible to start)
	- Library logging tools (webkit browsers have a"monitorEvents" method)
	- Looking for key words in the code "stopEvent" and "stopPropogation"

## Sample Answers

most efficient javascript has a single event listener at the top level - in this case, the form

```
  var handleClick = function(evt) {
    var target = evt.target;
    if (target.nodeName === "INPUT" && target.getAttribute("type") === "radio") {
      alert ("Check your entry against your W2 before submitting.");
    }
  }
  $("#myForm").on("click", handleClick);
```
