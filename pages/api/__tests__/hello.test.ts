import request from 'supertest';

describe('/api/hello handler', () => {
  it('responds 200 to GET', async () => {
    return request(process.env.NEXT_PUBLIC_API_HOST)
      .get('/api/hello')
      .expect(200)
      .expect(({ body }) => {
        expect(body.name).toEqual('John Doe');
      });
  });
});
