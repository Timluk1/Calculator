export const buttonItems: { label: string, variant: "gray" | "orange" | "black", calcEvent: string, isBig?: boolean}[] = [
    // 1 ряд
    { label: "AC", variant: "gray", calcEvent: "clear" },
    { label: "+/-", variant: "gray", calcEvent: "toggle-sign" },
    { label: "%", variant: "gray", calcEvent: "percent" },
    { label: "÷", variant: "orange", calcEvent: "divide" },

    // 2 ряд
    { label: "7", variant: "black", calcEvent: "7" },
    { label: "8", variant: "black", calcEvent: "8" },
    { label: "9", variant: "black", calcEvent: "9" },
    { label: "×", variant: "orange", calcEvent: "multiply" },

    // 3 ряд
    { label: "4", variant: "black", calcEvent: "4" },
    { label: "5", variant: "black", calcEvent: "5" },
    { label: "6", variant: "black", calcEvent: "6" },
    { label: "−", variant: "orange", calcEvent: "subtract" },

    // 4 ряд
    { label: "1", variant: "black", calcEvent: "1" },
    { label: "2", variant: "black", calcEvent: "2" },
    { label: "3", variant: "black", calcEvent: "3" },
    { label: "+", variant: "orange", calcEvent: "sum" },

    // 5 ряд
    { label: "0", variant: "black", calcEvent: "0", isBig: true },
    { label: ",", variant: "black", calcEvent: "comma" },
    { label: "=", variant: "orange", calcEvent: "equal" },
];
  