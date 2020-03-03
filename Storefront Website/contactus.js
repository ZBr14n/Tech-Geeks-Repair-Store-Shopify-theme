/**
 * 
 *    <div class="form-verify">
{% if form.posted_successfully? %} Thanks for contacting us. We'll get back to you as soon as possible. {% endif %}
{{ form.errors | default_errors }}
      </div>
 */

 function display(){
    alert('works')
 }


 let sendButton = document.querySelector('#form');
 let contactFormSection = document.querySelector('.contact-form');
 let MessageSent = document.querySelector('.message-sent');





 sendButton.addEventListener('submit',function(event){
   // preventDefault() will not refresh the page in this case when the user clicks submit; otherwise nothing changes.
    event.preventDefault();
    contactFormSection.style.display = 'none';
   
   //  add msg here notify the user that the message has been sent.
   
   
   //  MessageSent.appendChild(reply)
   
   
 });

if (sendButton.addEventListener){
   let reply = document.createElement('h1');
   let node = document.createTextNode('testtt');
   reply.appendChild(node);
   MessageSent.appendChild(reply);
}
   