import React from "react";

type IconProps = {
  className?: string;
  color?: string;
  size?: number;
  icon?: React.ComponentType<{
    size?: number;
    className?: string;
    color?: string;
  }>;
};

function Icon({ icon: IconComponent, className, color, size }: IconProps) {
  if (!IconComponent) return null;
  return <IconComponent className={className} color={color} size={size} />;
}

export default Icon;