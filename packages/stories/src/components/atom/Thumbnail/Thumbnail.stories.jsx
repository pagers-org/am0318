import Thumbnail from '.';
import thumbnailImage from '../../../assets/images/썸네일.png';

export default {
  title: 'common/Thumbnail',
  component: Thumbnail,
};
const Template = () => <Thumbnail bgSrc={thumbnailImage} alt="스토리북" />;

export const Default = Template.bind({});
