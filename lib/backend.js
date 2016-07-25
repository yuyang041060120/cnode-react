import fetch from 'node-fetch';
import QueryString from 'query-string';

export default {
    topics(params){
        return fetch('http://cnodejs.org/api/v1/topics?' + QueryString.stringify(params))
            .then(res => res.json())
            .then(data => data.data);
    },
    topic(id){
        return fetch(`http://cnodejs.org/api/v1/topic/${id}`)
            .then(res => res.json())
            .then(data => data.data);
    }
}