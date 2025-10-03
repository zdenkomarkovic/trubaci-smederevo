"use client";
import { motion } from "framer-motion";
import React from "react";

const VideoCard = () => {
  return (
    <div>
      {" "}
      <div className="container py-10 md:py-20 px-2 md:px-4 mx-auto grid md:grid-cols-3 gap-4">
        {" "}
        <motion.div
          className="prose prose-lg max-w-none text-slate-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <video
            controls
            loop
            muted
            className="w-full aspect-square object-cover rounded-xl"
          >
            {" "}
            <source
              src="/video-8bca987011f8911b41b7449697e58bfd-V.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </motion.div>
        <motion.div
          className="prose prose-lg max-w-none text-slate-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <video
            controls
            loop
            muted
            className="w-full aspect-square object-cover rounded-xl"
          >
            {" "}
            <source
              src="/video-f72e0aeccc8fcb6c49046f358958a628-V.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </motion.div>
        <motion.div
          className="prose prose-lg max-w-none text-slate-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <video
            controls
            loop
            muted
            className="w-full aspect-square object-cover rounded-xl"
          >
            {" "}
            <source
              src="/video-f9748d77f20d6496d0a0400251b7dee0-V.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>
    </div>
  );
};

export default VideoCard;
