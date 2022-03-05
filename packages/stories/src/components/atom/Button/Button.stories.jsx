import Button from ".";

export default {
  title: "common/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
export const Action = Template.bind({});
export const Disabled = Template.bind({});
Action.args = { theme: "action", text: "action" };
Disabled.args = { theme: "disabled", text: "disabled" };
