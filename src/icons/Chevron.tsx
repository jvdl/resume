import { Icon } from "./Icon";

export const Chevron = (props: React.SVGProps<SVGSVGElement>) => (
  <Icon name="chevron" {...props}>
    <path
      d="M6 9L12 15L18 9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);
