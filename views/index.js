const API_URL='http://jsonplaceholder.typicode.com/users';
fetch(API_URL)
.then(data=>{return data.json();
})
.then(post=>{
    const HTMLResponse = document.querySelector('#list');
    const template = post.map(user=>`<li>
                                            <div class="col-md-12">
                                                <div class="col-md-2">
                                                    <input type="checkbox">
                                                </div>
                                                <div class="col-md-6">
                                                    ${user.name}
                                                </div>
                                                <div class="col-md-2">
                                                    <input type="button" value="Edit" onClick="Edit()">
                                                </div>
                                                <div class="col-md-2">
                                                    <input type="button" value="Delete" onClick="Deleted()">
                                                </div>
                                            </div>
                                        </li>`);
		HTMLResponse.innerHTML= `<ul>${template}</ul>`;
})

function Add(){
    //agregar conexion a API
            //limpiat caja
}

        function Edit(){
            const formEdit=document.querySelector('#edit')
            formEdit.innerHTML= `<div class="col-md-4">
						            <div class="col-md-12" >
				  			            <div class="content-box-large">
								            <h5><a>Edit Task</a></h5>
								            <input class="col-md-12" type="text">
								            <input type="button" value="Save" onClick="Save()">
								            <input type="button" value="Cancel" onClick="Cancel()">
				  			            </div>
						            </div>
					            </div>`;
        }

        function Delete(){
            //agregar conexion a API
        }

        function Save(){
            //agregar conexion a API
            const container=document.querySelector('#edit')
            container.innerHTML=``;
        }

        function Cancel(){
            const container=document.querySelector('#edit')
            container.innerHTML=``;
        }

/*
		req.addEventListener("load",onRequestHandler);
		req.open("GET",API_URL+"/users");
		req.send();*/