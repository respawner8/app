var un2=localStorage.getItem('un1');
function a(){
    console.log('abc');
    axios.get('http://13.233.152.146:3001/farmer')
    .then((response)=>{
        var s=response.data.length
        var k=1;
           
     for(var i=0;i<s;i++)
     {      
         if(un2==response.data[i].username)
         { 
             document.getElementById('x').innerHTML=`<center><h3>${un2}'s list of crops</h3></center> `
            document.getElementById('crop').innerHTML+=`<tr>
            <th scope="row">${k}</th>
            <td>${response.data[i].cropname}</td>
            <td>${response.data[i].quantity}</td>
            <td>${response.data[i].exprice}</td>
          </tr>`
          k++;
         }
     }
       
    })
    .catch((err) => {
        console.log(err)
     })
}

function abcd(){
    window.open('index.html','_self')
}
function abc(){
    window.open('admin.html','_self')
}