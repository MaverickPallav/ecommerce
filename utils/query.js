const filterQuery = (query, queryString) => {
    const filters = { ...queryString };
    const excludeFields = ['sort', 'limit', 'page'];
    excludeFields.forEach((field) => delete filters[field]);
  
    let queryStr = JSON.stringify(filters);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, (match) => `$${match}`);
  
    query.find(JSON.parse(queryStr));
    return query;
  };
  
module.exports = { filterQuery };
  