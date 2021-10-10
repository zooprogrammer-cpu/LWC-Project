import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    fullname="Zero to Hero"
    title="aura"

    changeHandler(event){   //event comes from HTML to JS
        this.title = event.target.value //the word that the user typed goes into event.target.value. 
        //And title gets updated that sends the value back to the HTML. 
        //whenever you are accessing 
        //the property inside a class, you need to use this.propertyname         
    }

    
}