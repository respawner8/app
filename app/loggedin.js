var un=localStorage.getItem('un');
function a(){
    console.log('abc');
    axios.get('http://13.233.152.146:3001/farmer')
    .then((response)=>{
        var s=response.data.length
        var k=1;
           
     for(var i=0;i<s;i++)
     {      
         if(un==response.data[i].username)
         { 
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




function form1(){
    document.getElementById('inTable').innerHTML=`
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">CROP NAME</th>
        <th scope="col">QUANTITY</th>
        <th scope="col">EXPECTED PRICE</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td><div class="input-group flex-nowrap">
        <div class="input-group-prepend">
          
        </div>
        <input id="cropName" type="text" class="form-control" placeholder="Name" aria-label="Username" aria-describedby="addon-wrapping">
      </div></td>
        <td><div class="input-group flex-nowrap">
        <div class="input-group-prepend">
          
        </div>
        <input id="cropQuantity" type="text" class="form-control" placeholder="Quantity" aria-label="Username" aria-describedby="addon-wrapping">
      </div></td>
        <td><div class="input-group flex-nowrap">
        <div class="input-group-prepend">
          
        </div>
        <input id="exPrice" type="text" class="form-control" placeholder="Price" aria-label="Username" aria-describedby="addon-wrapping">
      </div></td>
      </tr>
    </tbody>
  
  `
  document.getElementById('inTableButton').innerHTML=`
  <div class="row">
      <div class="col-sm-12">
          <center><button type="button" class="btn btn-success" onclick="form2()">SUBMIT CROP</button></center>
      </div>
  </div>`


}

function form2(){
    var cropName = document.getElementById('cropName').value;
    var cropQuantity = document.getElementById('cropQuantity').value;
    var exPrice = document.getElementById('exPrice').value;
    document.getElementById('cropName').value=``;
    document.getElementById('cropQuantity').value=``;
    document.getElementById('exPrice').value=``;
    
    //console.log(un);
    axios.post('http://13.233.152.146:3001/farmer',{
        username: un,
        cropname: cropName,
        quantity: cropQuantity,
        exprice: exPrice,
       
    })
    .then((response)=>{

        console.log("stop");
    })
    .catch((error)=>{

        console.log(error);    
    })

    document.getElementById('crop').innerHTML=``;

   axios.get('http://13.233.152.146:3001/farmer')
    .then((response)=>{
        var si=response.data.length
        var j=1;
           
     for(var i=0;i<si;i++)
     {      
         if(un==response.data[i].username)
         { 
            document.getElementById('crop').innerHTML+=`<tr>
            <th scope="row">${j}</th>
            <td>${response.data[i].cropname}</td>
            <td>${response.data[i].quantity}</td>
            <td>${response.data[i].exprice}</td>
          </tr>`
          j++;
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