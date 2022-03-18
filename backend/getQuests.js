//code from https://www.npmjs.com/package/http-status-codes
import { response } from 'express';
import {
    ReasonPhrases, 
    StatusCodes,
    getReasonPhrase, 
    getStatusCode, 
} from 'http-status-codes'; 

response
        .status(StatusCodes.OK)
        .send(ReasonPhrases.OK);
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