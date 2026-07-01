const socket =io('http://localhost:8000');
const form=document.getElementById('send-container');
const messegeInput=document.getElementById('messageInp');
const messegeContainer=document.querySelector(".chat-container");

const apppend=(message,postion)=>
{
    const messageElemnt=document.createElement('div');
    messageElemnt.innerHTML=message;
    messageElemnt.classList.add('message');
    messageElemnt.classList.add(postion);
    messegeContainer.append(messageElemnt);

}
const name=prompt("Enter your name to join");

socket.emit('new-user-joined',name);

socket.on('user-joined',name=>
{
apppend(`${name} joined the chat`,'right')
}
)