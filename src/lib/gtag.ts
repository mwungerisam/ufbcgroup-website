// Log the pageview with their URL
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID, {
      page_path: url,
    });
  }
};

// Log specific events happening
interface EventProps {
  action: string;
  category: string;
  label: string;
  value?: number;
}

export const event = ({ action, category, label, value }: EventProps) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
