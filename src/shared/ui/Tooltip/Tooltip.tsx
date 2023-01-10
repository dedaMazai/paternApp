import { ReactNode, useRef } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { mapDirectionClass } from '../Popups/styles/consts';
import { DropdownDirection } from '@/shared/types/ui';

import cls from './Tooltip.module.scss';

interface TooltipProps {
    children: ReactNode;
    text: string;
    direction?: DropdownDirection;
}

export const Tooltip = (props: TooltipProps) => {
    const {
        children,
        text,
        direction = 'top right',
    } = props;

    const menuClasses = [mapDirectionClass[direction]];

    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const toggleMenu = () => {
        buttonRef?.current?.click();
    };

    return (
        <Popover>
            {({ open }) => (
                <div
                    onMouseEnter={toggleMenu}
                    onMouseLeave={toggleMenu}
                    className={cls.wrapper}
                >
                    <Popover.Button ref={buttonRef} className={cls.trigger}>
                        {children}
                    </Popover.Button>

                    <Transition
                        show={open}
                    >
                        <Popover.Panel className={classNames(cls.text, {}, menuClasses)}>
                            {text}
                        </Popover.Panel>
                    </Transition>
                </div>
            )}
        </Popover>
    );
};
