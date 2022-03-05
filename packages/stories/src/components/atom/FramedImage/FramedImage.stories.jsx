import thumbnailImage from "../../../assets/images/썸네일.png";
import FramedImage from ".";

export default {
  title: "common/FramedImage",
  component: FramedImage,
};

const Template = (args) => <FramedImage {...args} />;

export const Default = Template.bind({});
Default.args = { src: thumbnailImage };
