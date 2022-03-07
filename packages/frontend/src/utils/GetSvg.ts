//도장
import Stamp1 from '../assets/icons/stampImage1.svg';
import Stamp2 from '../assets/icons/stampImage2.svg';
import Stamp3 from '../assets/icons/stampImage3.svg';
import Stamp4 from '../assets/icons/stampImage4.svg';
import Stamp5 from '../assets/icons/stampImage5.svg';
import Stamp6 from '../assets/icons/stampImage6.svg';
//도장 버튼
import Stampbutton1 from '../assets/icons/stampbutton1.svg';
import Stampbutton2 from '../assets/icons/stampbutton2.svg';
import Stampbutton3 from '../assets/icons/stampbutton3.svg';
import Stampbutton4 from '../assets/icons/stampbutton4.svg';
import Stampbutton5 from '../assets/icons/stampbutton5.svg';
import Stampbutton6 from '../assets/icons/stampbutton6.svg';
//상장 템플릿 배경
import award_mint from '../assets/images/award_mint.svg';
import award_blue from '../assets/images/award_blue.svg';
import award_yellow from '../assets/images/award_yellow.svg';
import award_orange from '../assets/images/award_orange.svg';

export const getImage = (selectedStamp) => {
  switch (selectedStamp) {
    case 0:
      return Stamp1;
    case 1:
      return Stamp2;
    case 2:
      return Stamp3;
    case 3:
      return Stamp4;
    case 4:
      return Stamp5;
    case 5:
      return Stamp6;
    default:
      return;
  }
};

export const getStamp = (index) => {
  switch (index) {
    case 0:
      return Stampbutton1;
    case 1:
      return Stampbutton2;
    case 2:
      return Stampbutton3;
    case 3:
      return Stampbutton4;
    case 4:
      return Stampbutton5;
    case 5:
      return Stampbutton6;
    default:
      return;
  }
};

export const getTemplate = (index) => {
  switch (index) {
    case 0:
      return award_orange;
    case 1:
      return award_yellow;
    case 2:
      return award_mint;
    case 3:
      return award_blue;
    default:
      return;
  }
};
