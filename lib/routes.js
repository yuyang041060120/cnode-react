import express from 'express';

import backend from './backend';

const router = express.Router();

router.get('/', (req, res) => {
    backend.topics(req.query).then(list => {
        res.render(req.url, {
            data: list,
            title: 'CNode：Node.js专业中文社区'
        });
    });
});

router.get('/topic/:id', (req, res) => {
    backend.topic(req.params.id).then(data => {
        res.render(req.url, {
            data: data,
            title: `${data.title}-CNode技术社区`
        });
    });
});

export default router;