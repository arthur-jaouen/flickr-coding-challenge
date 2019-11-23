import { configure } from '@storybook/react';

const req = require.context('../stories', true, /.ts|.tsx$/);

configure(() => {
    req.keys().forEach(req);
}, module);
