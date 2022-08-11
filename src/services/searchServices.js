import { request } from '~/utils';

async function searchServices(q, type = 'less') {
    try {
        const res = await request.get('users/search', {
            params: {
                q,
                type,
            },
        });

        return res.data.data;
    } catch (err) {
        console.log(err);
    }
}

export default searchServices;
