import React, { useEffect } from 'react';
import ReactPortal from './ReactPortal';

interface BabyModalProps {
    children: React.ReactNode;
    isOpen: boolean;
    handleClose: () => void;
}

const BabyModal = ({
    children,
    isOpen,
    handleClose
}: BabyModalProps) => {
    //close modal on escape key press
    useEffect(()=>{
        const closeOnEscapeKey = (e: KeyboardEvent) =>
            e.key === 'Escape' ? handleClose() : null;
        document.body.addEventListener('keydown', closeOnEscapeKey);
        return () => {
            document.body.removeEventListener('keydown', closeOnEscapeKey);
        }
    }, [handleClose]);

    //disable scroll on modal load
    useEffect(()=>{
        document.body.style.overflow = 'hidden';
        return (): void => {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <ReactPortal wrapperId="react-portal-modal-container">
            <>
                <div
                    onClick={handleClose} 
                    className="fixed top-0 left-0 w-screen h-screen bg-slate-950 opacity-90 z-40"
                />
                <div className="fixed rounded-lg flex flex-col border border-transparent min-w-fit overflow-hidden px-5 py-4 transition-colors border-indigo-700 bg-[rgb(16,14,40)] inset-4 lg:inset-y-24 lg:inset-x-1/3 z-40">
                    <button
                        onClick={handleClose}
                        className="py-1 px-3 self-end border  border-indigo-700 text-indigo-400 hover:bg-violet-600 hover:text-violet-50 rounded-full"
                    >
                        &#10006;
                    </button>
                    <div className="box-border h-5/6">{children}</div>
                </div>
            </>
        </ReactPortal>
    )
}

export default BabyModal;