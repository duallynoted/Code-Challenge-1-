console.log('js');

$(document).ready(readyNow);
let totalClicks = 0;

function readyNow(){
$('#generateButton').on('click', handleCreateButton);
$('#swapButton').on('click', handleSwapButton);

}
// Using jQuery, append a <div> element when you click the button.
function handleCreateButton(){
    console.log('handleCreateButton is working');
    let el = $('#appendedDiv');
    let outPutString = '<div class="container" id="appendedDiv">'
    outPutString += '<p id="clickCounter">Counter</p>'
    outPutString += '<div class="container" id="swapAndDeleteButtons">' 
    // Inside the <div> element created in step two, append two <button> elements with text of "Swap" & "Delete".
    outPutString += '<button id="swapButton">Swap</button><span><button>Delete</button></span>'
    outPutString += '</div>'
    outPutString += '</div>'
    el.append(outPutString);
    // Inside the <div> element you created in the previous step, create a <p> element 
//that shows how many times you have clicked the "Generate" button from the first step.
    $('#clickCounter').text('Click Count: ' + totalClicks++);
}


// In a CSS file, any <div> created using the "Generate" button should start with red as it's background-color.
//DONE IN CSS
// Clicking a "Swap" <button> should change its parent background-color from red to yellow (HINT: Research toggleClass).

//***This is where I'm stuck. My small step is trying to log if the swap button is working, and I can't get it to work. */
function handleSwapButton () {
    console.log('swap is working');       
};

// $('#swapButton').click(function (){
//     $('#appendedDiv').toggleClass('secondary');
    // })
    
// Clicking the "Swap" <button> on a yellow div should turn the background-color to red.

// Clicking a "Delete" <button> should remove its parent <div>.
