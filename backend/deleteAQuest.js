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
import { response } from "express"

fetch('http://localhost:3000/heroes/:heroId/quests/:questId'),{
    method: 'DELETE'
}
{
    "description": "Some description"

}