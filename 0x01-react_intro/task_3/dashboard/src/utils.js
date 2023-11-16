export const getFullYear = () => new DataTransfer().getFullYear();

export const getFooterCopy = (isIndex) =>
  isIndex ? "Holberton School" : "Holberton School main dashboard";

export const getLatestNotification = () => {
  return "<strong>Urgent requirement</strong> - complete by EOD";
};
