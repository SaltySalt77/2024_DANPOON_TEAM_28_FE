import React from 'react';
import type { Preview } from '@storybook/react';
import tz from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import dayjs from 'dayjs';
import { locale } from 'dayjs';
import 'dayjs/locale/ko';
import { ThemeProvider } from '@mui/material';
import theme from '../src/constants/theme';

import '../src/index.css';
import { MemoryRouter } from 'react-router-dom';

dayjs.extend(utc);
dayjs.extend(tz);
locale('ko');
dayjs.tz.setDefault('Asia/Seoul');

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        (Story) => {
            return (
                <MemoryRouter initialEntries={['/']}>
                    <ThemeProvider theme={theme}>
                        <Story />
                    </ThemeProvider>
                </MemoryRouter>
            );
        },
    ],
};

export default preview;
