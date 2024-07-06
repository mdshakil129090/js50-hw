// ex 1 click the button to change the word

function textChange(){
    document.getElementById('t_c').innerHTML="hellow bangladesh";
}

//ex 2 click the button to show the date

function showDate(){
    document.getElementById('s_date').innerHTML=Date();
}

//ex 3 click the button to bloom/close the flower
function flowerClose(){
    document.getElementById('f_img').src="images/close flower.png"
}
function flowerBloom(){
    document.getElementById('f_img').src="images/bloom flower.png";
}

//ex 4 click the button to change the text color
function colorChange(){
    document.getElementById('c_change').style.color="red";
}
//ex 5 click the button to show or hide the text
function showText(){
    document.getElementById('sh_text').style.display="block";
}
function hideText(){
    document.getElementById('sh_text').style.display="none";
}
//ex 6 click the button to show the text throw document.write
function showTextDo(){
    document.write("hellow bangladesh")
}
//ex 7 click the button to show the alart
function showAlart(){
    window.alert("hard work is the main key of success");
}
//ex 8 click the button to show the texr into console
function showConsole(){
    console.log("everyoe have a dream");
}
//ex 9 click the button to show the result
var number1=10;
var number2=5;
result=number1+number2;
function rAddition(){
    document.getElementById('o_result').innerHTML=result;
    
}
//ex 10 creating object details
const person ={firstName:"Raihan",lastName:" talukder",age:50,eyeColor:"blue"};
function personDetail(){
    document.getElementById('object_detail').innerHTML=person.firstName + " eye color is " +person.eyeColor;
    document.getElementById('ob_col').innerHTML=person.firstName +" is "+person.age+" years old.";
    document.getElementById('ful_na').innerHTML="His full name is "+person.firstName+person.lastName;
    
    

}
//ex 11 move the mouse on the button to show the date

function showDateByMouse(){
    document.getElementById('currnt_date').innerHTML=Date();
}
//ex 12 use of length property
let text="this is my first java practice";

    document.getElementById('t_l').innerHTML=text.length;
    //ex 13 charAt method//
    let text2="BANGLADESH";
    document.getElementById('ch_n').innerHTML=text2.charAt(3);
    //ex 14 slice string method
    let text3="kashmir is an awesome place";
    
    function sliceWord(){
        document.getElementById('slice_s').innerHTML=text3.slice(14,20);
    }
    //ex 15 convert alphabet from uppercase to lowercase
    function lowerScentence(){
        document.getElementById('low_s').innerHTML=text5.toLowerCase();
    }
    function upperScentence(){
        document.getElementById('upp_s').innerHTML=text5.toUpperCase();
    }
    //ex 16 string concat method
    let text6="this is "
    let text7="my"
    let text8=" first work"

    function concatAll(){
        document.getElementById('con_s').innerHTML=text6.concat(text7,text8);
    }
    //ex 17 String Search Methods
    let message ="today is friday"
    document.getElementById('s_w_method').innerHTML="after use the function startsWith the result is:     " + message.startsWith('friday');
    document.getElementById('e_w_method').innerHTML="after use the function endsWith the result is:       " + message.endsWith('friday');
    document.getElementById('inc_method').innerHTML="after use the function includes the result is:       " + message.includes('friday');
    //ex 20 string template
    let firstName2="ali";
    let lastName2="baba";
    let fullName2=`${firstName2} ${lastName2}`;
    let hello =`Hello ${fullName2}`;
    document.getElementById('tamp_st').innerHTML=hello;



