import React from 'react';
import MuiLink from '@material-ui/core/Link';
import { Link as GatsbyLink } from 'gatsby';

const Link = React.forwardRef(function Link(props, ref) {

  return <MuiLink className={props.asButton ? 'MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary' : ''} 
                  underline={props.asButton ? "none" : 'hover'} 
                  color="primary" 
                  component={GatsbyLink} 
                  ref={ref} 
                  {...props} />;
});

export default Link;
