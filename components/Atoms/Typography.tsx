import { cva } from "class-variance-authority";
import React from "react";
type TypographyProps = {
    children?: React.ReactNode;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
    weight?: "light" | "normal" | "semibold" | "bold";
    color?: "black" | "primary" | "red" | "icon" | "white";
    className?: string;
    dir?: "ltr" | "rtl";
};

function Typography({
    size = "md",
    weight = "normal",
    color = "black",
    className,
    dir,
    children,
}: TypographyProps) {
    const selectedSize = {
        xs: "text-sx [letter-spacing:1.5px]",
        sm: "text-sm [letter-spacing:0.4px]",
        md: "text-md [letter-spacing:0.25px]",
        lg: "text-lg [letter-spacing:0.15px]",
        xl: "text-xl [letter-spacing:0px]",
        xxl: "text-[40px] [letter-spacing:-0.5px]",
    }[size];
    const selectedweight = {
        light: "font-light",
        normal: "",
        semibold: "font-semibold",
        bold: "font-bold",
    }[weight];
    const seletedColor = {
        black: "text-text",
        primary: "text-primary",
        red: "text-error",
        icon: "text-icon",
        white: "text-white",
    }[color];
    const classes = cva([
        selectedSize,
        selectedweight,
        seletedColor,
        className,
    ])();
    if (size === "xxl") return <h1 className={classes}>{children}</h1>;
    return (
        <p className={classes} dir={dir}>
            {children}
        </p>
    );
}

export default Typography;
