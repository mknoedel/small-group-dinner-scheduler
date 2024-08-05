import { FunctionComponent, ReactNode } from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

interface Props {
  endNode?: ReactNode;
  startNode?: ReactNode;
  title?: string;
}

/**
 * Renders TopBar composition
 */
const TopBar: FunctionComponent<Props> = ({ endNode, startNode, title = '', ...restOfProps }) => {
  return (
    <AppBar
      component="div"
      {...restOfProps}
    >
      <Toolbar disableGutters sx={{ paddingX: 1 }}>
        {startNode}

        <Typography
          variant="h6"
          sx={{
            marginX: 1,
            flexGrow: 1,
            textAlign: 'center',
            whiteSpace: 'nowrap',
          }}
        >
          {title}
        </Typography>

        {endNode}
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;