import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'


import { ObservableArrayApi } from "./ObservableAPI";
import { ArrayApiRequestFactory, ArrayApiResponseProcessor} from "../apis/ArrayApi";

export interface ArrayApiGetExampleDataDataArrayRequest {
}

export class ObjectArrayApi {
    private api: ObservableArrayApi

    public constructor(configuration: Configuration, requestFactory?: ArrayApiRequestFactory, responseProcessor?: ArrayApiResponseProcessor) {
        this.api = new ObservableArrayApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get Example Data (Array)
     * @param param the request object
     */
    public getExampleDataDataArray(param: ArrayApiGetExampleDataDataArrayRequest = {}, options?: Configuration): Promise<Array<string | number>> {
        return this.api.getExampleDataDataArray( options).toPromise();
    }

}

import { ObservableObjectApi } from "./ObservableAPI";
import { ObjectApiRequestFactory, ObjectApiResponseProcessor} from "../apis/ObjectApi";

export interface ObjectApiGetExampleDataDataObjectRequest {
}

export class ObjectObjectApi {
    private api: ObservableObjectApi

    public constructor(configuration: Configuration, requestFactory?: ObjectApiRequestFactory, responseProcessor?: ObjectApiResponseProcessor) {
        this.api = new ObservableObjectApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get Example Data (Object)
     * @param param the request object
     */
    public getExampleDataDataObject(param: ObjectApiGetExampleDataDataObjectRequest = {}, options?: Configuration): Promise<{ [key: string]: string | number; }> {
        return this.api.getExampleDataDataObject( options).toPromise();
    }

}
