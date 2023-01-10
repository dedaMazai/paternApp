import React, { memo } from 'react';
import ChevronDown from '@/shared/assets/icons/ArrowDown.svg';
import { Icon } from '../Icon/Icon';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Skeleton } from '../Skeleton/Skeleton';

import cls from './CustomSelect.module.scss';

export interface IItem {
    id?: number;
    img?: string;
    full_name?: string;
    value: string;
    name: string;
}

interface CustomSelectProps {
    className?: string;
    list: IItem[];
    selectHandler: (item: IItem) => void;
    label?: string;
    selected: IItem;
    noSelect?: boolean;
    fullWidth?: boolean;
}
export const CustomSelect = memo((props: CustomSelectProps) => {
    const {
        className,
        list,
        selectHandler,
        label,
        selected,
        noSelect = false,
        fullWidth,
    } = props;

    const [selectedValue, setSelectedValue] = React.useState(selected);
    const [activeList, setActiveList] = React.useState(false);

    React.useEffect(() => {
        setSelectedValue(selected);
    }, [selected]);

    const handleChangeSelectedValue = React.useCallback((cur: IItem) => {
        setActiveList(false);
        selectHandler(cur);
    }, [selectHandler]);

    const handleChangeActiveList = React.useCallback(() => {
        setActiveList(!activeList);
    }, [activeList]);

    React.useEffect(() => {
        if (activeList) {
            document.body.addEventListener('click', handleChangeActiveList);
        } else {
            document.body.removeEventListener('click', handleChangeActiveList);
        }
        return () => document.body.removeEventListener('click', handleChangeActiveList);
    }, [handleChangeActiveList, activeList]);

    return (
        <div className={classNames(cls.Wrapper, { [cls.fullWidth]: fullWidth }, [className])}>
            {!label ? <Skeleton width="100%" border="8px" height="24px" /> : <div className={cls.Label}>{label}</div>}
            {!noSelect && (
                <div className={cls.CustomSelectWrapper}>
                    <div
                        className={
                            classNames(cls.SelectedOption, { [cls.isActiveList]: activeList })
                        }
                        onClick={(e) => {
                            e.stopPropagation();
                            setActiveList(!activeList);
                        }}
                    >
                        {selectedValue?.img && (
                            <div className={cls.ImageWrapper}>
                                <img
                                    src={`/images/currencies/${selectedValue.img}.svg`}
                                    alt=""
                                />
                            </div>
                        )}
                        <div>{selectedValue?.name}</div>
                        <div
                            className={
                                classNames(cls.ChevronWrapper, { [cls.isActiveList]: activeList })
                            }
                        >
                            <Icon Svg={ChevronDown} className={cls.img} />
                        </div>
                    </div>
                    {activeList && list.length ? (
                        <div
                            className={
                                classNames(cls.List, { [cls.isActiveList]: activeList })
                            }
                        >
                            {list
                                .filter((item: IItem) => item.name !== selectedValue.name)
                                .map((item: IItem) => (
                                    <React.Fragment key={item.name}>
                                        <div
                                            className={cls.Option}
                                            key={item.name}
                                            onClick={() => handleChangeSelectedValue(item)}
                                        >
                                            {item.img && (
                                                <div className={cls.ImageWrapper}>
                                                    <img
                                                        src={`/images/currencies/${item.img}.svg`}
                                                        alt=""
                                                    />
                                                </div>
                                            )}
                                            <div>{item.name}</div>
                                        </div>
                                    </React.Fragment>
                                ))}
                        </div>
                    )
                        : null}
                </div>
            )}
        </div>
    );
});
