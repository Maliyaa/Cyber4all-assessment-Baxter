//code needed for routing 
import { response } from 'express';
import {
    ReasonPhrases, 
    StatusCodes,
    getReasonPhrase, 
    getStatusCode, 
} from 'http-status-codes'; 

response
        .status(StatusCodes.CREATED)
        .send(ReasonPhrases.CREATED);
response
        .status(StatusCodes.NOT_FOUND)
        .send({
            error: getReasonPhrase(StatusCodes.NOT_FOUND)
        });
response
        .status(getStatusCode('Internal Server Error'))
        .send({
            error: 'Hero was not found for given ID'
        });
//creating a post request for Creating a Quest using XMLHttpRequest
//code found on: https://reqbin.com/code/javascript/wzp2hxwh/javascript-post-request-example#:~:text=To%20send%20an%20HTTP%20POST,subscribe%20to%20the%20onreadystatechange%20event.
let url = "http://localhost:3000/heroes/:id/quests";

let xhr = new XMLHttpRequest();
xhr.open("POST", url);

xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function(){
    if (xhr.readyState === 4) {
        console.log(xhr.responseText);
    }
};

let quest = {
    "name": "Save the Cat",
    "description": "Save the cat from the burning tree!"
}



