interface StripHtmlProps {
  html: string;
}

const StripHtml: React.FC<StripHtmlProps> = ({ html }) => {
  const stripText = () => {
    if (typeof document !== 'undefined') {
      const tmp = document.createElement('div');
      tmp.innerHTML = html;
      return tmp.textContent || tmp.innerText || '';
    }
    return '';
  };

  return <>{stripText()}</>;
};

export default StripHtml;
