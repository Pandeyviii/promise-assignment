const user={
    userName:"Vishal pandey",
    lastActivityTime:"13 jan"
}
const posts=[];
function createPost(Post){
    return new Promise((resolve,reject)=>{
        posts.push(this.post);
        resolve("Post is created");

    })
}
function updateLastUserActivityTime(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           // user.lastActivityTime=new Date().getTime();
            resolve(new Date());
        },1000);
    });
}
Promise.all([createPost({title: 'Post Five', body: 'This is Post Five'}), updateLastUserActivityTime()])
.then((createPostResolves,updateLastUserActivityTimeResolves)=>{
    console.log(updateLastUserActivityTimeResolves);
    console.log(createPostResolves);
  
})
