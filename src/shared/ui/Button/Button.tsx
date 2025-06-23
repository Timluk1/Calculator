import type { PropsWithChildren } from "react";
import cn from "classnames";
import styles from "./Button.module.css";

interface IButtonProps extends PropsWithChildren {
    variant: "gray" | "orange" | "black";
    calcEvent: string;
    onClick: (calcEvent: string) => void;
    isBig?: boolean;
}

export const Button: React.FC<IButtonProps> = ({
    children,
    calcEvent,
    variant = "gray",
    onClick,
    isBig,
}) => {
    return (
        <button
            className={cn(styles.button, styles[variant], isBig && styles.big)}
            onClick={() => onClick(calcEvent)}
        >
            {children}
        </button>
    );
};
