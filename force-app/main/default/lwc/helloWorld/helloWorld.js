import { LightningElement,track } from 'lwc'; //need to add a track here for complex objects tracking

export default class HelloWorld extends LightningElement {
    fullname="Ace Course"
    title="Ligthing Web Components"

    changeHandler(event){   //changeHandler is a method. changehandler recieves the data we have typed. 
        //event comes from HTML to JS
        this.title = event.target.value //the word that the user typed goes into event.target.value. 
        //And title gets updated that sends the value back to the HTML. 
        //whenever you are accessing 
        //the property inside a class, you need to use this keyword.propertyname         
    }
    

    //LWC does not automatically update information from complex data types such as Objects- 
    //Need to add @track which is a decorator. Decorator is a function that wraps anohter function or property. 
   address={
        city: 'Madison',
        postcode: 53718,
        country:'USA'
    }

    // trackHandler(event){
    //     this.address.city =event.target.value


    // }

    //good principle to not overwrite the object as above. Make a new copy of the object by using spread operator

    trackHandler(event){
        this.address= {...this.address, "city":event.target.value} 


    }

    



}