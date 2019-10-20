function fun(){

    var rate_value;

    if (document.getElementById('option1').checked) {
        rate_value = document.getElementById('option1').value;
      }
      else{
        rate_value = document.getElementById('option2').value;
      }
      console.log(rate_value);
    
    axios.post('http://13.233.152.146:3001/users',{
        username:document.getElementById('username').value,
        name:document.getElementById('fname').value,
        email: document.getElementById('email').value,
        password: document.getElementById('pass').value,
        cpassword: document.getElementById('cpass').value,
        city:document.getElementById('city').value,
        
        //name:document.getElementById('name').value,
        usertype: rate_value
    })
    .then((response)=>{
        window.open('index.html','_self');
        console.log("stop");
    })
    .catch((error)=>{

        console.log(error);
    })
}

function fun1(){
    window.open('index.html','_self')
}