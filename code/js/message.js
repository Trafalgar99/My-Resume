AV.init({
    appId: "P5ftReyBRXrX8uKa6ODPKfIK-gzGzoHsz",
    appKey: "XRhnUvn3LnF8IVbzIfqE6rBo",
    serverURL: "https://p5ftreyb.lc-cn-n1-shared.com",
  });

  const query = new AV.Query('comments');
  query.find().then((comment) => {
    let array = comment.map(item=>item.attributes)
    array.forEach(item=>{
        let li = document.createElement('li');
        li.innerText = `${item.name}：${item.content}`
        let messageList = document.querySelector('#messageList'); 
        messageList.append(li)
    })
  });

  

let myForm = document.querySelector('#postMessage')
myForm.addEventListener('submit', function(e){
    e.preventDefault();//阻止刷新页面
    let content = myForm.querySelector('input[name=content]').value
    let name = myForm.querySelector('input[name=name]').value

    const comments = AV.Object.extend('comments');
    var comt = new comments();
    comt.set({"name":name,'content':content});
    comt.save().then((Object) => {
        console.log('success')
        let li = document.createElement('li');
        li.innerText = `${Object.attributes.name}：${Object.attributes.content}`
        let messageList = document.querySelector('#messageList'); 

        messageList.append(li)
        myForm.querySelector('input[name=content]').value=""
    })
})







//   const TestObject = AV.Object.extend('TestObject');
//   const testObject = new TestObject();
//   testObject.set('words', 'motherfucker!');
//   testObject.save().then((testObject) => {
//     console.log('保存成功。')
//   })