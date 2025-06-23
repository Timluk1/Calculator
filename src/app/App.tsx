import { useCalc } from "@/shared/lib/useCalc";
import { buttonItems } from "@/shared/utils/buttonsItems";
import { Button } from "@/shared/ui/Button";
import styles from "@/app/styles/App.module.css";

export const App = () => {
    const { handleClick, expression, result } = useCalc();

    return (
        <div className={styles.app}>
            <div className={styles.calculator}>
                <div className={styles.display}>
                    {expression || result}
                </div>
                <div className={styles.buttons}>
                    {buttonItems.map((item, index) => (
                        <Button
                            key={index}
                            variant={item.variant}
                            calcEvent={item.calcEvent}
                            isBig={item.isBig}
                            onClick={handleClick}
                        >
                            {item.label}
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    );
};
