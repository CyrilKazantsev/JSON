const object = JSON.parse(
    '{ "foo": 123456789123456789123 }',
    (key, value) => (key === 'foo') ? BigInt(value) : value
  );
  
  console.log(object.foo);