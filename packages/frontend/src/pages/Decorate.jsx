import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextArea from '../components/TextArea';
import Button from '@project/stories/src/components/atom/Button';
import Layout from '../components/Layout';
import Input from '../components/Input';
import SelectStamp from '../components/SelectStamp';
const Decorate = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const handleNextButton = () => {
    if (currentPage === 2) {
      navigate('/Complete');
    }
    setCurrentPage(prev => prev + 1);
  };

  const handleInput = e => {
    console.log(e.target.value);
  };

  const renderComponents = currentPage => {
    switch (currentPage) {
      case 0:
        return (
          <>
            <h1>예츄 컴포넌트 자리</h1>
          </>
        );
      case 1:
        return (
          <Layout title={'상장을 주고 싶은 이유를적어보상!'}>
            <Input
              placeholder={'ex. 친절한 어른상'}
              name={'상장 이름(최대 10자)'}
              handleInput={handleInput}
              onChange={e => handleInput(e)}
            />
            <TextArea />
            <Button theme="action" text="다음" onClick={() => handleNextButton()} />
          </Layout>
        );
      case 2:
        return <SelectStamp handleClick={() => handleNextButton()} />;
      default:
        break;
    }
  };

  return <div>{renderComponents(currentPage)}</div>;
};
export default Decorate;
