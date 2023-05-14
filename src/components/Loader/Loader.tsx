import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';
import s from "./Loader.module.scss"

defineElement(lottie.loadAnimation);


export type LordIconTrigger =
    | 'hover'
    | 'click'
    | 'loop'
    | 'loop-on-hover'
    | 'morph'
    | 'morph-two-way';

export type LordIconColors = {
    primary?: string;
    secondary?: string;
};

export type LordIconProps = {
    src?: string;
    trigger?: LordIconTrigger;
    colors?: LordIconColors;
    delay?: number;
    size?: number;
};

export const LordIcon = ({
    colors,
    src,
    size,
    trigger,
    delay,
}: LordIconProps) => {
    return (
        <div className={s.project__block_loader}>
        <div className={s.loader}>
            <lord-icon
                colors={`primary:${colors?.primary},secondary:${colors?.secondary}`}
                src={src}
                trigger={trigger}
                delay={delay}
                style={{
                    width: size,
                    height: size,
                }}
            />
        </div>
        </div>
    );
};