declare module "react-vertical-timeline-component" {
  import { ComponentType, ReactNode, CSSProperties } from "react";

  export interface VerticalTimelineProps {
    animate?: boolean;
    className?: string;
    layout?: "1-column" | "2-columns";
    lineColor?: string;
    children?: ReactNode;
  }

  export interface VerticalTimelineElementProps {
    className?: string;
    contentStyle?: CSSProperties;
    contentArrowStyle?: CSSProperties;
    date?: string;
    icon?: ReactNode;
    iconStyle?: CSSProperties;
    position?: "left" | "right";
    visibilitySensorProps?: object;
  }

  export const VerticalTimeline: ComponentType<VerticalTimelineProps>;
  export const VerticalTimelineElement: ComponentType<VerticalTimelineElementProps>;
}
