import { FormControl, StandardTextFieldProps } from '@mui/material';
import { FC } from 'react';

import * as S from './style';

export const TextField: FC<StandardTextFieldProps> = ({ disabled, ...props }) => {
    return (
        <FormControl fullWidth>
            <S.TextField
                {...props}
                className={disabled ? 'disabled' : ''}
                disabled
                InputLabelProps={{ shrink: true }}
            />
        </FormControl>
    );
};
