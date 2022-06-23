const button = document.getElementById("primary");
console.log(button);
var cnt=0;
button.addEventListener('click',()=>{
    cnt = cnt + 1;
    console.log(cnt)
    document.getElementById("count").innerHTML = cnt;
});

// ----------------------------------------------------------

const textarea = document.getElementById("textarea");
var onoverCnt=0;
textarea.addEventListener('mouseover',()=>{
    onoverCnt = onoverCnt + 1;
    console.log(onoverCnt);
    document.getElementById("onhovercount").innerHTML = onoverCnt;
})

// ----------------------------------------------------------

const textarea1 = document.getElementById("textarea1");
var onmouseouthover=0;
textarea1.addEventListener('mouseout',()=>{
    onmouseouthover = onmouseouthover + 1;
    console.log(onmouseouthover);
    document.getElementById("omouseout").innerHTML = onmouseouthover;
})

// ----------------------------------------------------------

window.onload = ()=>{
    alert("Hello I'm onload function");
}

// ----------------------------------------------------------

document.getElementById("text_type").addEventListener("change", ()=>{
    var input_text = document.getElementById("text_type");
    input_text.value = input_text.value.toUpperCase();
});


document.getElementById("string").addEventListener("change", ()=>{
    let ans= document.getElementById("string").value;
    console.log(ans);
    alert("The input value has changed. The new value is: " + ans);
});

// ----------------------------------------------------------

// Destructor

const a = {
    name:'karan',
    surname:'thopate'
}
document.getElementById("showoutput").addEventListener("click",()=>{
    let ans=a.name;
    console.log(ans);

    document.getElementById("result").innerHTML = ans
})

// ----------------------------------------------------------

// Array
    // pop
    array=[1,2,3,4,5,6,7];
    popans = array.pop();
    document.getElementById("pop").innerHTML = "Delete last element "+popans;
    document.getElementById("poparray").innerHTML = array;

    // push
    pushans = array.push("7");
    document.getElementById("push").innerHTML = "added last element "+pushans;
    document.getElementById("pusharray").innerHTML = array;

    //find
    findans = array.find(a=>a>2);
    document.getElementById("find").innerHTML = "find the element grater than 2. return one element "+findans;

    // filter
    filterans = array.filter(a=>a>2);
    document.getElementById("filter").innerHTML = "find the element grater than 2. return all element "+filterans

    // Map

    mapans = array.map(elem=>elem*elem)
    document.getElementById("map").innerHTML = " Square of all number "+mapans;

    // splice
    var array1=[1,2,3,4,5];
    splicearray = array1.splice(2)
    document.getElementById("originalsplice").innerHTML = "Original Array "+ array1;
    document.getElementById("splice").innerHTML = splicearray;

    // slice
    var array2=[1,2,3,4,5];
    slicearray = array2.slice(2,-1)
    document.getElementById("originalslice").innerHTML = "Original Array "+ array2;
    document.getElementById("slice").innerHTML = slicearray;

    // backtick

    var my_name = 'Alpha Beta';
    var text = `My name is ${my_name}`;
    document.getElementById("backtick").innerHTML = text;

    // Ternery Operator
    let ab=10;
    let b=20;

    ab > b ? console.log("ab is less than b") : console.log("b is grater than ab");
    ab < b &&  console.log("ab is less than b")