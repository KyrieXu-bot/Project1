
//Submit Function for contact.
function myFunction() {
    alert("You have successfully submitted a message!");
}


//Vote function. If someone votes, the number of votes will plus 1 and transfrom the number to width of columns.
function voteFunction(){
    for(var i = 0; i < document.getElementsByName("option").length; i++){

        if(document.getElementsByName("option")[i].checked == true){
            var width = document.getElementById(i).style.width;

            //Transform the Int(number of votes) into the width of tr(px).
            width = parseInt(width);
            width += 3;
            document.getElementById(i).style.width = width+"px";
            var label = "label"+i;
            var num = document.getElementById(label).innerText;
            document.getElementById(label).innerText = ++num;
        }
    }
    alert("Vote Successfully!");
     
}

//Function for Login table 
function loginFunction(){
    var login=document.getElementById('login');
    var bg=document.getElementById('bg');

    //Click "Click here to login", pop up the login window and cover layer.
    var adminBtn=document.getElementById('adminBtn');
    adminBtn.onclick=function(){

        login.style.display="block";
        bg.style.display="block";
        return false;
    }

    //Close the table and hide the cover layer.
    var closeBtn=document.getElementById('closeBtn');
    closeBtn.onclick=function(){
        login.style.display="none";
        bg.style.display="none";
        return false;
    }

    //Mouse drag function
    var login_title=document.getElementById('login-title');
    login_title.onmousedown=function(e){
        e = e || window.event;
        var x=e.pageX || e.clientX +(document.body.scrollLeft || document.documentElement.scrollLeft);
        var y=e.pageY || e.clientY +(document.body.scrollTop || document.documentElement.scrollTop);
                
        var boxX=login.offsetLeft;
        var boxY=login.offsetTop;
                
        var mouse_in_boxX=x-boxX;
        var mouse_in_boxY=y-boxY;
                
        document.onmousemove=function(e){
            var x=e.pageX || e.clientX +(document.body.scrollLeft || document.documentElement.scrollLeft);
            var y=e.pageY || e.clientY +(document.body.scrollTop || document.documentElement.scrollTop);
                    
            login.style.left=x-mouse_in_boxX+256+'px';
            login.style.top=y-mouse_in_boxY-142+'px';
        }
    }
            
    login_title.onmouseup = function(){
        document.onmousemove=null;
    }
}