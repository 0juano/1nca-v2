import React, { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../utils/cn';

interface SheetProps {
  children: ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

interface SheetTriggerProps {
  asChild?: boolean;
  children: ReactNode;
}

interface SheetContentProps {
  children: ReactNode;
  side?: 'left' | 'right' | 'top' | 'bottom';
  className?: string;
}

const SheetContext = React.createContext<{
  open: boolean;
  setOpen: (open: boolean) => void;
}>({
  open: false,
  setOpen: () => {},
});

export function Sheet({ children, open: controlledOpen, onOpenChange }: SheetProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(false);
  
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : uncontrolledOpen;
  const setOpen = React.useCallback((newOpen: boolean) => {
    if (isControlled) {
      onOpenChange?.(newOpen);
    } else {
      setUncontrolledOpen(newOpen);
    }
  }, [isControlled, onOpenChange]);

  return (
    <SheetContext.Provider value={{ open, setOpen }}>
      {children}
    </SheetContext.Provider>
  );
}

export function SheetTrigger({ asChild, children }: SheetTriggerProps) {
  const { setOpen } = React.useContext(SheetContext);

  if (asChild) {
    return React.cloneElement(children as React.ReactElement, {
      onClick: () => setOpen(true),
    });
  }

  return (
    <button onClick={() => setOpen(true)}>
      {children}
    </button>
  );
}

export function SheetContent({ children, side = 'right', className }: SheetContentProps) {
  const { open, setOpen } = React.useContext(SheetContext);

  const slideVariants = {
    right: {
      hidden: { x: '100%', opacity: 0 },
      visible: { x: 0, opacity: 1 },
      exit: { x: '100%', opacity: 0 },
    },
    left: {
      hidden: { x: '-100%', opacity: 0 },
      visible: { x: 0, opacity: 1 },
      exit: { x: '-100%', opacity: 0 },
    },
    top: {
      hidden: { y: '-100%', opacity: 0 },
      visible: { y: 0, opacity: 1 },
      exit: { y: '-100%', opacity: 0 },
    },
    bottom: {
      hidden: { y: '100%', opacity: 0 },
      visible: { y: 0, opacity: 1 },
      exit: { y: '100%', opacity: 0 },
    },
  };

  React.useEffect(() => {
    if (open) {
      document.body.style.paddingRight = 'env(safe-area-inset-right)';
    } else {
      document.body.style.paddingRight = '';
    }

    return () => {
      document.body.style.paddingRight = '';
    };
  }, [open]);

  return (
    <AnimatePresence mode="wait">
      {open && (
        <>
          <motion.div
            key="overlay"
            className="fixed inset-0 bg-black/50 z-[99] backdrop-blur-sm cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            onMouseDown={() => setOpen(false)}
            onTouchStart={() => setOpen(false)}
          />
          <motion.div
            key="content"
            className={cn(
              "fixed z-[100] outline-none shadow-xl bg-[#222831] overflow-y-auto",
              side === 'right' && "top-0 right-0 h-screen w-[280px]",
              side === 'left' && "top-0 left-0 h-screen w-[280px]",
              side === 'top' && "top-0 left-0 w-full h-[300px]",
              side === 'bottom' && "bottom-0 left-0 w-full h-[300px]",
              className
            )}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={slideVariants[side]}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}