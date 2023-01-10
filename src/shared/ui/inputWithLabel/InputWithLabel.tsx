import InputMask from 'react-input-mask';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './InputWithLabel.module.scss';

interface InputWithLabelProps {
    className?: string;
    onChange: (value: string) => void;
    onFocus?: () => void;
    value: string;
    placeholder?: string;
    symbol?: string;
    label?: string;
    type?: string;
    disabled?: boolean;
    fullWidth?: boolean;
    refProps?: React.RefObject<HTMLInputElement>;
    mask?: string;
}

export const InputWithLabel = memo((props: InputWithLabelProps) => {
    const {
        className,
        onChange,
        value,
        placeholder,
        symbol,
        label,
        type = 'text',
        disabled,
        refProps,
        onFocus,
        mask,
        fullWidth,
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(cls.Wrapper, { [cls.fullWidth]: fullWidth }, [className])}>
            {label && <span className={cls.Label}>{label}</span>}
            <div className={cls.Content}>
                {!mask
                    ? (
                        <>
                            <input
                                className={cls.StyledInput}
                                type={type}
                                value={value}
                                onChange={onChangeHandler}
                                placeholder={placeholder}
                                disabled={disabled}
                                ref={refProps}
                                onFocus={onFocus}
                            />
                            {symbol && <span className={cls.Symbol}>{symbol}</span>}
                        </>
                    )
                    : (
                        <InputMask
                            value={value}
                            className={cls.StyledInput}
                            onChange={onChangeHandler}
                            placeholder={placeholder}
                            disabled={disabled}
                            onFocus={onFocus}
                            type={type}
                            mask={mask}
                        />
                    )}
            </div>
        </div>
    );
});
