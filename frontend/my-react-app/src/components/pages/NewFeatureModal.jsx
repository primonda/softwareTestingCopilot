import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { useSpring, animated } from '@react-spring/web';

const Fade = React.forwardRef(function Fade(props, ref) {
  const {
    children,
    in: open,
    onClick,
    onEnter,
    onExited,
    ownerState,
    ...other
  } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null, true);
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null, true);
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {React.cloneElement(children, { onClick })}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element.isRequired,
  in: PropTypes.bool,
  onClick: PropTypes.any,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
  ownerState: PropTypes.any,
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '1px solid white',
  boxShadow: 24,
  p: 4,
};

export default function NewFeatureModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    window.location.reload();
  }

  const handleSubmit = async (event) => {
    
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      product_name: data.get('feature-name'),
      product_description: data.get('feature-description')
    });
      try{
        const response = await fetch(`http://localhost:3000/api/features/productId/${props.pid}/addFeature`, {
          method: 'POST',
          headers: {
            'content-Type': 'application/json'
          },
          body: JSON.stringify({
            title: data.get('feature-name'),
            description: data.get('feature-description')
          })
        })
        const responseData = await response.json();
        console.log(responseData);
        handleClose();
      } catch (error){
        console.log(error);
      }
  };

  return (
    <div>
      <Button onClick={handleOpen} variant="outlined" sx={{marginTop: 4}}>Add Feature</Button>
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Fade in={open}>
        <Box component="form" onSubmit={handleSubmit}
        sx={style}>
          <Container></Container>
            <TextField 
              required 
              id="outlined-textarea" 
              label="feature Name" 
              name='feature-name'
              margin="dense"
              multiline
              sx={{
                width:'100%'
              }}
            />
            <TextField
              required
              id="outlined-textarea"
              rows={4}
              label="feature Description"
              name='feature-description'
              multiline
              margin="dense"
              sx={{
                width:'100%'
              }}
            />
            <ButtonGroup
              disableElevation
              variant="outlined"
              aria-label="Disabled button group"
              sx={{
                display: 'flow', 
                justifyContent: 'flex-end',
                marginTop:'60px',
                alignItems:'end'
              }}
            >
              <Button sx={{
                alignItems:'end'
              }}
              type='submit'
              >Submit</Button>
              <Button onClick={handleClose}>Cancel</Button>
            </ButtonGroup>
          </Box>
          </Fade>
      </Modal>
    </div>
  );
}