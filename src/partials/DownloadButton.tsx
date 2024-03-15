type DownloadButtonProps = {
  href: string;
  text: string;
};

const DownloadButton = ({ href, text }: DownloadButtonProps) => {
  return (
    <button
      className={
        'rounded-md bg-sky-400 px-1 text-sky-900 hover:translate-y-1 hover:bg-sky-600'
      }
    >
      <a href={href} download>
        {text}
      </a>
    </button>
  );
};

export { DownloadButton };
