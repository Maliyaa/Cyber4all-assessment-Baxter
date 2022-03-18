//code needed for routing 
import { response } from 'express';
import {
    ReasonPhrases, 
    StatusCodes,
    getReasonPhrase, 
    getStatusCode, 
} from 'http-status-codes'; 

response
        .status(getStatusCode('No Content'))
        .send({
            error: 'Quest was updated in the database'
        });
response
        .status(getStatusCode('Bad Request'))
        .send({
            error: 'Route herold does not match the Quest\'s herold in database'
        });
response
        .status(getStatusCode('Internal Server Error'))
        .send({
            error: 'Hero was not found for given ID'
        });
// code from https://medium.com/@9cv9official/what-are-get-post-put-patch-delete-a-walkthrough-with-javascripts-fetch-api-17be31755d28

import { response } from "express";

fetch('http://localhost:3000/heroes/:heroId/quests/:questId', {
  method: 'PATCH', 
  body: JSON.stringify({
      completed: true
  }),
  headers: {
      "Content-type": "application/json; charset=UTF-8"
  }  
})
.then(response => response.json())
.then(json => console.log(json))
{
   "description": "Scome description" //Vscode is throwing a syntax error because I am using a ":" it wants ";" but that's not what the body calls for

}