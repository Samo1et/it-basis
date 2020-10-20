import React from 'react';
import MuiLink from '@material-ui/core/Link';
import { Link as GatsbyLink } from 'gatsby';

const Link = React.forwardRef(function Link(props, ref) {
  const {asButton, ...newProps} = props;
 
  return <MuiLink className={asButton ? 'MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary' : ''} 
                  underline={asButton ? "none" : 'hover'} 
                  color="primary" 
                  component={GatsbyLink} 
                  ref={ref} 
                  {...newProps} />;
});

export default Link;
