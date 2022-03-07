import React, { useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AwardContents from '../components/AwardContents';
import SelectStamp from '../components/SelectStamp';
import { Template } from '../components/Template';
import Loading from '../components/Loading';
import { getTemplate } from '../utils/GetSvg';
import NicknameContext from '../context/NicknameContext';

const Decorate = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const { nickname } = useContext(NicknameContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const COLORS = ['#FF5F0F', '#FFF27B', '#82E8CF', '#79BBE5'];
  const [awardParams, setAwardParams] = useState({
    userId: id,
    title: '',
    sender: nickname.sender || '',
    description: '',
    templateId: '0',
    stickerId: '0',
  });

  const changeItems = (index, name) => {
    setAwardParams({ ...awardParams, [name]: index.toString() });
  };

  const handleInput = (e) => {
    setAwardParams({ ...awardParams, [e.target.name]: e.target.value });
  };

  const handleNextButton = () => {
    if (currentPage === 2) {
      setTimeout(() => {
        navigate('/complete', { state: awardParams });
      }, 2500);
    }
    setCurrentPage((prev) => prev + 1);
  };

  const renderComponents = (currentPage) => {
    switch (currentPage) {
      case 0:
        return (
          <Template
            colors={COLORS}
            colorClicked={COLORS[Number(awardParams.templateId)]}
            changeItems={changeItems}
            selectedAwardImg={getTemplate(Number(awardParams.templateId))}
            handleNextButton={() => handleNextButton()}
          />
        );
      case 1:
        return (
          <AwardContents
            handleInput={handleInput}
            handleNextButton={handleNextButton}
          />
        );
      case 2:
        return (
          <SelectStamp
            selectedStamp={Number(awardParams.stickerId)}
            changeItems={changeItems}
            handleClick={() => handleNextButton()}
          />
        );
      case 3:
        return <Loading />;
      default:
        break;
    }
  };

  return <div>{renderComponents(currentPage)}</div>;
};
export default Decorate;
