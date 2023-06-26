import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import CloseIcon from '@mui/icons-material/Close';
import SvgIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  maxWidth: 400,
  bgcolor: 'black',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface Props {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    children: React.ReactNode
}

const TransitionsModal = (props: Props) => {
  const handleClose = () => props.setOpen(false);

  return (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={props.open}>
          <Box sx={style}>
            <div className="w-full flex justify-end mb-8">
                <button
                    onClick={() => props.setOpen(false)}
                    className='h-8 w-8 bg-[rgba(255,255,255,0.2)] rounded-[8px] text-white'
                >
                    <SvgIcon 
                        component={CloseIcon} 
                        inheritViewBox 
                    />
                </button>
            </div>
            {props.children}
          </Box>
        </Fade>
      </Modal>
  );
};

export default TransitionsModal;