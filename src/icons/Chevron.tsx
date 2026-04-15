import { Icon } from "./Icon";


export const Chevron = (props: React.SVGProps<SVGSVGElement>) => (
  <Icon name="chevron" {...props}>
    <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </Icon>
);
