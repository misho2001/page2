let requests=new XMLHttpRequest();
requests.addEventListener('load',function(){
    console.log(this,this.responseText)
});
requests.open('GET','https://jsonplaceholder.typicode.com/posts')
requests.send();