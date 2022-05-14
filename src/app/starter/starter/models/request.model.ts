export class RequestApi<T> {
  info: RequestInfo| undefined
  results:T| undefined;
}

export class RequestInfo {
  count:number | undefined;
  pages:number| undefined;
  next:string| undefined;
  prev:string| undefined;
}
