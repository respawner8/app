function a1()
    {
        axios.get('http://13.233.152.146:3001/users')
        .then((response)=>{
            for(var i=0;i<response.data.length;i++)
                {
                    if(response.data[i].usertype=="Retailer")
                    { var ab=response.data[i].username;
                        document.getElementById('card').innerHTML+=` 
                    <div class="col-sm-12 col-lg-4 col-md-4">
                    <div class="card" style="width: 18rem;">
                            <div class="card-body">
                              <h5 class="card-title">${response.data[i].username}</h5>
                            </div>
                            <ul class="list-group list-group-flush">
                              <li class="list-group-item">${response.data[i].email}</li>
                              <li class="list-group-item">${response.data[i].city}</li>
                            </ul>
                            <div class="card-body">
                              <button onclick="func('${ab}')" >crop list</button>
                            </div>
                          </div>
                    `}
                }

        })
        
        .catch((err) => {
            console.log(err)
         })
    }

function func(user1)
{
    localStorage.setItem("un1",user1);
    window.open('admincrop.html','_self')
}

function abcd(){
    window.open('index.html','_self')
}
function abc(){
    windown.open('admin.html','_self')
}