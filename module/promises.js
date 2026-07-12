console.log("send the message")
function whatsapp(message)
{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve("message sent successfully")},2000)
  })
}
whatsapp("hello").then((res)=>{console.log(res)}).catch((rej)=>{console.log(rej)})

console.log("waiting for message to be send")