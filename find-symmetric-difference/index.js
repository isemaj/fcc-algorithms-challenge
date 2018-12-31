function sym() {
  let result = [];
  let args = [...arguments];

  args.forEach(value => {
    new Set(value).forEach(data => {
      if (result.indexOf(data) === -1) result.push(data);
      else result.splice(result.indexOf(data), 1);
    })
  })  
  return result;
}