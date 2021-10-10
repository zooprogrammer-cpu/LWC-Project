import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    name  //undefined
    age=30  //these local properties are only available in this class
    fullname="Salesforce Wisconsin"
    showData =false
    details={
        name:"dummy",
        place:"Melbourne"
    }
    userList = ["A","B","C"]

}