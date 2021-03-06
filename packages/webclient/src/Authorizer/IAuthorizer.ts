export interface IAuthorizer {
    getToken: (force?: boolean, args?: string[]) => Promise<string>;
    subscriptionID: string;
    baseUrl: string;
    getCloudSuffixUrl: (suffixName: string) => string;
    getCloudEndpointUrl: (endpointName: string) => string;
}