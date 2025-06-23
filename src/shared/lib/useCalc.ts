import { evaluate } from "mathjs";
import { useState } from "react";

const operatorMap: Record<string, string> = {
    sum: "+",
    subtract: "-",
    multiply: "*",
    divide: "/",
};

export const useCalc = () => {
    const [expression, setExpression] = useState<string>("");
    const [result, setResult] = useState<string>("0");

    // callbck для кнопок калькулятора
    const handleClick = (calcEvent: string) => {
        switch (calcEvent) {
            case "clear":
                setExpression("");
                setResult("0");
                break;
            case "toggle-sign":
                toggleSign();
                break;
            case "percent":
                handlePercent();
                break;
            case ["sum", "subtract", "multiply", "divide"].includes(calcEvent)
                ? calcEvent
                : "":
                handleOperator(calcEvent);
                break;
            case "equal":
                calculate();
                break;
            case "comma":
                setExpression((prev) => prev + ".");
                break;
            default:
                setExpression((prev) => prev + calcEvent);
                break;
        }
    };

    // если несколько операторов, то подсчитывем результат
    const handleOperator = (operator: string) => {
        const symbol = operatorMap[operator];

        try {
            if (/[+\-*/]$/.test(expression)) {
                setExpression((prev) => prev.slice(0, -1) + symbol);
                return;
            }

            if (expression) {
                const evalResult = evaluate(expression);
                const newExpr = String(evalResult) + symbol;

                setExpression(newExpr);
                setResult(String(evalResult));
            } else {
                setExpression("0" + symbol);
            }
        } catch {
            setResult("Error");
        }
    };

    // подсчитываем результат
    const calculate = () => {
        try {
            const evalResult = evaluate(expression);
            setResult(String(evalResult));
            setExpression(String(evalResult));
        } catch {
            setResult("Error");
        }
    };

    // меняем знак числа
    const toggleSign = () => {
        if (!expression) return;
        try {
            const current = evaluate(expression);
            const toggled = -1 * current;
            setExpression(String(toggled));
            setResult(String(toggled));
        } catch {
            setResult("Error");
        }
    };

    // подсчитываем процент
    const handlePercent = () => {
        if (!expression) return;
        try {
            const current = evaluate(expression);
            const percentValue = current / 100;
            setExpression(String(percentValue));
            setResult(String(percentValue));
        } catch {
            setResult("Error");
        }
    };

    return {
        expression,
        result,
        handleClick,
    };
};
