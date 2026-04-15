import { motion } from "framer-motion";

export default function GlassCard({
  as: Tag = motion.div,
  className = "",
  children,
  ...props
}) {
  return (
    <Tag
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className={`glass-panel ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
