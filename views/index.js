const API_URL='http://jsonplaceholder.typicode.com/users';
fetch(API_URL)
.then(data=>{return data.json();
})
.then(post=>{
    const HTMLResponse = document.querySelector('#list');
    const template = post.map(user=>`<li>
                                            <div class="col-md-12">
                                                <div class="col-md-2">
                                                    <input id="status" type="checkbox" onClick="Change(this)">
                                                </div>
                                                <div id="idTask" class="col-md-1">
                                                    ${user.id}
                                                </div>
                                                <div class="col-md-5">
                                                    ${user.name}
                                                </div>
    
                                                <div class="col-md-2">
                                                    <input type="button" value="Edit" onClick="Edit()">
                                                </div>
                                                <div class="col-md-2">
                                                    <input type="button" value="Delete" onClick="Delete()">
                                                </div>
                                            </div>
                                        </li>`);
		HTMLResponse.innerHTML= `<ul>${template}</ul>`;
})

function Add(){
    const element = document.getElementById("name").value;
  
    const task={
        name: element,
    }
    const options={
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(task),
    };
    fetch(`localhost:3000/users`,options)
    .then(data=>{
        if(!data.ok){
            throw Error(data.status);
        }
        return data.json();
    }).then(task=>{
        console.log(task);
    }).catch(e=>{
        console.log(e);
    });

    document.getElementById('name').value="";

}

function Edit(){
    const formEdit=document.querySelector('#edit')
    formEdit.innerHTML= `<div class="col-md-4">
						    <div class="col-md-12" >
				  			    <div class="content-box-large">
								    <h5><a>Edit Task</a></h5>
								    <input id="newName" class="col-md-12" type="text">
								    <input type="button" value="Save" onClick="Save()">
								    <input type="button" value="Cancel" onClick="Cancel()">
				  			    </div>
						    </div>
					    </div>`;
}

function Delete(){
    const element = document.getElementById("idTask").value;
    const options={
        method: 'DELETE',
        headers: {
            'Content-Type' : 'application/json'
        },
    };
    fetch(`localhost:3000/users/${element}`,options)
    .then(data=>{
        if(!data.ok){
            throw Error(data.status);
        }
        return data.json();
    }).then(task=>{
        console.log(task);
    }).catch(e=>{
        console.log(e);
    });         
}

function Save(){
    
    const element = document.getElementById("newName").value;
  
    const task={
        name: element,
    }
    const options={
        method: 'PUT',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(task),
    };
    fetch(`localhost:3000/users/${element}`,options)
    .then(data=>{
        if(!data.ok){
            throw Error(data.status);
        }
        return data.json();
    }).then(task=>{
        console.log(task);
    }).catch(e=>{
        console.log(e);
    });

    document.getElementById("newName").value="";
    const container=document.querySelector('#edit');
    container.innerHTML=``;
}

function Cancel(){
    const container=document.querySelector('#edit')
    container.innerHTML=``;
}

function Change(checkbox){
    if(checkbox.checked){
        const element = document.getElementById("idTask").value;
        const task={
            status: "C",
        }
        const options={
        method: 'PUT',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(task),
        };
        fetch(`localhost:3000/tasks/${element}`,options)
        .then(data=>{
            if(!data.ok){
                throw Error(data.status);
            }
            return data.json();
        }).then(task=>{
            console.log(task);
        }).catch(e=>{
        console.log(e);
    });
    }else{
        const element = document.getElementById("idTask").value;
        const task={
            status: "P",
        }
        const options={
        method: 'PUT',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(task),
        };
        fetch(`localhost:3000/tasks/${element}`,options)
        .then(data=>{
            if(!data.ok){
                throw Error(data.status);
            }
            return data.json();
        }).then(task=>{
            console.log(task);
        }).catch(e=>{
        console.log(e);
    });
    }
}
        