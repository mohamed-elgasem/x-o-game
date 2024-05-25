let title = document.querySelector('.title'); //عشان اقدر اصل للعنوان واغير فيه
let turn = 'X'; // تحديد ادوار
let squares = []; // مصفوفة لاستدعاء العناصر 

function end(num1,num2,num3){ // عملت دالة عشان امررها ع كل العناصر ال9 بدل اكتب كام سطر
    title.innerHTML = `${squares[num1]} winner`; //المربع 1 الموجود فيه اللي كسبان
    document.getElementById('item'+num1).style.background = 'green'; //تغيير الخلفية الي الاسود اذا تشابهو
    document.getElementById('item'+num2).style.background = 'green';
    document.getElementById('item'+num3).style.background = 'green';

    setInterval(function(){title.innerHTML += '.'},1000); //توقيت بعد القيم اخلص  مثلا ابدا قيم جديد بعد 4 ثواني
    setTimeout(function(){location.reload()},4000);// بدء قيمجديد بعد 4 ثواني
}

function winner(){
    for(i = 1; i < 10; i++){ //حلقة فور تتكرر تسعه مرات
      squares[i] = document.getElementById('item' + i).innerHTML; //('item'+i) معناها استدعي كل العناصر التسعة
      //حيبلي المصفوفه الفاضية ديا وف كل اندكس فيها واحفظلي مربع شكل 
    }
    // مقارنه المربعات ببعضها اي كل 3 مربعات
    if(squares[1] == squares[2] && squares[2] == squares[3] &&squares[1] != '')
    {   
        end(1,2,3);
    }
    else if(squares[4] == squares[5] && squares[5] == squares[6] &&squares[5] != '')
    {
        end(4,5,6);
    }

    else if(squares[7] == squares[8] && squares[8] == squares[9] &&squares[8] != '')
    {
        end(7,8,9);
    }
    else if(squares[1] == squares[4] && squares[4] == squares[7] &&squares[1] != '')
    {
        end(1,4,7);
    }
    else if(squares[2] == squares[5] && squares[5] == squares[8] &&squares[5] != '')
    {
        end(2,5,8);  
    }
    else if(squares[3] == squares[6] && squares[6] == squares[9] &&squares[6] != '')
    {
        end(3,6,9);
    }
    else if(squares[1] == squares[5] && squares[5] == squares[9] &&squares[5] != '')
    {
        end(1,5,9); 
    }
    else if(squares[3] == squares[5] && squares[5] == squares[7] &&squares[5] != '')
    {
        end(3,5,7);
    }
}

function game(id){ //استداعء ال (id)

    let element = document.getElementById(id);  //استدعاء للعنصر x or o  لما تضغط المربع يظهرو
    if(turn === 'X'  && element.innerHTML == ''){ // لو ده دور الاكس المربع اكون فاضي

        element.innerHTML = 'X'; // لما اكبس ع اي مربع يكتب x
        turn = 'O'; //
        title.innerHTML = 'O'; // ده دور ال O

    }else if(turn === 'O' && element.innerHTML == ''){ //لو الدور تبع ال اوو  
        element.innerHTML = 'O'; // لما اكبس اي مربع يكتب O
        turn = 'X';
        title.innerHTML = 'X';  
    }
    winner()
}