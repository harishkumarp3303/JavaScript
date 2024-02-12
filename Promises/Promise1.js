
// creating promise

let prom=new Promise((resolve,reject)=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
          .then(response => {
              if(response.status==200){
                  
                  response.json().then(d=>resolve(d))
            }else{
                reject("Error occurred")
            }
            
            })
    
    })
    
    // calling a promise
    
    prom.then((data)=>{
        console.log(data)
    }
    ).catch(data=>
        console.log(data))