import { classNames } from '@/shared/lib/classNames/classNames';
import { Modal } from '@/shared/ui/Modal/Modal';
import { ShowBotsWindow } from '../ShowBotsWindow/ShowBotsWindow';

interface ShowBotsModalProps {
    className?: string;
    isOpen: boolean;
    onClose?: () => void;
}

export const ShowBotsModal = ({ className, isOpen, onClose }: ShowBotsModalProps) => (
    <Modal
        className={classNames('', {}, [className])}
        isOpen={isOpen}
        onClose={onClose}
        lazy
    >
        <ShowBotsWindow />
    </Modal>
);
