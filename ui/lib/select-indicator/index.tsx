import { CaretDownIcon } from '@ui/icons';
import * as S from './style';

type Props = {
    className: string;
};

export const SelectIndicator: React.FC<Props> = ({ className }) => {
    return (
        <S.Root className={className}>
            <CaretDownIcon />
        </S.Root>
    );
};
