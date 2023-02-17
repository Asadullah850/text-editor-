
document.getElementById('bold').addEventListener('click',function(){
    var  textArea =document.getElementById("textarea").style.fontWeight ;
    if(textArea == 'normal')
       {
           document.getElementById("textarea").style.fontWeight = 'bold';
       }
    else
       {
           document.getElementById("textarea").style.fontWeight = 'normal';
       }
})
document.getElementById('italic').addEventListener('click',function(){
    var  textArea =document.getElementById("textarea").style.fontStyle ;
    if(textArea == 'normal')
       {
           document.getElementById("textarea").style.fontStyle = 'italic';
       }
    else
       {
           document.getElementById("textarea").style.fontStyle = 'normal';
       }
})
document.getElementById('underline').addEventListener('click',function(){
    var  textArea = document.getElementById("textarea").style.textDecoration ;
    if(textArea == 'none')
       {
           document.getElementById("textarea").style.textDecoration = 'underline';
       }
    else
       {
           document.getElementById("textarea").style.textDecoration = 'none';
       }
})
// alingn left button
document.getElementById('alingn-left').addEventListener('click',function(){
    var  textArea = document.getElementById("textarea").style.textDecoration ;
    if(textArea == 'none')
       {
           document.getElementById("textarea").style.textAlign = 'left';
        //    console.log('left');
       }
    else
       {
           document.getElementById("textarea").style.textDecoration = 'none';
       }
})
// alingn center button
document.getElementById('align-center').addEventListener('click',function(){
    var  textArea = document.getElementById("textarea").style.textDecoration ;
    if(textArea == 'none')
       {
           document.getElementById("textarea").style.textAlign = 'center';
        //    console.log('left');
       }
    else
       {
           document.getElementById("textarea").style.textDecoration = 'none';
       }
})
// alingn right button
document.getElementById('align-right').addEventListener('click',function(){
    var  textArea = document.getElementById("textarea").style.textDecoration ;
    if(textArea == 'none')
       {
           document.getElementById("textarea").style.textAlign = 'right';
        //    console.log('left');
       }
    else
       {
           document.getElementById("textarea").style.textDecoration = 'none';
       }
})
// colour-field button
document.getElementById('colour-field').addEventListener("change",function(event){
    var  textArea = document.getElementById("textarea") ;
    textArea.style.color = event.target.value;
})
// font-size button

document.getElementById('font-size').addEventListener("keyup",function(){
    let  textArea = document.getElementById("textarea").style.fontSize ;
    let inputId = document.getElementById('font-size').value;
    if(textArea != 11)
       {
           document.getElementById("textarea").style.fontSize = inputId + 'px';
           console.log(inputId);
       }

})