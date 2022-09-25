import NextLink from 'next/link';

// material-ui
import { ButtonBase } from '@mui/material';
import { SxProps } from '@mui/system';

// project import
import LogoMain from './LogoMain';
import LogoIcon from './LogoIcon';
import { DEFAULT_PATH } from 'config';

// ==============================|| MAIN LOGO ||============================== //

interface Props {
  reverse?: boolean;
  isIcon?: boolean;
  sx?: SxProps;
  to?: string;
}

const LogoSection = ({ reverse, isIcon, sx, to }: Props) => (
  <NextLink href={!to ? DEFAULT_PATH : to} passHref>
    <ButtonBase disableRipple sx={sx}>
      {isIcon ? <LogoIcon /> : <LogoMain reverse={reverse} />}
    </ButtonBase>
  </NextLink>
);

export default LogoSection;
