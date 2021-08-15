import axios, { AxiosResponse } from 'axios';
import { IActivity } from '../models/activity';

axios.defaults.baseURL = 'http://localhost:5000/';

const responstBody = (responst: AxiosResponse) => responst.data;

const sleep = (ms: number) => (response: AxiosResponse) =>
    new Promise<AxiosResponse>(resolve => setTimeout(()=> resolve(response), ms));

const request = {
    get: (url: string) => axios.get(url).then(sleep(1000)).then(responstBody),
    post: (url: string, body: {}) =>
        axios.post(url, body).then(sleep(1000)).then(responstBody),
    put: (url: string, body: {}) =>
        axios.put(url, body).then(sleep(1000)).then(responstBody),
    del: (url: string) =>
        axios.delete(url).then(sleep(1000)).then(responstBody),
};

const Activities = {
    list: (): Promise<IActivity[]> => request.get('/activities'),
    details: (id: string) => request.get(`/activities/${id}`),
    create: (activity: IActivity) => request.post('/activities', activity),
    update: (activity: IActivity) =>
        request.put(`/activities/${activity.id}`, activity),
    delete: (id: string) => request.del(`/activities/${id}`),
};

export default {
    Activities,
};
