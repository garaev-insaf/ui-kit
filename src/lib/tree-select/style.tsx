import { styled } from '@mui/material';
import { TreeItem as MUITreeItem } from '@mui/x-tree-view';

export const TreeItem = styled(MUITreeItem)(({ theme }) => ({
    '.MuiTreeItem-content': {
        padding: '14px 16px',
        flexDirection: 'row-reverse',
        '&.Mui-expanded': {
            svg: {
                transform: 'rotateZ(180deg)',
                transition: 'all 200ms',
                color: theme.palette?.text?.secondary,
            },
        },
        '&:hover': {
            backgroundColor: theme.palette?.additionalColors.buttonSecondary,
            color: theme.palette?.primaryColors.accent,
        },
    },
}));
