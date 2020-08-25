export default async (app, opts) => {
    app.get('/', async () => {
        return { hello: 'world'}
    });
};
