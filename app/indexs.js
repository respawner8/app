

function fun(){
    

    var pass=document.getElementById('pass').value;
        var usern=document.getElementById('usern').value;
        document.getElementById('pass').value=``;
        document.getElementById('usern').value=``;
    axios.get(`http://13.233.152.146:3001/users/${usern}`)
    .then((response)=>{
        console.log(response)
        
        
        if(response.data[0].password==pass && response.data[0].username==usern)
        {
            localStorage.setItem("un",response.data[0].username);
            if(response.data[0].usertype=="Retailer")
            {window.open('loggedin.html','_self');}
            else {window.open('admin.html','_self')}
            
        }
        else {alert("Invalid username or password")}
      
    })

    .catch((err) => {
       console.log(err)
    })


}
function fun1(){
    window.open('signup.html','_self');
}

