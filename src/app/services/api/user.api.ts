import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { SnackerService } from '../core';
import { User } from 'src/app/models';
import { BaseApi } from './base';

@Injectable({
    providedIn: 'root'
})
export class UserApi extends BaseApi<User>{
    constructor(
        http: HttpClient,
        snacker: SnackerService
    ) { super(http, snacker, 'https://jsonplaceholder.typicode.com/', 'users'); }
}
