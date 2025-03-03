import { createSvgIcon } from '@mui/material';

const ViewCountIcon = createSvgIcon(
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width='13'
        height='10'
        viewBox='0 0 13 10'
        fill='none'
    >
        <path
            d='M1 5C1 5 3 1 6.5 1C10 1 12 5 12 5C12 5 10 9 6.5 9C3 9 1 5 1 5Z'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <path
            d='M6.5 6.5C7.32843 6.5 8 5.82843 8 5C8 4.17157 7.32843 3.5 6.5 3.5C5.67157 3.5 5 4.17157 5 5C5 5.82843 5.67157 6.5 6.5 6.5Z'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>,
    'ViewCountIcon'
);

export default ViewCountIcon;