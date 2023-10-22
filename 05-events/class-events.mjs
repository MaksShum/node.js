import EventEmitter from 'events';

class Post extends EventEmitter {
  constructor(name, text) {
    super();
    this.name = name;
    this.text = text;
    this.likes = 0;
    this.on('likePost', (username) => console.log(`some ${username} like post`))
    this.on('error',(error) => {
        console.log(error)
    })
  }


  like(username) {
    if(!username) {
       return this.emit('error',new Error('have not username'))
    }
    this.likes += 1;
    this.emit('likePost', username);
  }
}

const myPost = new Post('Max', 'My post');


// console.log(myPost.name)
// console.log(myPost.text)
// console.log(myPost.likes)
myPost.like('ad');
setTimeout(() => myPost.like(), 1000);
setTimeout(() => myPost.like('add'), 2000);
// console.log(myPost.likes)
