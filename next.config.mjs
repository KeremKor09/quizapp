/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [ "antd", "@ant-design", "rc-util", "rc-pagination", "rc-picker", "rc-notification", "rc-tooltip", "rc-tree", "rc-table", "rc-tabs", "rc-time-picker", "rc-upload", "rc-collapse", "rc-menu", "rc-dropdown", "rc-select", "rc-form", "rc-input-number", "rc-checkbox", "rc-radio", "rc-switch", "rc-slider", "rc-input", "rc-calendar", "rc-progress", "rc-steps", "rc-rate", "rc-tree-select", "rc-cascader", "rc-transfer", "rc-input-number", "rc-color-picker", "rc-mentions", "rc-avatar", "rc-badge", "rc-alert", "rc-popover", "rc-notification", "rc-tooltip", "rc-collapse", "rc-drawer", "rc-modal", "rc-popconfirm", "rc-progress", "rc-spin"],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
};

export default nextConfig;
