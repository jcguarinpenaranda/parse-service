export class ParseService {
  static count(
    query: Parse.Query, 
    options?: Parse.Query.CountOptions,
  ): Parse.Promise<number> {
    return query.count(options);
  }

  static fetch(obj:Parse.Object, options?: Parse.Object.FetchOptions):
  Parse.Promise<Parse.Object> {
    return obj.fetch(options);
  }

  static find(
    query: Parse.Query, 
    options?: Parse.Query.FindOptions,
  ): Parse.Promise<Parse.Object[]> {
    return query.find(options);
  }

  static first(
    query: Parse.Query, 
    options?: Parse.Query.FirstOptions,
  ): Parse.Promise<Parse.Object> {
    return query.first(options);
  }

  static save(obj:Parse.Object, options?: Parse.Object.SaveOptions):
  Parse.Promise<Parse.Object> {
    return obj.save(null, options);
  }

  static destroy(obj:Parse.Object, options?: Parse.Object.DestroyOptions):
  Parse.Promise<Parse.Object> {
    return obj.destroy(options);
  }

  static each(
    query: Parse.Query, 
    callback: (obj: Parse.Object) => any,
    options?: Parse.Query.EachOptions,
  ): Parse.Promise<any> {
    return query.each(callback, options);
  }
}
