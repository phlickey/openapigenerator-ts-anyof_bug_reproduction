import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { ObservableArrayApi } from './ObservableAPI';

import { ArrayApiRequestFactory, ArrayApiResponseProcessor} from "../apis/ArrayApi";
export class PromiseArrayApi {
    private api: ObservableArrayApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ArrayApiRequestFactory,
        responseProcessor?: ArrayApiResponseProcessor
    ) {
        this.api = new ObservableArrayApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get Example Data (Array)
     */
    public getExampleDataDataArray(_options?: Configuration): Promise<Array<string | number>> {
        const result = this.api.getExampleDataDataArray(_options);
        return result.toPromise();
    }


}



import { ObservableObjectApi } from './ObservableAPI';

import { ObjectApiRequestFactory, ObjectApiResponseProcessor} from "../apis/ObjectApi";
export class PromiseObjectApi {
    private api: ObservableObjectApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ObjectApiRequestFactory,
        responseProcessor?: ObjectApiResponseProcessor
    ) {
        this.api = new ObservableObjectApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get Example Data (Object)
     */
    public getExampleDataDataObject(_options?: Configuration): Promise<{ [key: string]: string | number; }> {
        const result = this.api.getExampleDataDataObject(_options);
        return result.toPromise();
    }


}



