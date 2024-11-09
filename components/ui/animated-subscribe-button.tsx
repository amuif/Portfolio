"use client";

import React, { SetStateAction, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface AnimatedSubscribeButtonProps {
  buttonColor: string;
  buttonTextColor?: string;
  subscribeStatus: boolean;
  initialText: React.ReactElement | string;
  changeText: React.ReactElement | string;
  isSend: boolean;
  setIsSend: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AnimatedSubscribeButton: React.FC<
  AnimatedSubscribeButtonProps
> = ({
  buttonColor,
  subscribeStatus,
  buttonTextColor,
  changeText,
  initialText,
  isSend,
  setIsSend,
}) => {
    return (
      <AnimatePresence mode="wait">
        {subscribeStatus === true ? (
          <motion.button
            className="relative flex w-[200px] items-center justify-center overflow-hidden rounded-md bg-white p-[10px] outline outline-1 outline-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.span
              key="action"
              className="relative block h-full w-full font-semibold"
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              style={{ color: buttonColor }}
            >
              {changeText}
            </motion.span>
          </motion.button>
        ) : (
          <motion.button
            className="relative flex w-[200px] cursor-pointer items-center justify-center rounded-md border-none p-[10px]"
            style={{ backgroundColor: buttonColor, color: buttonTextColor }}
            onClick={() => isSend === true}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.span
              key="reaction"
              className="relative block font-semibold"
              initial={{ x: 0 }}
              exit={{ x: 50, transition: { duration: 0.1 } }}
            >
              {initialText}
            </motion.span>
          </motion.button>
        )}
      </AnimatePresence>
    );
  };
