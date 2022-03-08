import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { WELCOME_INTRO } from '../constants';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const WelcomeModal = () => {
  const [open, setOpen] = useState(true);
  const hasVisitedBefore = localStorage.getItem('hasVisitedBefore');

  useEffect(() => {
    setOpen(!hasVisitedBefore);
  }, [hasVisitedBefore]);

  const handleClose = () => setOpen(false);

  const handleCloseOnDay = () => {
    const nowDate = new Date();
    setOpen(false);
    const expires = nowDate.setHours(nowDate.getHours() + 24);
    localStorage.setItem('hasVisitedBefore', expires);
  };

  return (
    <div>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2" fontWeight={700}>
            당신에게 주겠상🏆 이용 방법!
          </Typography>
          <Box id="keep-mounted-modal-description" sx={{ my: 3 }}>
            {WELCOME_INTRO.map((text, index) => (
              <Typography key={index} sx={{ marginTop: 1 }}>
                {text}
              </Typography>
            ))}
          </Box>
          <hr />
          <Box
            sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', mt: 3 }}
          >
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="오늘 하루 열지 않기"
                onClick={handleCloseOnDay}
              />
            </FormGroup>
            <Button variant="contained" onClick={handleClose}>
              닫기
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default WelcomeModal;
